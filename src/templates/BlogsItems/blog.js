import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components";
import Footer from '../../components/Footer';
import BlogMainLayout from './BlogMainLayout';
import { Link } from "gatsby";
import '../../styles/menu.css'


const FeuturedImage = styled.img`
max-width : 100% ; 
border-top-left-radius : 2vh ;
border-top-right-radius : 2vh ;
`

const GlobMain = styled.div`
    display: grid;
    margin-left : 50px;
    grid-template-columns: 250px 250px 250px 250px;    
    padding: 20px;
`

export default ({pageContext}) => 
    {
    return(
        <Layout>
            <BlogMainLayout/>
            <GlobMain>
                {pageContext.posts.map(post =>(
                    <div class="card" key={post.node.wordpress_id}>
                        <Link class="lien" to={`/post/blog/${post.node.slug}`}>
                            <FeuturedImage src={post.node.featured_media.source_url} />
                            <p dangerouslySetInnerHTML={{__html: post.node.content}}/>
                        </Link>
                    </div>
                ))}
            </GlobMain>
            <Footer/>
        </Layout>
    )
}