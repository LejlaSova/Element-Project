import React, { useState } from "react";
import "../css/home.css";
import "../css/destinations.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import data1 from "../data1.json";
console.log(data1);

function Destinations() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedItem(index);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="destinations-box"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data1[selectedItem].image1})`,
      }}
    >
      <div className="navigation">
        <Link to="/">
          <img src="./images/Logo.png" alt="Logo" id="logo" />
        </Link>

        <div className="nav">
          <div className="burger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className="flex2">
            <div className={`nav-links ${isOpen ? "active" : ""}`} id="">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/destinations" onClick={toggleMenu}>
                Destinations
              </Link>
              <HashLink smooth to="/#story-section" onClick={toggleMenu}>
                Our Story
              </HashLink>
              <HashLink smooth to="/#how-we-work-section" onClick={toggleMenu}>
                How We Work
              </HashLink>
              <HashLink smooth to="/#ispiration_section" onClick={toggleMenu}>
                Inspiration
              </HashLink>
              <HashLink smooth to="/#contact-section" onClick={toggleMenu}>
                Contact
              </HashLink>

              <HashLink smooth to="/#contact-section" className="btn" id="mainBtn">
                Get In Touch
              </HashLink>
            </div>
          </div>
         
        </div>
      </div>

      <p id="titleBig">{data1[selectedItem].titleBig}</p>

      <div className="middleBox">
        <div className="title">
          <img src="./images/IconMenu.png" alt="IconMenu" id="IconMenu" />
          <p id="explore">Explore Destonations</p>
        </div>

        <p id="titleSmall">{data1[selectedItem].titleSmall}</p>

        <p id="stepss">
          {data1[selectedItem].step3} <span>{data1[selectedItem].step4}</span>{" "}
        </p>
      </div>

      <div className="lastBox">
        <p id="descrip">{data1[selectedItem].descrip}</p>

        <div className="nav-buttons">
          {data1.map((item, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={selectedItem === index ? "active" : ""}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {item.step1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
