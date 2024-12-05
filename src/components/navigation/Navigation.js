import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <a href="/portfolio" className={`${styles.link} ${styles.blue}`}>
            Portfolio
          </a>
          <div className={`${styles.listItem} ${styles.blueContainer}`}></div>
        </li>
        <li>
          <a href="/athletics" className={`${styles.link} ${styles.green}`}>
            Athletics
          </a>
          <div className={`${styles.listItem} ${styles.greenContainer}`}></div>
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
