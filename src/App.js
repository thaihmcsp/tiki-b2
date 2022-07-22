
import './App.css';

import React, { lazy, useState } from 'react'
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';
import Main from './page/user/order/maintotal/Main';
// import Login from './page/admin/login/Login';
import Login from './page/shop/login/Login';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (


    <div>
      <SignUp />
    </div>


  );
}

export default App;
