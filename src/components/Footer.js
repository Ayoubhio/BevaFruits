import React from "react"
import styled from "styled-components"
import SocialMenu from './SocialMenu';
import UsefulLinks from './UsefulLinks';
import { graphql,StaticQuery } from "gatsby"
import '../styles/menu.css'

const Foot = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;    
    padding: 10px;
    border-top: 5px solid #FFEBCD;
    background-color: #A9A9A9 ; 
`
const Titre = styled.h3`
    font-size : 3vh ;
    color: #F0E68C ;

`
const Main = styled.div`
  padding: 20px;
`

export default () => (
    <StaticQuery query={graphql `
    {
          allWordpressPage(filter: {slug: {eq: "contact-2"}}) {
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
            {props.allWordpressPage.edges.map (item =>(
               <Foot>
                    <Main>
                        <Titre>Useful Links</Titre>
                        <UsefulLinks/>
                    </Main>
                    <Main>
                        <Titre>Contact Us</Titre>
                        <span dangerouslySetInnerHTML={{__html: item.node.content}}/>
                    </Main>
                    <Main>
                        <Titre>Follow Us</Titre>
                        <SocialMenu/>
                    </Main>
               </Foot> 
            ))}
        </div>
    )}/>
 );



