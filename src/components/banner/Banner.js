/*************  ✨ Codeium Command 🌟  *************/
import React from "react";
import styles from "./Banner.module.css";
import linkedinLogo from "../../res/images/linkedinIcon3.png";
import siteLogo from "../../res/images/sitelogo.png";
import githubLogo from "../../res/images/github.png";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={siteLogo} alt="Site Logo" className={styles.imageLeft} />
      <h1 className={styles.text}>Hey! Yo! Visual Computation</h1>
      <a
        href="https://www.linkedin.com/in/zachary-martin-0a6437185/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubLogo} alt="GitHub" className={styles.imageRight} />
        <img src={linkedinLogo} alt="LinkedIn" className={styles.imageRight} />
      </a>
    </div>
  );
};

export default Banner;
