import React, { useState } from "react";
import "../css/inspiration.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Inspiration(search) {
  return (
    
     <div className="ispiration_section" id="ispiration_section">
     
           <div className="bar">
               <div className="title">
                 <img src="./images/IconMenu.png" alt="IconMenu" id="IconMenu" />
                 <p>Inspiration</p>
               </div>
               <HashLink smooth to="#homeDiv">
                 {" "}
                 <button id="scroll">
                   <img src="./images/IconScrollUp.png" alt="IconPlay" />
                 </button>{" "}
               </HashLink>
             </div>
     
               <div id="inspir-text">
               <p >Here you will find a selection of safaris that illustrate the style of travel we promote, 
               ready to be tailored to your personal travel aspirations.</p>
               </div>
     
                 <div id="searchBox">
                 <input type="text" id="input"/>
                 <button onClick={search} id="searchButton">
                    Get Inspired  </button>
                </div>
        
         <div className="images" id="images"></div>
     
           </div>
        
  )
}

export default Inspiration