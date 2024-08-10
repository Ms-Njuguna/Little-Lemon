import React from "react";
import SignIn from './SignIn.js';
import home from './home icon.svg';
import {
    Link
} from "react-router-dom";
import './SignInPage.css';
import back from './Recent.svg';

const SignInPage = () =>{
    return(
        <>
            <div className="icons">
               <Link to='/'>
                   <img src={home} 
                   alt="home icon"
                   className="homeIcon"/>
               </Link>
               <Link to='/booking'>
                   <img src={back} 
                   alt="back icon"
                   className="backIcon"/>
               </Link>
            </div>
            <SignIn/>
        </>
    )
}

export default SignInPage;