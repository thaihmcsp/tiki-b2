import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react'
import SignUp from './page/user/signUp/SignUp';
import SignIn from './page/user/signIn/SignIn';

function App() {

  return (
    <div >
      <SignIn />

      {/* <SignUp /> */}

    </div>
  );
}

export default App;
