import React from "react";
import GreekSalad from './greek salad.jpg';
import Bruchetta from './bruchetta.png';
import LemonDessert from './lemon dessert.jpg';
import DishIcon from './Dish icon.svg';
import './Specials.css';

function Specials(){
    return(
       <>
           <div class="specialsrow">
              <div class="specialscolumn">
                  <div class="specialscard">
                      <img src = {GreekSalad} 
                      alt='greek salad' 
                      width={50}
                      height={180}
                      className="card-image"
                      />
                      <div className='cardBody'>
                          <div className="cardTitle">
                              <h3>Greek Salad</h3>
                              <h3 className='Price'>$ 12.99</h3>
                          </div>
                          <p>Fresh and flavorful Greek Salad featuring crisp lettuce, juicy tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, all tossed in a zesty lemon-oregano vinaigrette. Delicious!</p> 
                      </div>
                      <div className="card-bottom">
                         <button className='orderButton'>Order for Delivery</button>
                         <img src= {DishIcon}
                         alt="dish icon"
                         className="card-icon"
                         />
                      </div>
                 </div>
             </div>
             <div class="specialscolumn">
                  <div class="specialscard">
                      <img src = {Bruchetta} 
                      alt='bruchetta' 
                      width={50}
                      height={180}
                      className="card-image"
                      />
                      <div className='cardBody'>
                          <div className="cardTitle">
                              <h3>Bruschetta</h3>
                              <h3 className='Price'>$  8.99</h3>
                          </div>
                          <p>Savor our classic bruschetta: toasted artisan bread topped with fresh tomatoes, basil, garlic, and drizzled with extra virgin olive oil. A simple, yet delightful taste of Italy in every bite.</p> 
                      </div>
                      <div className="card-bottom">
                         <button className='orderButton'>Order for Delivery</button>
                         <img src= {DishIcon}
                         alt="dish icon"
                         className="card-icon"
                         />
                      </div>
                 </div>
             </div>
             <div class="specialscolumn">
                  <div class="specialscard">
                      <img src = {LemonDessert} 
                      alt='lemon dessert' 
                      width={50}
                      height={180}
                      className="card-image"
                      />
                      <div className='cardBody'>
                          <div className="cardTitle">
                             <h3>Lemon Dessert</h3>
                             <h3 className='Price'>$  5.00</h3>
                          </div>
                          <p>Indulge in our zesty lemon dessert, a perfect balance of tangy and sweet. Featuring a velvety lemon custard, buttery crust, and a hint of citrus zest, it's pure sunshine on a plate!</p> 
                      </div>
                      <div className="card-bottom">
                         <button className='orderButton'>Order for Delivery</button>
                         <img src= {DishIcon}
                         alt="dish icon"
                         className="card-icon"
                         />
                      </div>   
                 </div>
             </div>
          </div> 
       </>
    )
}

export default Specials;