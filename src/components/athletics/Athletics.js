import React from "react";
import styles from "./Athletics.module.css";

const Athletics = () => {
  return (
    <div>
      <h1>Athletics</h1>
      <button className={styles.button}>Vault</button>
      <button className={styles.button}>Floor</button>
      <button className={styles.button}>Pommel Horse</button>
      <button className={styles.button}>Rings</button>
      <video className={styles.video} controls>
        <source
          src="https://res.cloudinary.com/dqgjy4d1c/video/upload/v1655108100/athletics/athletics.mp4"
          type="video/mp4"
        />
      </video>
      <ul>
        <li>Three-time NCAA team champion (2021-23)</li>
        <li>Three-time NCAA All-American (2020-22)</li>
        <li>MPSF Individual Champion (2023: vault)</li>
        <li>All-MPSF on vault (2023)</li>
        <li>Two-time MPSF All-Academic Scholar-Athlete (2022-23)</li>
        <li>Two-time CGA All-America Scholar-Athlete (2020-21)</li>
      </ul>
    </div>
  );
};

export default Athletics;
