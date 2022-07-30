import React from "react"
import { graphql,StaticQuery,Link } from "gatsby"
import styled  from "styled-components";



const DataSlider = [
    {
    id: 1 ,
    content: "From trees to shleves",
    source: "http://beva-fruits.local/wp-content/uploads/2022/07/a-scaled.jpg"
    },
    {
    id: 2 ,
    content: "It’s all about the fruit",
    source: "http://beva-fruits.local/wp-content/uploads/2022/07/b-scaled.jpg"
    },
    {
    id: 3 ,
    content: "The solution for better fruit distribution",
    source: "http://beva-fruits.local/wp-content/uploads/2022/07/c-scaled.jpg"
    },
    {
    id: 4 ,
    content: "The world is in your fruit",
    source: "http://beva-fruits.local/wp-content/uploads/2022/07/d-scaled.jpg"
    },
    {
    id: 5 ,
    content: "Beva Fruits International (BFI) has been successful in importing and distributing fresh fruit from the four corners of the world and bringing it to the doorsteps of its European clients.",
    source: "http://beva-fruits.local/wp-content/uploads/2022/07/e-scaled.jpg"
    },
    {
    id: 6 ,
    content: "Fruit quality at its finest",
    source: "http://beva-fruits.local/wp-content/uploads/2022/07/f-scaled.jpg"
    },
    {
    id: 7 ,
    content: "As&nbsp;fresh as it can get",
    source: "http://beva-fruits.local/wp-content/uploads/2022/07/g-scaled.jpg"
    },
]
// const test = () => (
//         <StaticQuery query={graphql `
//         {
//             allWordpressWpBeva(sort: {fields: title}) {
//                 edges {
//                   node {
//                     id
//                     content
//                     featured_media {
//                     source_url
//                     }
//                   }
//                 }
//               }
//         }
//         `} render={props =>(
//               <div>
//                 {props.allWordpressWpBeva.edges.map (item =>(
//                   <div>
//                     <script
//                       dangerouslySetInnerHTML={{
//                       __html: `
//                                 var data = [
//                                   {
//                                     content : "",
//                                     source: ""
//                                    }
//                                  ];
//                                  data.content = `(item.node.content)`;
//                                  data.source =  `(item.node.featured_media.source_url)`;
//                                  DataSlider.add(data);
//                               `,
//                     }}
//                     />
//                   </div>
//                 ))}
//               </div>
//         )}/>
    
// );
export default DataSlider