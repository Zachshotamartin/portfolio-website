import React from "react";
import styles from "./Main.module.css";
import Headshot from "../headshot/Headshot";
const Main = () => {
  return (
    <div className={styles.container}>
      <Headshot />

      <div className={styles.textContainer}>
        <h1 className={styles.text}>About Me</h1>
        <p className={styles.text}>
          About Me Hi, I'm Zach! I was born in Fremont, CA and grew up in
          Sacramento. I attended Stanford University for the past 4 years,
          fostering the discovery and love that I have for computer science that
          I wasn't afforded in high school. I studied as a software engineer
          with a focus in Computer Graphics. I love working with cool consumer
          apps and softwares that put people in awe.
        </p>
      </div>
    </div>
  );
};

export default Main;
