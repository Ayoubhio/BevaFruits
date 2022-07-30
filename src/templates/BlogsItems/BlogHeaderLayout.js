import React from "react"
import Header from '../../components/Header';
import { graphql,StaticQuery } from "gatsby"


  export default () => (
   <StaticQuery query={graphql `
   {
         allWordpressPage(filter: {slug: {eq: "blog"}}) {
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
       <div>
           {props.allWordpressPage.edges.map (item =>(
            <div>
                 <Header
                   titre ={item.node.title}
                   source={item.node.featured_media.source_url}
                  /> 
             </div> 
           ))}
       </div>
   )}/>
);