import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react'
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';
import Main from './page/user/order/maintotal/Main';

function App() {

  return (
    <div >
      {/* <SignIn /> */}
      <Main/>
      {/* <SignUp /> */}

    </div>
  );
}

export default App;
