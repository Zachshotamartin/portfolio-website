import React from "react";
import styles from "./Project.module.css";
import arrow from "../../../res/images/arrow1.png";
import arrowRight from "../../../res/images/arrow1Right.png";

const Project = ({ imageUrl, title, description, borderColor }) => {
  return (
    <img
      className={styles.image}
      src={imageUrl}
      alt={title}
      style={{ border: `.75rem solid ${borderColor}` }}
      onClick={() => {
        window.location.href = `/projects/${title}`;
      }}
    />
  );
};

export default Project;
