import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./HeroSection.css";
import Resume from "../../assets/Resume1.pdf";
import pass from "../../assets/Pass.jpg";

export const HeroSection = () => {
  return (
    <div className="section hero_section" id="home">
      <h2 className="section_intro">Hello I'm</h2>
      <h2 className="section_title hero_title">Lalit Patil</h2>
      <h2 className="section_tagline">Front-End Developer</h2>
      <div className="v-3rem"></div>

      <div className="hero_btns">
        <a
          href={Resume}
          download="Lalit-Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="sec_btn">Download CV</button>
        </a>
        <button>Let's Talk</button>
      </div>
      <div className="v-3rem"></div>

      <div className="hero_content">
        <div className="hero_icons">
          <FaLinkedin />
          <FaGithubSquare />
          <div className="line"></div>
        </div>
        <img src={pass} alt="lalit-img" className="hero_img" />
        <p className="hero_scroll">SCROLL DOWN</p>
      </div>
    </div>
  );
};
