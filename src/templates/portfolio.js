import React from "react"
import Layout from '../components/Layout'
import styled from "styled-components"

const FeuturedImage = styled.img`
max-width : 300px ; 
margin : 16px 0 ;
`

export default ({pageContext}) => ( //pagecontext va contenir tous les valeurs des attributs qui sont mentionnees dans gatsby-node.js pour le portfolio posts
    <Layout>
        <h1>
          {pageContext.title}
        </h1> 
        <strong>
          Web-Site url :
        </strong>
        <a href= {pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer ">
          {pageContext.acf.portfolio_url}
        </a>
        <div>
        <FeuturedImage src={pageContext.featured_media.source_url} />
        </div>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
    </Layout>
  )
  
