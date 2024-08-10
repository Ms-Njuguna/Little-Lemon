import React from "react";
import BookingForm from './BookingForm.js';
import home from './home icon.svg';
import {
    Link
} from "react-router-dom";
import './BookingPage.css';

const BookingPage = () =>{
    return(
        <>
            <Link to='/'>
                <img src={home} 
                alt="home icon"
                className="homeIcon"/>
            </Link>
            <BookingForm/>
        </>
    )
}

export default BookingPage;