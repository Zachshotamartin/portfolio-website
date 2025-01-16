import React, { useState } from "react";
import picture1 from "../../res/images/picture1.jpg";
import picture2 from "../../res/images/picture2.JPG";
import picture3 from "../../res/images/picture3.JPG";
import picture4 from "../../res/images/picture4.jpg";
import styles from "./Headshot.module.css";

const Headshot = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pictureIndex, setPictureIndex] = useState(0);
  const pictures = [picture1, picture2, picture3, picture4];

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setPictureIndex(pictureIndex + 1 > 3 ? 0 : pictureIndex + 1);
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
        src={pictures[pictureIndex]}
        alt="headshot"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default Headshot;
