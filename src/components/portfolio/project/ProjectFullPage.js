import styles from "./ProjectFullPage.module.css";
import arrowLeft from "../../../res/images/arrow.png";
import arrowRight from "../../../res/images/arrowRight.png";
const ProjectFullPage = ({ projectInfo }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{projectInfo?.title}</h1>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageArrow}
          src={arrowLeft}
          alt="arrow left"
          onClick={() => {
            console.log("left");
          }}
        />
        <img
          className={styles.image}
          src={projectInfo?.imageUrl}
          alt={projectInfo.title}
        />
        <img
          className={styles.imageArrow}
          src={arrowRight}
          alt="arrow right"
          onClick={() => {
            console.log("right");
          }}
        />
      </div>
      <p className={styles.description}>{projectInfo?.description}</p>
    </div>
  );
};

export default ProjectFullPage;
