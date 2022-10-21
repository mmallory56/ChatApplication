import {USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,
 USER_LOGIN_FAIL,
 USER_LOGOUT} from "../user/actions/userActions"


export function userReducer(state={},action){
  switch (action.type){
    case USER_LOGIN_REQUEST:
      return {...state, loading:true};
    case USER_LOGIN_SUCCESS:
      return {user:action.user,loading:false};
    case USER_LOGIN_FAIL:
      return {error:action.error,loading:false};
 case USER_REGISTER_REQUEST:
      return {...state, loading: true};
    case USER_REGISTER_SUCCESS:
      return{user: action.user,loading:false};
    case USER_REGISTER_FAIL:
     return {error: action.error,loading:false};

    case USER_LOGOUT:
      return {};
     default:
      return state;
  }
   
}