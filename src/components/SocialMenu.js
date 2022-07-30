import React from "react"
import { graphql,StaticQuery,Link } from "gatsby"
import styled  from "styled-components";



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
  font-size : 2.5vh ;
  font-weight : bolder; 
  padding : 8px 16px ;
  text-decoration: none;
`


export default () => (
        <StaticQuery query={graphql `
        {
          allWordpressWpApiMenusMenusItems(filter:{name: {eq: "Social"}}) {
            edges {
              node {
                name
                items {
                  title
                  url
                }
              }
            }
          }
        }
        `} render={props =>(
            <MainMenuWrapper>
              <MainMenuinner>
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map (item =>(
                  <MenuItem to={item.url} key={item.title}>
                      {item.title}               
                  </MenuItem>
                ))}
              </MainMenuinner>
            </MainMenuWrapper>
        )}/>
    
);
