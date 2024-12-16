import React from "react";
import styles from "./Main.module.css";
import Headshot from "../headshot/Headshot";
import githubLogo from "../../res/images/githubIcon.png";
import linkedinLogo from "../../res/images/linkedinIcon.png";
// import ColorDivGrid from "../color/ColorDivGrid";
const Main = () => {
  return (
    <div className={styles.container}>
      <Headshot />

      <div className={styles.textContainer}>
        <p className={styles.text}>
          About Me Hi, I'm Zach! I was born in Fremont, CA and grew up in
          Sacramento. I attended Stanford University for the past 4 years,
          fostering the discovery and love that I have for computer science that
          I wasn't afforded in high school. I studied as a software engineer
          with a focus in Computer Graphics. I love working with cool consumer
          apps and softwares that put people in awe.
        </p>
        <div className={styles.iconContainer}>
          <a
            href="https://github.com/Zachshotamartin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Github" className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/zachary-martin-0a6437185"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="Linkedin" className={styles.icon} />
          </a>
        </div>
        {/* <ColorDivGrid /> */}
      </div>
    </div>
  );
};

export default Main;
