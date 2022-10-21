import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display: flex;

align-items:center;
width:80%;
padding: 10px;
margin-top: 16px;
background: rgba(142, 142, 142, 0.4);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 4px;
`;
const UserImage = styled.img`
width: 50px;
height: 50px;
margin-left:15px;
margin-right: 30px;
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;

`
const Msg= styled.p`
color: white;
font-size:26px;
margin:0px;
`
export const ChatMessage = ({message,name="placeholder",image="./images/place.png"}) => {
    console.log(message,name)
    return (
        <Container>
        <UserImage src={image} /><TextContainer><h2 style={{margin:"0px",color:"#F97575"}}>{name}</h2><Msg>{message}</Msg></TextContainer>   
        </Container>
    )
}
