import React from "react";
import styles from "./Main.module.css";
import Headshot from "../headshot/Headshot";

// import ColorDivGrid from "../color/ColorDivGrid";
const Main = () => {
  return (
    <div className={styles.container}>
      <Headshot />

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hi, I'm Zach.</h1>
        <p className={styles.description}>
          Software Engineer | Former Gymnast | Graphics Enthusiast
        </p>
      </div>
    </div>
  );
};

export default Main;
