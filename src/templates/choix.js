import React from "react"
import Layout from "../components/Layout"
import styled  from "styled-components";
import ChoixMenu from "../components/ChoixMenu";
import { graphql,StaticQuery } from "gatsby"
import '../styles/menu.css'
// import {useNavigate} from 'react-router-dom';
// import {useHistory} from "react-router-dom";


const ImageWrapper = styled.div`
    position: relative;
    display: flex;
`
const FeuturedImage = styled.img`
   width : 100% ; 
   max-height : 88vh  ;
   margin-top :5px;
`
const Menu = styled.div`
    position : absolute;
    top:10% ;
    right : 15% ;
    font-weight: 800;
    `
// const Menu_2 = styled(Menu)`
//   position : absolute;
//   top:10% ;
//   right : 15% ;
//   font-weight: 800;
//     `

const But = styled.button`
      position : absolute;
      top:5% ;
      right : 5% ;
      width:5%;
      color: black;
      font-size : 3vh ;
      
    `
  // const navigate = useNavigate();
  // const history = useHistory();

  export default () => (
    
      <StaticQuery query={graphql `
      {
            allWordpressPage(filter: {slug: {eq: "choix"}}) {
                  edges {
                    node {
                      id
                      title
                      content
                      featured_media {
                        source_url
                        }
                    }
                  }
                }
      }
      `} render={props =>(
        
          <Layout>
              {props.allWordpressPage.edges.map (item =>(
                  <ImageWrapper key={item.node.id}> 
                    <h1 class="titre" dangerouslySetInnerHTML={{__html: item.node.content}}/> 
                    <FeuturedImage src={item.node.featured_media.source_url} />  
                    {/* <But onClick={() => history.goBack()}>Go</But> */}
                    <Menu>
                       <ChoixMenu/>
                    </Menu>
                  </ImageWrapper>
              ))}
          </Layout>
      )}/>
  
);

  
