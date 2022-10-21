import { call, CallEffect, put, takeEvery, takeLatest} from "redux-saga/effects";
import {USER_LOGIN_REQUEST,USER_REGISTER_REQUEST,USER_LOGIN_SUCCESS,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_LOGIN_FAIL} from '../actions/userActions'
import axios from "axios"
// worker Saga: will be fired on USER_FETCH_REQUESTED actions "https://greatchat.uc.r.appspot.com"
const Address = "http://localhost:5000";
   const config = {
     headers: {
       "Content-Type": "application/json",
     },
   };
function* handler(dispatch){
   yield takeEvery(USER_LOGIN_REQUEST,logUserIn);
   yield takeEvery(USER_REGISTER_REQUEST,registerUser)

}
 function* logUserIn(actions){
    try {
      
      const email = actions.payload.email;
      const password = actions.payload.password;
      console.log(actions)
      const response  = yield call(() => { return axios.post(Address + "/auth/login",{email,password},config);})
      const {data} = response;
   
    yield put({type:USER_REGISTER_SUCCESS,user:data})
    return 0;

    } catch (error) {
       console.log(error);
   yield put({type:USER_REGISTER_FAIL,error}) 
    }
   
    
}
 function* registerUser(actions){
   console.log(actions)
    try {
      
      const name =actions.payload.name;
      const email =actions.payload.email;
      const password =actions.payload.password;
      console.log(actions.payload.name,actions.payload.email,actions.payload.password)
      const response  = yield call(() => { return axios.post(Address + "/auth/",{name,email,password},config);})
      const {data} = response;
   
    yield put({type:USER_LOGIN_SUCCESS,user:data})
    return 0;

    } catch (error) {
       console.log(error);
   yield put({type:USER_LOGIN_FAIL,error}) 
    }
   
    
}
export {handler}