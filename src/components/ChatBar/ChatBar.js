import React from 'react'
import styled from 'styled-components'
import {AiOutlineGif} from 'react-icons/ai'
import {BsImageFill} from 'react-icons/bs'
import Button from '../Button/Button'

const Container = styled.form`
display: flex;
align-items: center;
position:fixed;
bottom: 5vh;
left:9.5%;
width:81%;
height: 60px;

background: rgba(239, 239, 239, 1);
box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`
const Input = styled.input`
width:75%;
height:100%;
background-color:transparent;
border: none;
font-size:20px;
padding-left: 20px;
&:active{
    border:none;
    outline:none;
}
&:hover{
    border:none;
    outline:none;
}
`;
const GifIcon = styled(AiOutlineGif)`
font-size: 30px;
border-width: 1px;
border-color: rgba(91, 91, 91, 1);
border-style: solid;

background-color:rgba(255, 255, 255,.1);
color: rgba(91, 91, 91, 1);
padding: 5px;
border-radius:5px;
margin-left: 20px;


filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, .8));
transition: all .2s ;
&:active{
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, .9));
}
`
const ImageIcon = styled(BsImageFill)`
font-size: 30px;
border-width: 1px;
border-color: rgba(91, 91, 91, 1);
border-style: solid;

background-color:rgba(255, 255, 255,.1);
color: rgba(91, 91, 91, 1);
padding: 5px;
border-radius:5px;
margin-left: 26px;


filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, .5));
transition: all .2s ;
&:active{
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, .9));
}
`

export const ChatBar = ({sendMessage,userProfile}) => {
    const [message, setMessage] = React.useState("");
   console.log(sendMessage,userProfile)
    return (
        <Container onSubmit={e=>{e.preventDefault(); sendMessage(message,userProfile); setMessage("");}}>
           <Input placeholder="Speak your mind" value={message} onChange={e=>setMessage(e.target.value)}></Input> 
           
           <GifIcon></GifIcon>
           <ImageIcon/>
           <Button onSubmit={e=>{e.preventDefault(); sendMessage(message,userProfile)}} style={{height:"70%",marginLeft:"30px",fontSize:"20px",paddingLeft:'30px',paddingRight:"30px",backgroundColor:"#FF8271"}}>Submit</Button>
        </Container>
    )
}
