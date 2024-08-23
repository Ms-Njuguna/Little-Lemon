import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from './Footer';
import Homepage from './Homepage.js';
import BookingPage from './BookingPage.js';
import SignInPage from './SignInPage.js';
import './App.css';
import ConfirmedBooking from './ConfirmedBooking.js';
import { HashRouter as Router, Route, Switch }  from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
        <Route path='/signin' element={<SignInPage/>}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
