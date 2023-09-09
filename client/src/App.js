import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import LoginForm from './Login.js';

import LoginForm from "./Login";

import RegisterForm from "./Register";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
