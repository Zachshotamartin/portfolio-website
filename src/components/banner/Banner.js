/*************  ✨ Codeium Command 🌟  *************/
import React from "react";
import styles from "./Banner.module.css";
import linkedinLogo from "../../res/images/LinkedinLogo.avif";
import siteLogo from "../../res/images/sitelogo.png";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img
        src={siteLogo}
        alt="Site Logo"
        className={`${styles.image} ${styles.imageLeft}`}
      />
      <h1 className={styles.text}>Hey! Yo! Visual Computation</h1>
      <a
        href="https://www.linkedin.com/in/zachary-martin-0a6437185/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn"
          className={`${styles.image} ${styles.imageRight}`}
        />
      </a>
    </div>
  );
};

export default Banner;
