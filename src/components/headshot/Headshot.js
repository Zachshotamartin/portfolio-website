import React, { useState } from "react";
import headshot from "../../res/images/headshot.jpg";
import styles from "./Headshot.module.css";

const Headshot = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.red} ${isHovered ? styles.hovered : ""}`}></div>
      <div
        className={`${styles.orange} ${isHovered ? styles.hovered : ""}`}
      ></div>
      <div
        className={`${styles.green} ${isHovered ? styles.hovered : ""}`}
      ></div>
      <div
        className={`${styles.blue} ${isHovered ? styles.hovered : ""}`}
      ></div>
      <img
        className={styles.headshot}
        src={headshot}
        alt="headshot"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default Headshot;
