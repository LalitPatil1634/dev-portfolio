import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="section contact_section" id="contact">
      <div className="section_intro">Get In Touch</div>
      <div className="section_title">Contact Me</div>

      <div className="contact">
        <div className="contact_card_container">
          <div className="contact_card">
            <MdMarkEmailRead className="icon" />
            <div className="contact_card_title">Email</div>
            <div className="contact_card_subtitle">lalitlp1634@yahoo.com</div>
            <div className="contact_card_tagline">Send a Message</div>
          </div>
          <div className="contact_card">
            <FaLinkedinIn className="icon" />
            <div className="contact_card_title">LinkedIn</div>
            <div className="contact_card_subtitle">lalitlp1634@yahoo.com</div>
            <div className="contact_card_tagline">Send a Message</div>
          </div>
          <div className="contact_card">
            <FaTwitter className="icon" />
            <div className="contact_card_title">Twitter</div>
            <div className="contact_card_subtitle">lalitlp1634@yahoo.com</div>
            <div className="contact_card_tagline">Send a Message</div>
          </div>
        </div>
        <div className="contact_form">
          <input
            type="text"
            placeholder="Your Full Name"
            className="contact_form_input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact_form_input"
          />
          <input
            type="email"
            placeholder="Subject"
            className="contact_form_input"
          />
          <textarea
            rows="8"
            placeholder="Type a message..."
            className="contact_form_input"
          />
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};
