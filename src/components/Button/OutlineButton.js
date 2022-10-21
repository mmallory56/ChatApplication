import React from 'react'
import styled from 'styled-components'

const B1 = styled.button`
display: flex;
justify-content:center;
align-items:center;
flex-direction:row;
  background: transparent;
  color:rgba(255, 165, 165, 1);
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;

border: 1px solid #FFBEBE;


border-radius: 5px;  

margin-right: 20px;

transition: all .4s ;
outline: none;
filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.79));
:active{
 background: #DB5252;
 box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
 
}
`
const OutlineButton = ({onClick,children,style}) => {
    return (
        <B1 onClick={onClick} style={style} >
          {children}  
        </B1>
    )
}

export default OutlineButton
