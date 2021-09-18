import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className="hello-text">Hi, my name is</h1>
      <div>
        <h2 className="big-heading">Ayush Maheshwari</h2>
      </div>
      <div>
        <h3
          className="big-heading"
          style={{ color: "#8e8d8a", "font-size": "clamp(34px, 8vw, 66px)" }}
        >
          I create software
        </h3>
      </div>
      <div>
        <p
          style={{
            margin: "20px 0px 0px",
            "max-width": "600px",
            color: "#8e8d8a",
          }}
        >
          I am a software professional with 5+ years of experience in the IT
          industry. I am always looking to learn something new each day. My
          areas of interest include Data Science and Machine Learning.
        </p>
      </div>
      <div style={{ "margin-top": "50px" }}>
        <a className="btn-link" href="mailto:maheshwari.ayush54@gmail.com">
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default About;
