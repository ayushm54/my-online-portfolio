import React from "react";
import "./left-panel.css";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";

const LeftPanel = () => {
  return (
    <>
      <ul className="item-list">
        <li className="item">
          <a
            href="https://github.com/ayushm54"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon-color" />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/a-maheshwari/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon-color" />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.kaggle.com/ayushmaheshwari13"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaKaggle className="icon-color" />
          </a>
        </li>
        <li>
          <div className="vl"></div>
        </li>
      </ul>
    </>
  );
};

export default LeftPanel;
