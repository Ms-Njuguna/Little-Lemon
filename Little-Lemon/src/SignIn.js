import React from "react";
import logo from './Asset 9@4x.png';
import './SignIn.css';

function SignIn(){
    return(
        <form style={{display:"grid", width:"600px", gap:"20px", justifyContent: 'center', alignItems: 'center', borderRadius:'16px', marginTop:'80px', marginLeft:'500px', marginBottom:'80px', paddingTop:'80px', paddingBottom:'100px', paddingLeft:'5px', paddingRight:'5px'}} className="booking-form">
           <img src={logo} 
           alt="logo"
           width={30}
           height={40}
           className="form-logo"/>
           <h1>Little Lemon</h1>
           <h3>Chicago</h3>
           <p>Sign in to collect points</p>
           <label for="res-date"><span style={{color: '#ff0000', marginRight:'8px'}}>*</span>First Name</label>
           <input type="text" id="res-date" required/>
           <label for="res-time"><span style={{color: '#ff0000', marginRight:'8px'}}>*</span>Last Name</label>
           <input type="text" id="res-time" required/>
           <label for="guests"><span style={{color: '#ff0000', marginRight:'8px'}}>*</span>Phone Number</label>
           <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="guests" required/>
           <label for="occasion"><span style={{color: '#ff0000', marginRight:'8px'}}>*</span>Email</label>
           <input type="email" id="occassion" style={{paddingTop:'8px', paddingBottom:'8px'}} required/>
           <label id='seating'><span style={{color: '#ff0000', marginRight:'8px'}}>*</span>7-character Password is all you need</label>
           <input type="password" id="seating" minLength="7" style={{paddingTop:'8px', paddingBottom:'8px'}} required/>
           <textarea id="comments" name="comments" rows="4" cols="50" placeholder="Add a special request (optional)"></textarea>
           <input type="submit" value="Continue" id="reserve"/>
        </form>
    )
}

export default SignIn;