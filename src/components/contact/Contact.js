import React from "react";

const styles = {
  "main-heading": {
    "margin-left": "25%",
    "margin-top": "20%",
    "font-size": "clamp(40px, 5vw, 60px)",
    "font-weight": "600",
    color: "#474745",
    "line-height": "1.1",
  },
  "btn-link": {
    "border-radius": "0.5rem",
    background: "transparent",
    padding: "20px 35px",
    color: "#e85a4f",
    outline: "none",
    border: "1.5px solid #e85a4f",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "text-decoration": "none",
    "margin-left": "400px",
    "&:hover": {
      transition: "all 0.2s ease-in-out",
      background: "rgb(232, 90, 79)",
      color: "#ffffff",
    },
  },
  para: {
    "margin-bottom": "50px",
  },
  content: {
    "margin-right": "10%",
  },
};

const Contact = () => {
  return (
    <div style={styles["content"]}>
      <h1 style={styles["main-heading"]}>Get In Touch</h1>
      <p style={styles["para"]}>
        My inbox is always open whether you have a question, a cool idea, or
        just want to say hi. Let's get in touch!
      </p>
      <a
        href="mailto:maheshwari.ayush54@gmail.com"
        rel="noreferrer"
        style={styles["btn-link"]}
      >
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
