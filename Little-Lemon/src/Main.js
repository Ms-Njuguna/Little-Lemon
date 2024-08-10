import React from "react";
import Specials from './Specials';
import CustomersSay from './CustomersSay.js';
import Chicago from './Chicago.js';
import './Main.css';

function Main(){
    return(
        <>
           <section className="main-banner">
                <div className="main-heading">
                    <h2>This week's Specials</h2>
                </div>
                <div className="online-menu">
                    <button>Online Menu</button>
                </div>
           </section>
           <section className="specials">
              <Specials/>
           </section>
           <section>
               <CustomersSay/>
           </section>
           <section>
                <Chicago/>
           </section>
        </>
    )
}

export default Main;