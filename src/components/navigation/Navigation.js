import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <a href="#athletics" className={`${styles.link} ${styles.blue}`}>
            Athletics
          </a>
          <div className={`${styles.listItem} ${styles.blueContainer}`}></div>
        </li>
        <li>
          <a href="#portfolio" className={`${styles.link} ${styles.green}`}>
            Portfolio
          </a>
          <div className={`${styles.listItem} ${styles.greenContainer}`}></div>
        </li>
        {/* <li>
          <a href="/resume" className={`${styles.link} ${styles.orange}`}>
            Resume
          </a>
          <div className={`${styles.listItem} ${styles.orangeContainer}`}></div>
        </li>
        <li>
          <a href="/contact" className={`${styles.link} ${styles.red}`}>
            Contact
          </a>
          <div className={`${styles.listItem} ${styles.redContainer}`}></div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
