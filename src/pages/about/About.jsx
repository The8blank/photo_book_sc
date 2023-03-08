import React from "react";
import "./about.scss";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-main__presentation">
        <h1>Hello i'm Samuel</h1>
        <p>Model - Web Developeur</p>
        <h2>You can contact me on</h2>
        <div className="about-main__presentation__social-container">
          <a href="https://www.instagram.com/ottleg_/" target="_blank">
            <AiFillInstagram />
          </a>
          <a href="mailto:samuelchojnacki.pro@gmail.com">
            <AiFillMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
