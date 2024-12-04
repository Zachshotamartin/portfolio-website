import React from "react";
import headshot from "../../res/images/headshot.jpg";
import styles from "./Headshot.module.css";
const Headshot = () => {
  return (
    <div>
      <div className={styles.orange}></div>
      <div className={styles.blue}></div>
      <div className={styles.green}></div>
      <img className={styles.headshot} src={headshot} alt="headshot" />
    </div>
  );
};

export default Headshot;
