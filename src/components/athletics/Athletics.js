import React from "react";
import styles from "./Athletics.module.css";
import { useState, useEffect } from "react";
import { fetchAthleticsVideo } from "../../projectInfo";
const Athletics = () => {
  const [athleticsVideo, setAthleticsVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const athleticsVideo = async () => {
      try {
        const video = await fetchAthleticsVideo();
        setAthleticsVideo(video);
        setLoading(false);
      } catch (error) {
        console.error("Error loading projects:", error.message);
      }
    };
    athleticsVideo();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          color: "#6e9ac2",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        Loading...
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.blue}>Vault</button>
        <button className={styles.green}>Floor</button>
        <button className={styles.orange}>Pommels</button>
        <button className={styles.red}>Rings</button>
      </div>
      <video className={styles.video} controls={true} autoPlay={true} loop>
        <source src={athleticsVideo} type="video/mp4" />
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
