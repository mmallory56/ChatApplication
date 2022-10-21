import React,{useEffect} from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import InputComponent from '../../components/Input/InputComponent'
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper'
import {useUser} from '../../hooks/useUser';
import { useHistory } from "react-router-dom";
const Header = styled.h4`
margin-top:50px;
margin-bottom: 20px;
display: flex;
align-items: center;
font-family: Roboto Condensed;
font-style: normal;
font-weight: normal;
font-size: 43px;
color: #FFFFFF;
text-shadow: 8px 7px 7px rgba(0, 0, 0, 0.25);
`
const Border = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
width:50%;
height:auto;
padding: 30px;
background-color: #656565;
@media screen and (max-width:900px){

    width:90%;

}
@media screen and (min-width:900px){

    width:70%;

}
@media screen and (min-width:1200px){

    width:60%;

}

box-sizing: border-box;
filter: drop-shadow(13px 10px 14px rgba(0, 0, 0, 0.25));
border-radius: 21px;

`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
flex-direction: column;

background: linear-gradient(241.79deg, #000000 -23.63%, rgba(0, 0, 0, 0.564583) 47.42%, rgba(0, 0, 0, 0.86) 139.54%);
`
const Logo = styled.img`
`
const Form = styled.form`
display: flex;
justify-content: center;

flex-direction: column;
width:50%;
`;
const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
box-shadow: .1rem .1rem .2rem black;
width: 100px;
height:100px;
background-color: grey;

`
const ProfileScreen = () => {
    const [email,setEmail]=React.useState("");
    const [name,setName]=React.useState("");
    const [password,setPassword]= React.useState("");
    const [confirmPassword,setConfirmPassword]= React.useState("");
    const {user,loginUser} = useUser();
    const history = useHistory();
     useEffect(() =>{
        console.log(user)
        if(user){
          setEmail(user.email)
          setName(user.name)
        }
    },[user])
    const handleSubmit=(e)=>{
        e.preventDefault();
        loginUser(email,password);

    }
    return (
        <ScreenWrapper>
        <Container>
        <Header style={{color:"black"}}>Profile:</Header>
        <Border>
            
            <Form onSubmit={(e)=>{handleSubmit(e)}}>
            <Box>Select Profile Pic</Box>
            <InputComponent label="Name" value={name} setValue={setEmail}/>
            <InputComponent label="Email" value={email} setValue={setEmail}/>
            <InputComponent label="New Password" value={password} setValue={setPassword}/>
            <InputComponent label="Confirm New Password" value={confirmPassword} setValue={setConfirmPassword}/>
           <div style={{display:"flex",justifyContent:"left",alignItems:"start",width:"67%"}}>
            <Button style={{width:"auto",height:"auto",marginTop:"50px",fontSize:"30px",padding:"15px",borderRadius:"10px"}}>Update Profile</Button>   
           </div>
            
            </Form>
        </Border>
        </Container>
        </ScreenWrapper>
    )
}

export default ProfileScreen

