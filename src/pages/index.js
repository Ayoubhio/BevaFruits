import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import { graphql,StaticQuery } from "gatsby"

const IndexPage = () => (
  <Layout>
    <StaticQuery query={graphql `
    {
      allWordpressPage {
        edges {
          node {
            id
            title
            content
          }
        }
      }
    }
    `} render={props =>(
      <div>
        {props.allWordpressPage.edges.map (page =>(
          <div key={page.node.id}>
            <h1>
              {page.node.title}
            </h1>
            <div dangerouslySetInnerHTML={{__html: page.node.content}}/>
          </div>
        ))}
        <Link to="/page-2">Go back to the second page</Link>
      </div>
    )}/>
    
  </Layout>
)

export default IndexPage
