import React from "react";
import styles from "./Project.module.css";

const Project = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
      <div className={styles.infocontainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Project;
