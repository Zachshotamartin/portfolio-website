import React from "react";
import styles from "./Line.module.css";

const Line = ({ text, from }) => {
  return (
    <div className={styles.container}>
      {from === "right" && text !== "" && (
        <h1 className={styles.textLeft}>{text}</h1>
      )}
      {from === "right" && text === "" && <div className={styles.empty}></div>}
      <div className={from === "left" ? styles.left : styles.right} />
      {from === "left" && text !== "" && (
        <h1 className={styles.textRight}>{text}</h1>
      )}
      {from === "left" && text === "" && <div className={styles.empty}></div>}
    </div>
  );
};

export default Line;
