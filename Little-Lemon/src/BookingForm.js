import React from "react";
import logo from './Asset 9@4x.png';
import rA from './restaurant.jpg';
import rB from './restaurant chef B.jpg';
import './BookingForm.css';
import {
    Link
} from "react-router-dom";

function BookingForm(){
    return(
        <form style={{display:"grid", width:"600px", gap:"20px", justifyContent: 'center', alignItems: 'center', borderRadius:'16px', marginTop:'80px', marginLeft:'500px', marginBottom:'80px', paddingTop:'80px', paddingBottom:'100px', paddingLeft:'5px', paddingRight:'5px'}} className="booking-form">
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
           <label for="res-date">Choose a date</label>
           <input type="date" id="res-date"/>
           <label for="res-time">Choose the time</label>
           <select id="res-time">
               <option>17:00</option>
               <option>18:00</option>
               <option>19:00</option>
               <option>20:00</option>
               <option>21:00</option>
               <option>22:00</option>
           </select>
           <label for="guests">Number of guests</label>
           <input type="number" placeholder="1" min="1" max="10" id="guests"/>
           <label for="occasion">Occasion</label>
           <select id="occasion">
               <option>Birthday</option>
               <option>Anniversary</option>
               <option>Proposal</option>
           </select>
           <label id='seating'>Seating Options</label>
           <label>
               <span id='standard'>Standard</span>
               <input type="radio" name="myRadioInput" value="Standard" />
           </label>
           <label>
               <span id='outside'>Outside</span>
               <input type="radio" name="myRadioInput" value="Outside" />
           </label>
           <Link to='/signin'>
               <input type="submit" value="Make Your reservation" id="reserve"/>
           </Link>
        </form>
    )
}

export default BookingForm;