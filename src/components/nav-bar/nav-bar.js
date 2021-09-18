import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from "./NavBarElements";

const style = {
  "btn-link": {
    "border-radius": "0.5rem",
    background: "transparent",
    padding: "10px 22px",
    color: "#e85a4f",
    outline: "none",
    border: "1.5px solid #e85a4f",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "text-decoration": "none",
    "margin-left": "24px",
    "&:hover": {
      transition: "all 0.2s ease-in-out",
      background: "rgb(232, 90, 79)",
      color: "#ffffff",
    },
  },
};

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to="/about" />
      <Bars />
      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/experience" activeStyle>
          Experience
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact
        </NavLink>
      </NavMenu>
      {/*<NavBtn>
          <NavBtnLink to="/resume">Resume</NavBtnLink>
        </NavBtn>*/}
      <NavBtn>
        <NavBtnLink
          href="https://firebasestorage.googleapis.com/v0/b/ayush-maheshwari-portfolio.appspot.com/o/Ayush_Maheshwari_Resume.pdf?alt=media&token=a089fffa-a0d8-4390-a60e-4f19bd0c85d8"
          target="_blank"
          rel="noreferrer"
          style={style["btn-link"]}
        >
          Resume
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
