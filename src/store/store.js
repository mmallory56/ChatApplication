import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {handler as userHandler} from './user/sagas/userSaga'
// or from 'reactotron-react-js'

import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// create our new saga monitor


const reduxPersistConfig={
  key:'root',
  storage: storage
}
const persistedReducer = persistReducer(reduxPersistConfig,reducer);



// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


const getStorage=async(item)=>{
  const items = await storage.getItem(item)
  console.log(items)
  return items
}
  

const initialState = {
  user:getStorage('user'),
};
// mount it on the Store
const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const persistedStore = persistStore(store)
// then run the saga
sagaMiddleware.run(userHandler);

// render the application
export { store,persistedStore };