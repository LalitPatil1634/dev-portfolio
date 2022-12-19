import React from "react";
// import { BsPeopleFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";

import "./About.css";

import imgSection from "../../assets/about.jpg";

export const About = () => {
  return (
    <div className="section about_section" id="about">
      <div className="section_intro">Get To Know Me</div>
      <div className="section_title">About Me</div>

      <div className="about">
        <div className="about_img">
          <div className="image_bg"></div>
          <img src={imgSection} alt="me" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_single_card">
              <FaTrophy className="icon" />
              <h1>Experience</h1>
              <p>1+ Years Working</p>
            </div>
            <div className="about_single_card">
              <GoFileSubmodule className="icon" />
              <h1>Projects</h1>
              <p>10+ Projects</p>
            </div>
          </div>
          <div className="v-2rem"></div>
          <div className="about_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            adipisci veritatis sequi laudantium, libero vero deleniti! Dolorem,
            magnam totam dolor deleniti minus culpa illo expedita autem porro
            perferendis, et impedit.
          </div>
          <div className="v-2rem"></div>
          <button>Let's Talk</button>
        </div>
      </div>
    </div>
  );
};
