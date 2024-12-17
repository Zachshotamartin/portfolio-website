import React from "react";
import styles from "./Project.module.css";
import arrow from "../../../res/images/arrow.png";
import arrowRight from "../../../res/images/arrowRight.png";

const Project = ({ imageUrl, title, description }) => {
  const handlePrevImage = () => {
    return;
  };
  const handleNextImage = () => {
    return;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <button
          className={styles.componentbutton}
          style={{
            backgroundImage: `url(${arrow})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          onClick={handlePrevImage}
        ></button>
        <img className={styles.image} src={imageUrl} alt={title} />
        <button
          className={styles.componentbutton}
          style={{
            backgroundImage: `url(${arrowRight})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          onClick={handleNextImage}
        ></button>
      </div>
      <div className={styles.infocontainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Project;
