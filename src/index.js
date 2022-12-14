import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import {store,persistedStore} from './store/store'
ReactDOM.render(
  <Router>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
         <App />
      </PersistGate>
      </Provider>
  </Router>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
