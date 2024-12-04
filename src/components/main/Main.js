import React from "react";
import styles from "./Main.module.css";
import Headshot from "../headshot/Headshot";
const Main = () => {
  return (
    <div className={styles.container}>
      <Headshot className={styles.headshot} />
      <div>
        <h1 className={styles.text}>
          Hey! I'm Zach Martin and I'm a visual computing software engineer.
        </h1>
        <p className={styles.text}>
          I'm currently a student at the University of Washington, majoring in
          Computer Science and Engineering. I'm also a member of the Washington
          State University ACM chapter.
        </p>
      </div>
    </div>
  );
};

export default Main;
