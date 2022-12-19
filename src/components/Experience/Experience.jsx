import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

export const Experience = () => {
  return (
    <div className="section exp_section" id="experience">
      <div className="section_intro">What Skills I have</div>
      <div className="section_title">My Experience</div>

      <div className="exp_card_container">
        <div className="exp_card">
          <h1 className="exp_card_title">Front-End Skills</h1>
          <div className="exp_card_element">
            <BsPatchCheckFill className="icon" />
            <div>
              <h1 className="skill">HTML</h1>
              <p className="level">Pro</p>
            </div>
          </div>
          <div className="exp_card_element">
            <BsPatchCheckFill className="icon" />
            <div>
              <h1 className="skill">CSS</h1>
              <p className="level">Intermediate</p>
            </div>
          </div>
          <div className="exp_card_element">
            <BsPatchCheckFill className="icon" />
            <div>
              <h1 className="skill">JavaScript</h1>
              <p className="level">Intermediate</p>
            </div>
          </div>
          <div className="exp_card_element">
            <BsPatchCheckFill className="icon" />
            <div>
              <h1 className="skill">React</h1>
              <p className="level">Intermediate</p>
            </div>
          </div>
        </div>
        <div className="exp_card">
          <h1 className="exp_card_title">Back-End Skills</h1>
          <div className="exp_card_element">
            <BsPatchCheckFill className="icon" />
            <div>
              <h1 className="skill">Node.js</h1>
              <p className="level">Intermediate</p>
            </div>
          </div>
          <div className="exp_card_element">
            <BsPatchCheckFill className="icon" />
            <div>
              <h1 className="skill">Java</h1>
              <p className="level">Intermediate</p>
            </div>
          </div>
          <div className="exp_card_element">
            <BsPatchCheckFill className="icon" />
            <div>
              <h1 className="skill">MongoDB</h1>
              <p className="level">Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
