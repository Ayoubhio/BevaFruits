import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import TeamHeaderLayout from './TeamHeaderLayout';
import Footer from '../../components/Footer';
import { Link } from "gatsby";


const Main = styled.div`
margin : 30px auto ;
display: flex;
`
const FeuturedImage = styled.img`
   max-width : 50vh ; 
   float left ;
   -webkit-filter: grayscale(100%);
   filter: grayscale(100%);
`
const Content = styled.div`
float : right ;
margin-left : 10px;
`
const Titre = styled.h1`
   width:100%;
   color: black;
   font-size: 2.5vh;
   font-weight: 1000;
`
const MenuItem = styled(Link)`
  color: #2F4F4F;
`

export default ({pageContext}) => (
      <Layout>
         <TeamHeaderLayout/>
         <Main>
            <FeuturedImage src={pageContext.featured_media.source_url} />
            <Content>
               <Titre>
                  <MenuItem to={`/${"team"}`}>
                     Team
                  </MenuItem>
                  &nbsp;&nbsp;{'>>'} {pageContext.title}
               </Titre>
               <div dangerouslySetInnerHTML={{__html: pageContext.excerpt}}/>
            </Content>
         </Main>
         <Footer/>
     </Layout>
  )
  
