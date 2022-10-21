import React from 'react'
import styled from "styled-components"

const Brand = styled.img`
    height:100%;
    width:auto;
`

const NavBrand = ({ src,onClick }) => {
    
    return (
        <Brand src={src} onClick={onClick}/>
            
       
    )
}

export default NavBrand
