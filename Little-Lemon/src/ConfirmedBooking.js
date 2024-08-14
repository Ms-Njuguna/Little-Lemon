// src/components/ConfirmedBooking.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css'; 
import logo from './Logo .svg';

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-booking-container">
            <img src={logo} 
            alt="logo"
            width={130}
            height={140}
            className="confirmation-logo"/>
            <h2 className="confirmed-title">Booking Confirmed!</h2>
            <p className="confirmed-message">Your reservation has been successfully confirmed and <br></br>details sent to your email. We look forward to seeing you!</p>
            <Link to="/" className="back-home-link">
                <span className="arrow">&#8592;</span> Go Back to Homepage
            </Link>
        </div>
    );
};

export default ConfirmedBooking;
