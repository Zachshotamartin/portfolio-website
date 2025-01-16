import React from "react";
import styles from "./Portfolio.module.css";
import Project from "./project/Project";

import { useSelector, useDispatch } from "react-redux";
const Portfolio = () => {
  const projects = useSelector((state) => state.projects.projects);
  return (
    <>
      {projects && (
        <div className={styles.container}>
          <div className={styles.projectsRow}>
            <Project
              imageUrls={projects.project4.imageUrls[0]}
              title={projects.project4.title}
              description={projects.project4.description}
              borderColor="#6e9ac2"
            />
            <Project
              imageUrls={projects.project2.imageUrls[0]}
              title={projects.project2.title}
              description={projects.project2.description}
              borderColor="#e47366"
            />
          </div>
          <div className={styles.projectsRow}>
            <Project
              imageUrls={projects.project3.imageUrls[0]}
              title={projects.project3.title}
              description={projects.project3.description}
              borderColor="#e8b056"
            />
            <Project
              imageUrls={projects.project1.imageUrls[0]}
              title={projects.project1.title}
              description={projects.project1.description}
              borderColor="#8fa589"
            />
          </div>
          {/* <div className={styles.projectsRow}>
        <Project
          imageUrls={projects.project5.imageUrls[0]}
          title={projects.project1.title}
          description={projects.project1.description}
          borderColor="#6e9ac2"
        />
        <Project
          imageUrls={projects.project5.imageUrls[0]}
          title={projects.project1.title}
          description={projects.project1.description}
          borderColor="#e47366"
        />
      </div> */}
        </div>
      )}
      ;
    </>
  );
};

export default Portfolio;
