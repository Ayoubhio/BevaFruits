import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import BlogHeaderLayout from './BlogHeaderLayout';
import Footer from '../../components/Footer';
import { Link } from "gatsby";

const Main = styled.div`
margin : 30px auto ;
display: flex;
`
const FeuturedImage = styled.img`
   max-width : 50vh ; 
   float left ;
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
         <BlogHeaderLayout/>
         <Main>
            <FeuturedImage src={pageContext.featured_media.source_url} />
            <Content>
               <Titre>
                  <MenuItem to={`/${"blog"}`}>
                     Blog
                  </MenuItem>
                  &nbsp;&nbsp;{'>> Article numero '} {pageContext.title}
               </Titre>
               <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
            </Content>
         </Main>
         <Footer/>
     </Layout>
  )
  
