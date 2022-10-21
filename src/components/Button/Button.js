import React from 'react'
import styled from 'styled-components'

const B1 = styled.button`
  background: #F97575;
  color:white;
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 32px;  
padding:3px;
padding-right: 30px;
padding-left:30px;
margin-right: 20px;
outline: none;
border: none;
transition: all .4s ;
:active{
 background: #DB5252;
 box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
 
}
`

const Button = ({onClick,children,style}) => {
    return (
        <B1 data-testid="button" style={style} onClick={onClick}>
            {children}
        </B1>
    )
}

export default Button
