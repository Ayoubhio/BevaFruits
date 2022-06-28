import React from "react"
import { graphql,StaticQuery,Link } from "gatsby"
import styled from "styled-components";

const PortfolioWrapper = styled.div`
display: flex ;
justify-Content: center;
`
const PortfolioItem = styled.div`
width : 300px ;
border :1px solid #efefef ;
padding: 16px;
margin: 16px;
`
const FeuturedImage = styled.img`
max-width : 100% ; 
margin : 16px 0 ;
`
export default () => (
    <StaticQuery query={graphql `
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
              }
            }
          }
    }
    `} render={props =>(<PortfolioWrapper>
              {props.allWordpressWpPortfolio.edges.map (item =>(
              <PortfolioItem  key={item.node.id}>
                  <h2>{item.node.title}</h2>  
                  <FeuturedImage src={item.node.featured_media.source_url} />
                  <div dangerouslySetInnerHTML={{__html: item.node.excerpt}}/>
                  <Link to={`/portfolio/${item.node.slug}`}>
                    Read More
                  </Link>        
              </PortfolioItem>
              ))}
            </PortfolioWrapper>)}/>
);