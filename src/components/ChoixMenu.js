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
                  <Link class="lineUp" to={`/${item.object_slug}`} key={item.title}>
                      {item.title}               
                  </Link>
                ))}
              </MainMenuinner>
            </MainMenuWrapper>
        )}/>
    
);
