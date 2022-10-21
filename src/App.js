import React,{useEffect,useState} from 'react'
import './App.css';

import ChatScreen from './screens/ChatScreen';
import SignUpScreen from './screens/SignUpScreen';
import Button from './components/Button/Button';
import LoginScreen from './screens/LoginScreen';

import {
  
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProfileScreen from './screens/profile/ProfileScreen';



function App() {
  
  return (
    <>
    <Switch>
       <Route path="/chat">
        <ChatScreen/>
      </Route>
       <Route path="/profile">
        <ProfileScreen/>
      </Route>
      <Route exact path="/">
      <SignUpScreen/>
      </Route>
      <Route exact path="/login">
        <LoginScreen/>
      </Route>
     
    </Switch>
    
    </>
  );
}

export default App;
