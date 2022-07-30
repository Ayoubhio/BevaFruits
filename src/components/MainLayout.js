import React from "react"
import styled  from "styled-components";
import '../styles/menu.css'
import { Link } from "gatsby";

const MenuItem = styled(Link)`
  color: #2F4F4F;
`
const Line = styled.hr`
    margin-top: 25px ; 
    width : 20vh ;
    border: 5px solid #2F4F4F;
    border-radius: 5px;
`
const Parag = styled.span`
  text-align : center ;
  font-size : 3vh ;
`
const MainLayout = (props) =>
{
    const titre = props.titre ;
    const content = props.content ;
    
    return(
        <div>
          <Line/>
          <h1 class="titre_main" >
            <MenuItem to={`/${"home"}`}>
                 Home 
            </MenuItem>
            &nbsp;&nbsp;{'>>'} {titre}
          </h1>
          <Parag dangerouslySetInnerHTML={{__html: content}}/>

        </div>
    )
}

export default MainLayout ; 


