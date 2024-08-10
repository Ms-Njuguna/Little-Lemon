import React from "react";
import Food from './restauranfood.jpg';
import './Header.css';
import {
    Link
} from "react-router-dom";

function Header(){
    return(
        <>
           <header className="App-header">
               <div className="Header-description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Based in Chicago, Illinois, Little Lemon is<br></br> a family-owned Mediterranean restaurant, focused<br></br> on traditional recipes served with a modern<br></br> twist. The chefs draw inspiration from Italian,<br></br> Greek, and Turkish culture and have a menu of<br></br> 12–15 items that they rotate seasonally. The<br></br> restaurant has a rustic and relaxed atmosphere<br></br> with moderate prices, making it a popular place for<br></br> a meal any time of the day.</p>
                    <Link to='/booking'>
                        <button  className="reserve-a-table">Reserve a Table</button>
                    </Link>
               </div>
               <img
                 src={Food}
                 className="Food-image"
                 alt="food"
                 width={330}
                 height={320}
                />
           </header>
        </>
    )
}

export default Header;