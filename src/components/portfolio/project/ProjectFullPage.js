import styles from "./ProjectFullPage.module.css";
import blank from "../../../res/images/blank.png";
const ProjectFullPage = ({ projectInfo }) => {
  const imagesLength = projectInfo.imageUrls.length;
  const assets = [...projectInfo.imageUrls, ...projectInfo.videoUrls];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{projectInfo?.title}</h1>
      <div className={styles.descriptionContainer}>
        {projectInfo?.link && (
          <a
            style={{ textDecoration: "none" }}
            href={projectInfo.link}
            target="_blank"
            rel="noreferrer"
          >
            <h3 className={styles.link}>visit</h3>
          </a>
        )}
        {projectInfo?.github && (
          <a
            style={{ textDecoration: "none" }}
            href={projectInfo.github}
            target="_blank"
            rel="noreferrer"
          >
            <h3 className={styles.link}>github</h3>
          </a>
        )}
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageBlank}
          src={blank}
          alt={projectInfo.title}
        />
        {assets.map((asset, index) => {
          if (index < imagesLength) {
            return (
              <img
                className={styles.image}
                src={asset}
                alt={projectInfo.title}
              />
            );
          } else {
            return (
              <video
                className={styles.video}
                src={asset}
                alt={projectInfo.title}
                controls={true}
                autoPlay={true}
                loop
              />
            );
          }
        })}
        <img
          className={styles.imageBlank}
          src={blank}
          alt={projectInfo.title}
        />
      </div>

      <p className={styles.description}>{projectInfo?.description}</p>
      <div className={styles.technologies}>
        {projectInfo?.builtUsing.map((builtUsing, index) => {
          return <p className={styles.builtUsing}>{builtUsing}</p>;
        })}
      </div>
    </div>
  );
};

export default ProjectFullPage;
