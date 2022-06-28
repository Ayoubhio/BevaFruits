import React from "react"
import { StaticQuery,graphql } from "gatsby";
import styled from "styled-components";


const SiteInfoWrapper = styled.div`
    flex-grow : 1;
    color: bisque ;
    margin : auto 0 
`
const Sitetitle = styled.div`
    font-weight : bold;
`
const SiteDescription = styled.div`

`

export default () => (
    <StaticQuery query={graphql `
    {
        allWordpressSiteMetadata {
            edges {
              node {
                name
                description
              }
            }
          }
    }
    `} render={props =>(
        <SiteInfoWrapper>
            <Sitetitle>
            {props.allWordpressSiteMetadata.edges[0].node.name}
            </Sitetitle>
            <SiteDescription>
            {props.allWordpressSiteMetadata.edges[0].node.description}           
            </SiteDescription>
        </SiteInfoWrapper>
    )}/>

);