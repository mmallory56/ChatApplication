import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Button from '../components/Button/Button'
import InputComponent from '../components/Input/InputComponent'
import ScreenWrapper from '../components/ScreenWrapper/ScreenWrapper'
import { useUser } from '../hooks/useUser'
import {useHistory} from 'react-router-dom'
const Header = styled.h4`
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
@media screen and (max-width:900px){

    width:90%;

}
@media screen and (min-width:900px){

    width:60%;

}
@media screen and (min-width:1200px){

    width:40%;

}
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
padding:1.8rem;
width:30%;
border: 6px solid #D5D3D3;
box-sizing: border-box;
filter: drop-shadow(13px 10px 14px rgba(0, 0, 0, 0.25));
border-radius: 21px;

`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: auto;
flex-direction: column;
padding-Top:100px;
padding-bottom: 250px;
background: linear-gradient(227.49deg, #2BA600 22.22%, rgba(0, 159, 26, 0.778315)
 38.89%, rgba(2, 113, 73, 0.564583) 54.95%, rgba(2, 124, 96, 0.789799) 75.13%, #003A3A 93.97%);
`
const Logo = styled.img`
`
const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
`;


 const SignUpScreen =()=>{
     const history = useHistory();
     const {user, registerUser} = useUser();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email,name,password,confirmPassword)
        registerUser(email,name,password);
    }

    useEffect(() => {
       if(user){
           history.push("/chat")
       }
    }, [])
    return(
        <ScreenWrapper>
        <Container>
        <Header>Welcome to <Logo src="./images/Brand2.png"/></Header>
        <Border>
            <Form onSubmit={(e)=>handleSubmit(e)}>
            <InputComponent label="Name" value={name} setValue={setName}/>
            <InputComponent label="Email" value={email} setValue={setEmail}/>
            <InputComponent type="password" label="Password" value={password} setValue={setPassword}/>
            <InputComponent type="password" label="Confirm Password" value={confirmPassword} setValue={setConfirmPassword}/>
            <Button type="submit" style={{width:"65%",height:"auto",marginTop:"50px",fontSize:"30px",padding:"20px",marginLeft:"20px",borderRadius:"10px"}}>Get Started Now!</Button>
            </Form>
        </Border>
        </Container>
        </ScreenWrapper>
    )
}

export default SignUpScreen