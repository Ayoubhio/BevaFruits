import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import TeamMainLayout from './TeamMainLayout';
import Layout from '../../components/Layout'
import Footer from '../../components/Footer';

const FeuturedImage = styled.img`
max-width : 25vh ; 
`

const GlobMain = styled.div`
    display: grid;
    margin-left : 50px;
    grid-template-columns: 250px 250px 250px 250px;    
    padding: 5px;
`
const Main = styled.div`
  padding: 10px;
`


export default ({pageContext}) => 
    {
    return(
        <Layout>
            <TeamMainLayout/>
            <GlobMain>
                {pageContext.posts.map(post =>(
                    <Main key={post.node.wordpress_id}>
                            <FeuturedImage src={post.node.featured_media.source_url} />
                            <p dangerouslySetInnerHTML={{__html: post.node.content}}/>
                            <Link to={`/post/${post.node.slug}`}>
                                    Know more about {post.node.title} 
                            </Link>
                    </Main>
                ))}
            </GlobMain>
            <Footer/>
        </Layout>
    )
}
