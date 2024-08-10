import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from './Footer';
import Homepage from './Homepage.js';
import BookingPage from './BookingPage.js';
import SignInPage from './SignInPage.js';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/booking' element={<BookingPage/>}></Route>
        <Route path='/signin' element={<SignInPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
