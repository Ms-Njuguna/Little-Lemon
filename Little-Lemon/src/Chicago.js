import React from "react";
import './Chicago.css';
import A from './Mario and Adrian A.jpg';
import B from './Mario and Adrian b.jpg';

function Chicago(){
    return(
        <>
           <div className="about-section">
              <div className="abot-desription">
                 <h1>Little Lemon</h1>
                 <h3>Chicago</h3>
                 <p>Little Lemon is owned by two Italian brothers, <br></br>Mario and Adrian, who moved to the <br></br> United States to pursue their shared dream of<br></br> owning a restaurant. To craft the menu, Mario<br></br> relies on family recipes and his experience as<br></br> a chef in Italy. Adrian does all the marketing<br></br> for the restaurant and led the effort to<br></br> expand the menu beyond classic<br></br> Italian to incorporate additional cuisines from<br></br> the Mediterranean region.</p>
              </div>
              <div className="about-images">
                   <div className="A">
                       <img src={A}
                       alt="mario and adrian"
                       width={250}
                       height={250}
                       style={{ position: 'absolute', left: 0, top: 250 }}
                       />
                   </div>
                   <div className="B">
                      <img src={B}
                      alt="mario and adrian"
                      width={250}
                      height={250}
                      style={{ position: 'absolute', right: -500, top: 80 }}
                      />
                   </div>
              </div>
           </div>
        </>
    )
}

export default Chicago;