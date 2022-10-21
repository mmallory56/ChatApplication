import React,{useEffect,useState} from 'react'
import { ChatBar } from '../components/ChatBar/ChatBar'
import ScreenWrapper from '../components/ScreenWrapper/ScreenWrapper'
import styled from 'styled-components'
import { ChatMessage } from '../components/ChatMessage/ChatMessage'
import { useChat } from '../hooks/useChat'
import {useUser} from '../hooks/useUser'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import OutlineButton from '../components/Button/OutlineButton'
import { ModalExample } from '../components/Modals/Modal'
import SideDrawer from '../components/SideDrawer/SideDrawer'

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding-top: 10vh;
padding-bottom: 20vh;
width:100%;
height:70vh;
overflow-x: hidden;
overflow-y:scroll;
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
  display: none;
}
`
const Section = styled.section`
width:100%;
height:200%;
background: linear-gradient(241.79deg, #000000 -23.63%, rgba(0, 0, 0, 0.564583) 47.42%, rgba(0, 0, 0, 0.86) 139.54%);
`;


const ChatScreen = () => {
    const history = useHistory();
    const {sendMessage, messages,setRoom } = useChat();
    const [profile, setProfile]= useState();
    const {user} = useUser();
   useEffect(()=>{
    if(user)
     setProfile({name: user.name});

     else
     history.push("/")
   
    
    
   },[])
   
    return (
        <ScreenWrapper>
            {/* <SideDrawer/> */}
            <Section>
                
        <Container>
           
           {messages.map((message,index)=>{
               console.log(message);
             
              return <ChatMessage key={message+index} message={message.message} name={message.name} />
           })}
           <ChatBar sendMessage={sendMessage} userProfile={profile}/>
        </Container>
         
        </Section>
           
        </ScreenWrapper>
    )
}

export default ChatScreen
