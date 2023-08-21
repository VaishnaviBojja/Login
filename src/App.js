
import React from 'react';
import {  BrowserRouter,Route,Routes}   from 'react-router-dom'; 
import LoginForm from './Login.js';
// import RegisterForm from './Register.js';
import './App.css';

const App= () => {
  return (
    <BrowserRouter>
    <div>
  <p>App.js</p>
</div>
     <Routes>
     <Route  path="/Login" element={LoginForm} ></Route>
    
    </Routes> 

    {/* <Route  path="/Register" element={RegisterForm} ></Route>  */}

    </BrowserRouter>
  );
}

export default App;
