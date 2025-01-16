/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Navigation.module.css";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {location === "/" && (
          <li onClick={() => (window.location.href = `/moreaboutme`)}>
            <a className={`${styles.link} ${styles.blue}`}>More About Me</a>
            <div className={`${styles.listItem} ${styles.blueContainer}`}></div>
          </li>
        )}
        {location !== "/" && (
          <li onClick={() => (window.location.href = `/`)}>
            <a className={`${styles.link} ${styles.blue}`}>Back</a>
            <div className={`${styles.listItem} ${styles.blueContainer}`}></div>
          </li>
        )}

        {/* <li>
          <a href="#portfolio" className={`${styles.link} ${styles.green}`}>
            Portfolio
          </a>
          <div className={`${styles.listItem} ${styles.greenContainer}`}></div>
        </li> */}
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
