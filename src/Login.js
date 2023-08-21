import React from "react";
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return(

   <div className="w-full  h-sreen block flex items-center justify-center"> 
   <form className="bg-white shadow-md border rounded ">
   <label className="block">
     <div className="mb-4">
       <input className="  border rounded w-full text-gray-700 leading-tight focus:outline-none " id="email" type="text" placeholder="E-mail"/>
     </div>
     <div className="mb-6">
       <input className="  border rounded w-full text-gray-700  leading-tight focus:outline-none  disabled" id="password" type="password" placeholder="Password"/>
     </div>
     <div>
     <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline" type="button">
         Sign In
       </button>
     </div>
     <div className="flex items-center">
       <p className="text-center text-gray-500 text-xs">Don't have an account?</p>
       <Link to="/Register" className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-blue-800">
         Sign Up
       </Link>
     </div>
     </label>
   </form>
   </div>    
  // <p>Hello</p>
  );
}
export default LoginForm;






  


        // <div>
        //     <form>               <div>
        //             {/* <label for="email"></label> */}
        //             <input type="text" id="email" name="email" placeholder="E-mail"/>
        //         </div>
        //         <div>
        //         {/* <label for="password"></label> */}
        //             <input type="text" id="password" name="password" placeholder="Password"/>
        //         </div>
        //         <button type="submit">Sign in</button>
        //     </form>
        // </div>


//         / px-8 pt-6 pb-8 mb-4
//        //  py-2 px-3 
//          py-2 px-3 mb-3
//         py-2 px-4


//   <p class="text-center text-gray-500 text-xs">
//     &copy; All rights reserved.
//   </p> */


  