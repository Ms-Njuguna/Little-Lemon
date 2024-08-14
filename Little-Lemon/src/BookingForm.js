import React from "react";
import logo from './Asset 9@4x.png';
import rA from './restaurant.jpg';
import rB from './restaurant chef B.jpg';
import './BookingForm.css';
// import {
//     Link
// } from "react-router-dom";
import { useState } from 'react';




function BookingForm({ date, setDate, time, setTime, availableTimes, dispatch, submitForm }){

    const [guests, setGuests] = useState('');
    const [occassion, setOccassion] = useState('');
    const [myRadioInput, setMyRadioInput] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occassion,
            myRadioInput
            // Include other form data here if necessary
        };
        submitForm(formData);
    };

    const handleInputChange = () => {
        const isDateValid = date !== '';
        const isTimeValid = time !== '';
        const isGuestsValid = guests >= 1;

        setIsFormValid(isDateValid && isTimeValid && isGuestsValid);
    };

    const handleMyRadioInputChange = (e) => {
        setMyRadioInput(e.target.value);
    };


    return(
        <form onSubmit={handleSubmit} onChange={handleInputChange}  style={{display:"grid", width:"600px", gap:"20px", justifyContent: 'center', alignItems: 'center', borderRadius:'16px', marginTop:'80px', marginLeft:'500px', marginBottom:'80px', paddingTop:'80px', paddingBottom:'100px', paddingLeft:'5px', paddingRight:'5px'}} className="booking-form">
           <img src={logo} 
           alt="logo"
           width={30}
           height={40}
           className="form-logo"/>
           <h1>Little Lemon</h1>
           <h3>Chicago</h3>
           <p>Find a table for any occassion</p>
           <div className="restaurantImages">
               <img src={rA} 
               alt="restaurant"
               width={170}
               height={170}
               className="rA"/>
               <img src={rB} 
               alt="restaurant"
               width={170}
               height={170}
               className="rB"/>
           </div>
           <label htmlFor="resdate">Choose a date</label>
           <input type="date"  id="resdate" required onChange={(e) => {
                const selectedDate = new Date(e.target.value);
                setDate(selectedDate);
                dispatch({ type: 'UPDATE_DATE', payload: selectedDate });
            }}/>
           <label htmlFor="restime">Choose the time</label>
           <select id="restime" value={time} required onChange={(e) => setTime(e.target.value)}>
               {availableTimes.map((timeOption, index) => (
                    <option key={index} value={timeOption}>
                        {timeOption}
                    </option>
                ))}
           </select>
           <label htmlFor="guests">Number of guests</label>
           <input type="number" placeholder="1" min="1" max="10" id="guests" required value={guests} onChange={(e) => setGuests(e.target.value)}/>
           <label for="occasion">Occasion</label>
           <select id="occasion" value={occassion} required onChange={(e) => setOccassion(e.target.value)}>
               <option>Birthday</option>
               <option>Anniversary</option>
               <option>Proposal</option>
           </select>
           <label id='seating'>Seating Options</label>
           <label htmlFor="standard">
               <span id='standard'>Standard</span>
               <input type="radio" name="myRadioInput"  value="Standard" checked={myRadioInput === 'Standard'} onChange={handleMyRadioInputChange}/>
           </label>
           <label htmlFor="outside">
               <span id='outside'>Outside</span>
               <input type="radio" name="myRadioInput"  value="Outside"  checked={myRadioInput === 'Outside'} onChange={handleMyRadioInputChange}/>
           </label>
           <input type="submit" value="Make Your reservation" id="reserve" disabled={!isFormValid}/>
        </form>
    )
}

export default BookingForm;