import React, { useState } from "react";
import "../css/home.css";
import "../css/ourStory.css";
import "../css/howWeWork.css";
import "../css/inspiration.css";
import "../css/contact.css";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";
import data from "../data.json";
console.log(data);

async function search() {
  const imagesContainer = document.getElementById("images");
  imagesContainer.innerHTML = "";

  try {
    const searchWorld = document.getElementById("input").value;
    console.log("Search term:", searchWorld);

    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchWorld}&per_page=20&client_id=Ku44sux2o66KDPZhDaTMD7ninpo3-3nJZas3eppkOQA`,
      {
        headers: {
          "Accept-Version": "v1",
        },
      }
    );

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);

    data.results.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.urls.regular;

      img.addEventListener("click", () => {
        window.open(photo.urls.full, "_blank");
      });

      imagesContainer.appendChild(img);
    });
  } catch (error) {
    console.error("Detailed error:", error);
    imagesContainer.innerHTML = "Error loading images. Please try again.";
  }
}

function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgrounds = [
    "./images/mainImgHalonBay.jpg",
    "./images/afrka-village.jpg",
    "./images/andreea-popa.jpg",
    "./images/mountains.jpg",
  ];

  const changeBackground = () => {
    setCurrentBgIndex((prevIndex) =>
      prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [BgIndex, setBgIndex] = useState(0);

  const texts = data;

  const changeBack = () => {
    setBgIndex((prevIndex) =>
      prevIndex === texts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "08a95702-afa7-4431-a7ff-572a4a847224");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank you for your interest!",
        text: "We're happy to hear you soon!",
        icon: "success",
      });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mainDiv">
      <div
        className="homeDiv"
        id="homeDiv"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgrounds[currentBgIndex]})`,
        }}
      >
        <button className="btnPlay" id="Play" onClick={changeBackground}>
          <img src="./images/IconPlay.png" alt="IconPlay" />
        </button>

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
                <HashLink smooth to="#story-section" onClick={toggleMenu}>
                  Our Story
                </HashLink>
                <HashLink smooth to="#how-we-work-section" onClick={toggleMenu}>
                  How We Work
                </HashLink>
                <HashLink smooth to="#ispiration_section" onClick={toggleMenu}>
                  Inspiration
                </HashLink>
                <HashLink smooth to="#contact-section" onClick={toggleMenu}>
                  Contact
                </HashLink>

                <HashLink
                  smooth
                  to="#contact-section"
                  className="btn"
                  id="mainBtn"
                >
                  Get In Touch
                </HashLink>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="btnPlay" id="Play" onClick={changeBackground}>
          <img src="./images/IconPlay.png" alt="IconPlay" />
        </button> */}
      </div>

      <div className="story-section" id="story-section">
        <div className="bar">
          <div className="title">
            <img src="./images/IconMenu.png" alt="IconMenu" id="IconMenu" />
            <p>Our Story</p>
          </div>
          <HashLink smooth to="#homeDiv">
            {" "}
            <button id="scroll">
              <img src="./images/IconScrollUp.png" alt="IconPlay" />
            </button>{" "}
          </HashLink>
          {/* <HashLink smooth to="#homeDiv" id="Up"> Up </HashLink> */}
        </div>

        <div className="content-container ">
          <div className="TextStoryWelcome">
            <p>Welcome to a world of adventures with ELEMENT</p>
            <p id="p1">
              Our story is deeply rooted in fostering
              meaningful connections, providing genuine care, and upholding a
              strong commitment to our Community.
            </p>
          </div>

          <div className="achievements">
            <div className="achievement1">
              <div id="text">
                <p id="number">3</p>
                <p id="achieves">years of experience in travelling</p>
              </div>
              <div id="line"></div>
            </div>

            <div className="achievement2">
              <div id="text">
                <p id="number">7</p>
                <p id="achieves">inspiring locations</p>
              </div>
              <div id="line"></div>
            </div>

            <div className="achievement3">
              <div id="text">
                <p id="number">34</p>
                <p id="achieves">passionate team members</p>
              </div>
              <div id="line"></div>
            </div>

            <div className="achievement4">
              <div id="text">
                <p id="number">450</p>
                <p id="achieves">satisfied clients</p>
              </div>
              <div id="line"></div>
            </div>

            <div className="achievement5">
              <div id="text">
                <p id="number">500</p>
                <p id="achieves">new impressions</p>
              </div>
              <div id="line"></div>
            </div>
          </div>
        </div>

        <div className="storyPhotos">
          <img src="./images/norway_beach.jpg" alt="Photo" id="storyPhoto1" />

          <img
            src="./images/sunset_mountains.jpg"
            alt="Photo"
            id="storyPhoto2"
          />

          <img src="./images/india-street.jpg" alt="Photo" id="storyPhoto3" />

          <img src="./images/sky_mountains.jpg" alt="Photo" id="storyPhoto4" />

          <img src="./images/kamera_hand.jpg" alt="Photo" id="storyPhoto5" />

          <img src="./images/sunset_friends.jpg" alt="Photo" id="storyPhoto6" />

          <img src="./images/norway_winter.jpg" alt="Photo" id="storyPhoto7" />

          <img src="./images/tree_hands.jpg" alt="Photo" id="storyPhoto8" />
        </div>
      </div>

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

        <button
          className="how-we-work-box"
          key={texts[BgIndex].id}
          id="bigBox"
          onClick={changeBack}
        >
          <p id="steps">
            {texts[BgIndex].step1} <span>{texts[BgIndex].step2}</span>{" "}
          </p>
          <p id="title1">{texts[BgIndex].title}</p>
          <div
            className="smallBox"
            id="smallBox"
            style={{ backgroundImage: `url(${texts[BgIndex].image})` }}
          ></div>
          <p id="textBox">{texts[BgIndex].textBox}</p>
        </button>
      </div>

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
          <p id="p-inspir">
            Here you will find a selection of safaris that illustrate the style
            of travel we promote, ready to be tailored to your personal travel
            aspirations.
          </p>
        </div>

        <div id="searchBox">
          <input type="text" id="input" />
          <button onClick={search} id="searchButton">
            Get Inspired{" "}
          </button>
        </div>

        <div className="images" id="images"></div>
      </div>

      <div className="contact-section" id="contact-section">
        <div className="bar">
          <div className="title">
            <img src="./images/IconMenu.png" alt="IconMenu" id="IconMenu" />
            <p>Contact</p>
          </div>
          <HashLink smooth to="#homeDiv">
            {" "}
            <button id="scroll">
              <img src="./images/IconScrollUp.png" alt="IconPlay" />
            </button>{" "}
          </HashLink>
        </div>

        <form onSubmit={onSubmit}>
          <p id="title5">Join Us</p>

          <div className="boxContactInfo1">
            <div className="input-box">
              {/* <label>Your Name</label> */}
              <input
                type="text"
                className="field"
                placeholder="Your Name"
                name="name"
                required
              />
            </div>
            <div className="input-box">
              {/* <label>Your Surname</label> */}
              <input
                type="text"
                className="field"
                placeholder="Your Surname"
                name="surname"
                required
              />
            </div>
          </div>

          <div className="boxContactInfo1">
            <div className="input-box">
              {/* <label>Email Address</label> */}
              <input
                type="email"
                className="field"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>
            <div className="input-box">
              {/* <label>Your Phone Number</label> */}
              <input
                type="text"
                className="field"
                placeholder="Your Mobile"
                name="mobile"
                required
              />
            </div>
          </div>
          {/* <div className="input-box">
              <label>Your Message</label>
              <textarea name="message" id="" className="field mess" placeholder="Your Message" required></textarea>
         </div> */}
          <button type="submit">Get In Touch</button>
        </form>
      </div>

      <div className="footer-section" id="footer-section">
        <div className="nav-footer"> 
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <HashLink smooth to="#story-section">
              Our Story
            </HashLink>
            <HashLink smooth to="#how-we-work-section">
              How We Work
            </HashLink>
            <HashLink smooth to="#ispiration_section">
              Inspiration
            </HashLink>
            <HashLink smooth to="#contact-section">
              Contact
            </HashLink>
          </div>

          <div className="contactUS">
            <div className="callUS">
                <p>Call Us</p>
                <p>+ 49 151 463 94 612</p>
            </div>
            <div className="emailUS">
                <p>Email Us</p>
                <p>hello@element.travel</p>
            </div>
          </div>
        </div>
    
      </div>
   
  );
}

export default Home;
