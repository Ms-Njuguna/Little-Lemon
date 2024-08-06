import React from "react";
import Food from './restaurantfood.jpg';

function Header(){
    return(
        <>
           <header className="App-header">
               <img src={Food} className="Food-image" alt="food" />
           </header>
        </>
    )
}

export default Header;