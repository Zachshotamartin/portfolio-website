import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <h1 className={styles.text}>
        Hey! Yo! I’m Zach Martin and I’m a visual
        computing software engineer.
      </h1>
      
    </div>
  );
};

export default Banner;
