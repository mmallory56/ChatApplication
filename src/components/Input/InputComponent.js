import React from 'react'
import styled from 'styled-components'

const Input = styled.input`

height:50px;
width:100%;
padding-left:20px;
padding-right: 20px;
border:none;
outline:none;
background: #FFFFFF;
box-shadow: inset 5px 5px 12px rgba(0, 0, 0, 0.25);
border-radius: 44px;
`;
const Label = styled.div`
color: white;
width:100%;

`
const Container = styled.div`
border:none;
margin-top: 11px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
`;


const InputComponent = ({label,placeholder,value,setValue,type="text"}) => {
    return (
       
            <Container>
            <Label>{label}: </Label>
            <Input type={type} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)}></Input>
            </Container>
       
    )
}

export default InputComponent
