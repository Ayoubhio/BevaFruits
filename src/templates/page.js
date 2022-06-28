import React from "react"
import Layout from "../components/Layout"

export default ({pageContext}) => (
      <Layout>
         <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/> {/* //pour ne pas executer le ' apostrophe */}
         <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
     </Layout>
  )
  
