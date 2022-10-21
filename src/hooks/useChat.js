import React, {useEffect, useState} from 'react'
import io from 'socket.io-client';

let socket;
//'https://greatchat.uc.r.appspot.com/'
const ConnectionPort ="http://localhost:5000/"
export const useChat=()=>{
    
    const [messages, setMessages] = useState([]);
    const [room , setRoom] = useState("");
    
    useEffect(() => {
      
     socket =io(ConnectionPort);
    //  socket.emit("send-message", "niggers","");
     
     socket.on('recieve-message',(message,profile)=>{
        setMessages([...messages,{message,...profile}])
      console.log(message)
    })
   return ()=>{
       socket.close();
   }
    }, [ConnectionPort,room,messages])
  
   useEffect(() =>{

   },[])
    
    const sendMessage = (message, profile)=>{
    setMessages([...messages,{message,...profile}])
      socket.emit("send-message", message,room, profile)
      
    }
    const joinroom=()=>{
      socket.emit("join-room", room)
    }


    return {joinroom, sendMessage, messages, setMessages,setRoom}

}