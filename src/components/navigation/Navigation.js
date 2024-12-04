import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className={styles.listItem}>
          <a href="/athletics">Athletics</a>
        </li>
        <li className={styles.listItem}>
          <a href="/resume">Resume</a>
        </li>
        <li className={styles.listItem}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
