import React from "react";
import { CiHome } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { BsPatchCheck } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar">
        <a href="#home" className="nav_icon">
          <CiHome className="icon" />
        </a>
        <a href="#about" className="nav_icon">
          <RxPerson className="icon" />
        </a>
        <a href="#experience" className="nav_icon">
          <BsPatchCheck className="icon" />
        </a>
        <a href="#portfolio" className="nav_icon">
          <VscTools className="icon" />
        </a>
        <a href="#contact" className="nav_icon">
          <HiOutlineChatBubbleLeftEllipsis className="icon" />
        </a>
      </div>
    </div>
  );
};
