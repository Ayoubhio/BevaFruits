import React from "react"
import { graphql,StaticQuery,Link } from "gatsby"
import styled  from "styled-components";
import '../styles/menu.css'



const MainMenuWrapper = styled.div`
  display: flex;
  `
const MainMenuinner = styled.div`
  display: flex;
  flex-direction: column;
  `
  const MenuItem = styled(Link)` //wrapp a third-party library component
  color:black ;
  display: block ;
  padding : 4px 8px ;
  text-decoration: none;

`

export default () => (
        <StaticQuery query={graphql `
        {
          allWordpressWpApiMenusMenusItems(filter:{name: {eq: "Choix"}}) {
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
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map (item =>(
                  <MenuItem to={`/${item.object_slug}`} key={item.title}>
                      {item.title}               
                  </MenuItem>
                ))}
              </MainMenuinner>
            </MainMenuWrapper>
        )}/>
    
);
