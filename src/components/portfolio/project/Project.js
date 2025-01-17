import React from "react";
import styles from "./Project.module.css";

const Project = ({ imageUrls, title, description, borderColor }) => {
  return (
    <img
      className={styles.image}
      src={imageUrls}
      alt={title}
      style={{ border: `.5vw solid ${borderColor}` }}
      onClick={() => {
        window.location.href = `/projects/${title}`;
      }}
    />
  );
};

export default Project;
