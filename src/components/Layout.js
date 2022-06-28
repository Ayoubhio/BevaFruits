import React from "react"
import PropTypes from "prop-types"
import MainMenu from "./Mainmenu"
import styled,{ createGlobalStyle } from "styled-components"

const Styleddiv = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap');
body,html{
  fontFamily: 'Open Sans', sans-serif ;
  margin: 0 !important;
  padding: 0 !important;
}
`
const LayoutWrapper = styled.div `
max-width: 960px ;
margin: 0 auto ;
`
const Layout = ({ children }) => {
  return(
  <div>
    <Styleddiv/> {/*elle s'applique sur tte la page meme si elle n'englobe pas les sections mais elle contient un body dans son css*/}
    <MainMenu/>
    <LayoutWrapper>
    {children}
    </LayoutWrapper>
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
