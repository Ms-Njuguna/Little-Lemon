import React from "react";
import './Footer.css';
import flogo from './Asset 20@4x.png';

function Footer(){
    return(
        <>
           <div className="Footer">
              <div className="footer-row">
                  <div className="footer-column">
                      <img src={flogo}
                      alt="footer logo"
                      className="flogo"
                      width={100}
                      height={150}/>
                  </div>
                  <div className="footer-column">
                       <h4>Footer Navigation</h4>
                       <ul>
                          <li>
                              <a href="/home">Home</a>
                          </li>
                          <li>
                              <a href="/about">About</a>
                          </li>
                          <li>
                              <a href="/menu">Menu</a>
                          </li>
                          <li>
                              <a href="/reservations">Reservations</a>
                          </li>
                          <li>
                            <a href="/orderonline">Order Online</a>
                          </li>
                       </ul>
                  </div>
                  <div className="contact-column">
                        <h4>Contact Us</h4>
                        <ul>
                          <li>
                              <a href="/home">Email</a>
                          </li>
                          <li>
                              <a href="/about">Phone No.</a>
                          </li>
                          <li>
                              <a href="/menu">Telephone</a>
                          </li>
                          <li>
                            <a href="/orderonline">P.O Box</a>
                          </li>
                       </ul>
                  </div>
                  <div className="social-column">
                        <h4>Social Media</h4>
                        <ul>
                          <li>
                              <a href="/home">Instagram</a>
                          </li>
                          <li>
                              <a href="/about">Tiktok</a>
                          </li>
                          <li>
                              <a href="/menu">Facebook</a>
                          </li>
                          <li>
                              <a href="/reservations">Youtube</a>
                          </li>
                       </ul>
                  </div>
              </div>
           </div>
        </>
    )
}
export default Footer;