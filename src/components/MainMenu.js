import React from "react"
import { graphql,StaticQuery,Link } from "gatsby"
import styled  from "styled-components";
import SiteInfo from "./SiteInfo"

const MainMenuWrapper = styled.div`
  display: flex;
  background-image: linear-gradient(
    -225deg,
    #AFEEEE 0%,
    #87CEEB 29%,
    #ff1361 67%,
    #fff800 100%
  );
  `
const MainMenuinner = styled.div`
  margin : 0 auto ;
  max-width : 1160px ;
  width : 1160px ;
  height :100%;
  display: flex;
  `
const MenuItem = styled(Link)` //wrapp a third-party library component
  color:bisque ;
  display: block ;
  padding : 8px 16px ;
`

export default () => (
        <StaticQuery query={graphql `
        {
          allWordpressWpApiMenusMenusItems(filter:{name: {eq: "Main Menu"}}) {
            edges {
              node {
                name
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
        `} render={props =>(
            <MainMenuWrapper>
              <MainMenuinner>
                <SiteInfo/>
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map (item =>(
                  <MenuItem to={`/${item.object_slug}`} key={item.title}>
                      {item.title}               
                  </MenuItem>
                ))}
              </MainMenuinner>
            </MainMenuWrapper>
        )}/>
    
)
