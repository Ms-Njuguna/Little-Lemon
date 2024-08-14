import React from "react";
import BookingForm from './BookingForm.js';
import home from './home icon.svg';
import {
    Link
} from "react-router-dom";
import './BookingPage.css';
import  { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './api.js';


function updateTimes(state, action) {
  const date = action.payload;
  const validDate = new Date(date); // Ensure it's a Date object
  return fetchAPI(validDate);
}

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}


function BookingPage (){

  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  
  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmed-booking');
    }
  };

  return(
    <>
      <Link to='/'>
        <img src={home} 
        alt="home icon"
        className="homeIcon"/>
      </Link>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  )
}

export default BookingPage;