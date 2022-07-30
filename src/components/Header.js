import React from "react"
import styled  from "styled-components";
import '../styles/menu.css'

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
`
const FeuturedImage = styled.img`
   width : 100% ; 
   max-height : 50vh  ;
   object-fit: cover;
   margin-top :5px;
`

const Header = (props) =>
{
    const titre = props.titre ;
    const source = props.source ;

    return(
        <ImageWrapper>
            <h1 class="parag_header" >{titre}</h1>
            <FeuturedImage  src={source} />   
        </ImageWrapper>
    )
}

export default Header ; 


