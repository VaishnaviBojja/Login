import React from "react";
import { Link } from 'react-router-dom';

const RegisterForm = () =>{
    return(
        <form className="bg-white shadow">
        <div className="mb-6">
            <h2>Sign up</h2>
            <p className="text-center text-gray-500 text-xs">Enter your email and password to register</p>
        </div>
        <div className="mb-4">
       <input className="  border rounded w-full text-gray-700 leading-tight focus:outline-none " id="email" type="text" placeholder="E-mail"/>
     </div>
     <div className="mb-4">
       <input className="  border rounded w-full text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Username"/>
     </div>
     <div className="mb-6">
       <input className="  border rounded w-full text-gray-700  leading-tight focus:outline-none  disabled" id="password" type="password" placeholder="Password"/>
     </div>
     <div>
     <div>
        <input type="checkbox" id="check" className="accent-pink-500" checked/>
        <label htmlFor="check" className="text-center text-gray-500 text-xs">
            I agree the <h1>Terms and Conditions</h1>
        </label>
     </div>
     <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline" type="button">
         Sign Up
       </button>
     </div>
     <div className="flex items-center">
       <p className="text-center text-gray-500 text-xs">Already have an account?</p>
       <Link to="/Login" className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-blue-800">
         Sign In
       </Link>
     </div>
    </form>
    );
}
export default RegisterForm;