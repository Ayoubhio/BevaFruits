import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styled from "styled-components"
import '../styles/menu.css'
import $ from 'jquery';
//va contenir tous lee bevaposts


const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    margin-top : 5px ;
    justify-content:center ;
`
const FeuturedImage = styled.img`
   width : 100% ; 
   max-height : 88vh ;
   border-radius : 2vh;
`

const Pagination =styled.div`
    display: flex ; 
    justify-content:center ;
`
const PageNumberWrapper = styled.div`
    border : 1px solid #DCDCDC;
    background: ${props => props.isCurrentPage ? '#E0FFFF' : '#DCDCDC'}
`
const PageNumber =styled(Link)`
    display: block ;
    padding : 8px 16px ;
    color: black ;
    font-size : 3vh ;
`

export default ({pageContext}) => (
      <Layout>
        {pageContext.posts.map(post =>(
            <ImageWrapper key={post.node.id}>
               <h1 class="parag" dangerouslySetInnerHTML={{__html: post.node.content}}/>
               <FeuturedImage  src={post.node.featured_media.source_url} />
            </ImageWrapper>
        ))}
         <Pagination>
            {Array.from({length : pageContext.numberOfPages}).map((page,index) => (
                <PageNumberWrapper key={index} isCurrentPage = { index + 1 === pageContext.currentPage}>
                   <PageNumber to={index === 0 ? '/home' : `/beva/${index + 1}/`}>
                      <li></li>
                   </PageNumber>
                </PageNumberWrapper>
            ))}
        </Pagination>
     </Layout>
  )
