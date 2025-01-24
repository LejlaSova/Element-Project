import React, { useState } from "react";
import "../css/howWeWork.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import data from "../data.json";
console.log(data);

function HowWeWork(changeBack, texts, BgIndex) {
  
<HowWeWork changeBack={changeBack} texts={texts} BgIndex={BgIndex}/>

  return (
    <div className="how-we-work-section " id="how-we-work-section">
        <div className="bar">
          <div className="title">
            <img src="./images/IconMenu.png" alt="IconMenu" id="IconMenu" />
            <p>How We Work</p>
          </div>
          <HashLink smooth to="#homeDiv">
            {" "}
            <button id="scroll">
              <img src="./images/IconScrollUp.png" alt="IconPlay" />
            </button>{" "}
          </HashLink>
        </div>

        <button className="how-we-work-box" key={texts[BgIndex].id} id="bigBox" onClick={changeBack}>
             
             <p id="steps">{texts[BgIndex].step1} <span>{texts[BgIndex].step2}</span> </p>
             <p id="title1">{texts[BgIndex].title}</p>
             <div
               className="smallBox"
               id="smallBox"
               style={{ backgroundImage: `url(${texts[BgIndex].image})`,}}>
               </div>
               <p id="textBox">
               {texts[BgIndex].textBox}
               </p>
               </button>  
      </div>
  )
}

export default HowWeWork