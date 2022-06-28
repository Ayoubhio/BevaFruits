const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
 

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home',redirectInBrowser:true, isPermanent: true })
  return new Promise((resolve, reject) => {
    graphql(
      `{
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
              }
            }
          }
        }
      `
    ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js")
        const portfolioUnderContentTemplate = path.resolve("./src/templates/portfolioUnderContent.js")
        _.each(result.data.allWordpressPage.edges, edge => {
           createPage({
            path: `/${edge.node.slug}/`,
            component: slash(edge.node.template=== 'portfolio_under_content.php' ? portfolioUnderContentTemplate : pageTemplate),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====
 
      // ==== PORFTOFOLIO ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpPortfolio {
                edges {
                  node {
                    id
                    title
                    excerpt
                    content
                    slug
                    featured_media {
                      source_url
                    }
                    acf{
                      portfolio_url
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const portfolioTemplate = path.resolve("./src/templates/portfolio.js")
          _.each(result.data.allWordpressWpPortfolio.edges, edge => {
            createPage({
              path: `/portfolio/${edge.node.slug}/`,
              component: slash(portfolioTemplate),
              context: edge.node,
            })
          })
        })
      })
    // ==== END PORTFOLIO ====
    // ==== BLOG POSTS ====
    .then(() => {
      graphql(`{
                  allWordpressPost {
                    edges {
                      node {
                        wordpress_id
                        title
                        slug
                        excerpt
                        date(formatString: "Do MMM YYYY HH:mm")
                        content
                      }
                    }
                  }
                }
      `).then(result => {
       if (result.errors) 
        {
        console.log(result.errors)
        reject(result.errors)
        }
       const posts = result.data.allWordpressPost.edges
       const postsPerPage = 2
       const numberOfPages = Math.ceil(posts.length / postsPerPage)
       const blogPostListTemplate = path.resolve("./src/templates/blogPostList.js")

       Array.from({length: numberOfPages}).forEach((page , index) => {
       createPage({
              component: slash(blogPostListTemplate),
              path: index === 0 ? '/blog' : `/blog/${index + 1}/`,
              context: {
                  posts : posts.slice(index * postsPerPage ,(index * postsPerPage) + postsPerPage ),
                  numberOfPages,
                  currentPage : index + 1
                  }
                })
            })
        const blogPostTemplate = path.resolve("./src/templates/page.js")   
          _.each(posts, post => {
            createPage({
              path: `/post/${post.node.slug}/`,
              component: slash(blogPostTemplate),
              context: post.node,
            })
          })
          resolve()
        })
       })
      })
}
