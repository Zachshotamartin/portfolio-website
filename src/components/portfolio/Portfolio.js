import React from "react";
import styles from "./Portfolio.module.css";
import Project from "./project/Project";
import { projects } from "../projectInfo";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectsRow}>
        <Project
          imageUrl={projects.project4.imageUrl}
          title={projects.project4.title}
          description={projects.project4.description}
          borderColor="#6e9ac2"
        />
        <Project
          imageUrl={projects.project2.imageUrl}
          title={projects.project2.title}
          description={projects.project2.description}
          borderColor="#e47366"
        />
      </div>
      <div className={styles.projectsRow}>
        <Project
          imageUrl={projects.project3.imageUrl}
          title={projects.project3.title}
          description={projects.project3.description}
          borderColor="#e8b056"
        />
        <Project
          imageUrl={projects.project1.imageUrl}
          title={projects.project1.title}
          description={projects.project1.description}
          borderColor="#8fa589"
        />
      </div>
      <div className={styles.projectsRow}>
        <Project
          imageUrl={projects.project5.imageUrl}
          title={projects.project1.title}
          description={projects.project1.description}
          borderColor="#6e9ac2"
        />
        <Project
          imageUrl={projects.project5.imageUrl}
          title={projects.project1.title}
          description={projects.project1.description}
          borderColor="#e47366"
        />
      </div>
    </div>
  );
};

export default Portfolio;
