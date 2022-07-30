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
        const choixTemplate= path.resolve("./src/templates/choix.js")
        const companyTemplate= path.resolve("./src/templates/company.js")
        const bfiTemplate= path.resolve("./src/templates/bfi.js")
        const valuesTemplate= path.resolve("./src/templates/values.js")
        const associationTemplate= path.resolve("./src/templates/association.js")
        const productTemplate= path.resolve("./src/templates/products.js")
        const teamTemplate= path.resolve("./src/templates/TeamsItems/team.js")
        const blogTemplate= path.resolve("./src/templates/BlogsItems/blog.js")
        const contactTemplate= path.resolve("./src/templates/contact.js")
        const certificatesTemplate= path.resolve("./src/templates/certificate.js")
        const supplierTemplate= path.resolve("./src/templates/supplier.js")
        const termsTemplate= path.resolve("./src/templates/terms.js")
        _.each(result.data.allWordpressPage.edges, edge => {
          if(edge.node.template === 'choix content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(choixTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'company content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(companyTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'bfi content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(bfiTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'values content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(valuesTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'association content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(associationTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'product content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(productTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'team content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(teamTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'blog content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(blogTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'contact content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(contactTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'certificate content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(certificatesTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'supplier content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(supplierTemplate),
              context: edge.node,
            });
          }
          else if(edge.node.template === 'terms content.php')
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(termsTemplate),
              context: edge.node,
            });
          }
          else
          {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(pageTemplate),
              context: edge.node,
            });
          }
          
           
        })
        
        
        
      })
      // ==== END PAGES ====
 
      // ==== beva posts ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpBeva(sort: {fields: title}) {
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
          const bevaTemplate = path.resolve("./src/templates/homeTest.js")
          const postsPerPage = 7
          const numberOfPages = 1
          const bevaposts = result.data.allWordpressWpBeva.edges

          Array.from({length: numberOfPages}).forEach((page , index) => {
          createPage({
              component: slash(bevaTemplate),
              path: index === 0 ? '/home'   : `/beva/${index + 1}/`,
              context: {
                  posts : bevaposts.slice(index * postsPerPage ,(index * postsPerPage) + postsPerPage ),
                  numberOfPages,
                  currentPage : index + 1
                  }
                })
            })

            // ****************************
          // const bevaTemplate = path.resolve("./src/templates/homeTest.js")
          // const bevapost = result.data.allWordpressWpBeva.edges

          // Array.from({length: 1}).forEach((page , index) => {
          //   createPage({
          //       path: index === 0 ? '/home'   : `/beva/${index + 1}/`,
          //       component: slash(bevaTemplate),
          //       context: bevapost.node,
          //         })
          //     })
            // createPage({
            //   path: `/${bevapost.node.slug}/`,
            //   component: slash(bevaTemplate),
            //   context: bevapost.node,
            // });
            // *****************************
        })
      })
    // ==== END BEVA ====
    // ==== BLOG POSTS ====
    .then(() => {
      graphql(
        `
          {
            allWordpressPost(sort: {fields: date}, skip: 8) {
              edges {
                node {
                  wordpress_id
                  title
                  slug
                  content
                  featured_media {
                    source_url
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
        const posts = result.data.allWordpressPost.edges
       const postsPerPage = 12
       const numberOfPages = Math.ceil(posts.length / postsPerPage)
       const blogPost = path.resolve("./src/templates/BlogsItems/blog.js")

        Array.from({length: numberOfPages}).forEach((page , index) => {
        createPage({
          component: slash(blogPost),
          path: index === 0 ? '/blog' : `/blog/${index + 1}/`,
          context: {
              posts : posts.slice(index * postsPerPage ,(index * postsPerPage) + postsPerPage ),
              numberOfPages,
              currentPage : index + 1
              }
            })
          })
          const blogPostInfo = path.resolve("./src/templates/BlogsItems/blogInfo.js")
          _.each(posts, post => {
            createPage({
              path: `/post/blog/${post.node.slug}/`,
              component: slash(blogPostInfo),
              context: post.node,
            })
          })
          resolve()
      })
    })
    // ==== END BLOG POSTS ====
    // ==== TEAM POSTS ====
    .then(() => {
      graphql(`{
                  allWordpressPost(sort: {fields: date}) {
                    edges {
                      node {
                        wordpress_id
                        title
                        excerpt
                        slug
                        content
                        featured_media {
                          source_url
                        }
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
       const postsPerPage = 8
       const numberOfPages = Math.ceil(posts.length / postsPerPage)
       const blogPostListTemplate = path.resolve("./src/templates/TeamsItems/team.js")

       Array.from({length: numberOfPages}).forEach((page , index) => {
       createPage({
              component: slash(blogPostListTemplate),
              path: index === 0 ? '/team' : `/team/${index + 1}/`,
              context: {
                  posts : posts.slice(index * postsPerPage ,(index * postsPerPage) + postsPerPage ),
                  numberOfPages,
                  currentPage : index + 1
                  }
                })
            })
        const blogPostTemplate = path.resolve("./src/templates/TeamsItems/teamInfo.js")
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
