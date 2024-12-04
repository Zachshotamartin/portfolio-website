import React from "react";
import styles from "./Project.module.css";

const Project = ({ imageUrl, title, description }) => {
  return (
    <div>
      <img className={styles.image} src={imageUrl} alt={title} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Project;
