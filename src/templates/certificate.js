import React from "react"
import Layout from "../components/Layout"
import Header from '../components/Header';
import { graphql,StaticQuery } from "gatsby"
import Footer from '../components/Footer';

  export default () => (
   <StaticQuery query={graphql `
   {
         allWordpressPage(filter: {slug: {eq: "certificates"}}) {
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
                  <div>
                    <Header
                    titre ={item.node.title}
                    source={item.node.featured_media.source_url}
                    />
                    <Footer/>
                  </div>
                  
           ))}
         
       </Layout>
   )}/>
);