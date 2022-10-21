import {useSelector,useStore,useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {USER_REGISTER_REQUEST,USER_LOGIN_REQUEST} from '../store/user/actions/userActions'

export const useUser =()=>{
    const {user} = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    const registerUser =(email,name,password)=>{
        console.log(USER_REGISTER_REQUEST)
        dispatch({type:USER_REGISTER_REQUEST,payload:{email,name,password}});
    }
    const loginUser =(email,password)=>{
        dispatch({type:USER_LOGIN_REQUEST,payload:{email,password}});
    }
    return {user, registerUser,loginUser}
}
