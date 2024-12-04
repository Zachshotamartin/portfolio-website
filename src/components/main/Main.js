import React from "react";
import styles from "./Main.module.css";
import Headshot from "../headshot/Headshot";
const Main = () => {
  return (
    <div className={styles.container}>
      <Headshot className={styles.headshot} />
      <div>
        <h1 className={styles.text}>About Me</h1>
        <p className={styles.text}>
          About Me Hi, I'm Zach! I was born in Fremont, CA and grew up in
          Sacramento. I attended Stanford University for the past 4 years,
          fostering the discovery and love that I have for computer science that
          I wasn't afforded in high school. I studied as a software engineer
          with a focus in Computer Graphics. I love working with cool consumer
          apps and softwares that put people in awe. I am full of ideas and
          really love to see the transition from idea into final product. I have
          experience working with a variety of programming languages and
          frameworks. I have experience with full-stack mobile and web
          development. I have also worked with many graphics tools such as
          Blender and Houdini. Within those tools, I have also had the pleasure
          of creating custom effects like advanced Ray tracing. I have built a
          foundation on my Graphics and AI knowledge through linear algebra. I
          am always looking for new opportunities to learn and grow as a
          developer. I am proficient with and have experience with C++, C,
          Python, JavaScript, Typescript, React, React-Native, Node.js, SQL, and
          much more.
        </p>
      </div>
    </div>
  );
};

export default Main;
