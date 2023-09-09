import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from 'axios';


const RegisterForm = () => {

  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3000/signup',{username,email,password})
    .then(result => console.log(result)) 
    .catch(err =>console.log(err))
  }
  return (
    <div class="main-div">
    <form onSubmit={handleSubmit}>
      <div class="start-div">
        <h1>Sign up</h1>
        <p>
          Enter your email and password to register
        </p>
      </div>
      <div class="mail-div">
        <input
          
          id="email"
          type="text"
          placeholder="E-mail"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="username-div">
        <input
         
          id="username"
          type="text"
          placeholder="Username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div class="password-div">
        <input
         
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <div>
          <input type="checkbox" id="check" class="check" />
          <label htmlFor="check" class="check-l">
              <span class="span-1">I agree the</span> <span class="span-2">Terms and Conditions</span>
          </label>
        </div>
        <button
         class="button"
          type="button"
        >
          Sign Up
        </button>
      </div>
      <div  class="sign-div">
        <p class="sign-div-p">
          Already have an account?
        </p>
        <Link
          to="/Login"
          class="sign-div-l"
        >
          Sign In
        </Link>
      </div>
    </form>
    </div>
  );
};
export default RegisterForm;
