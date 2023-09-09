import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {FaFacebookSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa"
const LoginForm = () => {
  return (
    <>
      <div class="overlap-div">
        <h4>Sign In</h4>
        <div class="social-div">
    <ul class="social">
        <li>
            <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare/></a>
        </li>
        
        <li>
            <a href="https://www.github.com/" target="_blank"><FaGithubSquare /></a>
        </li>
        
        <li>
            <a href="https://www.google.com/" target="_blank"><FaGoogle /></a>
        </li>
    </ul>
    
</div>

      </div> 
      <div class="main-div">
        <div class="form-div">
          <form>
            <div class="mail-div">
              <input
                
                id="email"
                type="text"
                placeholder="E-mail"
                autoFocus
              />
            </div>

            <div class="password-div">
              <input
               
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="remember-me">
          <input
            type="checkbox"
            id="remember"
          />
          <label htmlFor="remember">Remember Me</label>
        </div>
           
            <div>
            <button
              class="button"
              type="button"
            >
              Sign In
            </button>
            </div>
            <div class="sign-div">
              <p class="sign-div-p">
                Don't have an account?
              </p>
              <Link
                to="/Register"
                class="sign-div-l"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
    // <p>Hello</p>
  );
};
export default LoginForm;
