import React from "react";
import styles from "./AthleticTakeAways.module.css";
import { useState } from "react";
import arrowDown from "../../res/images/arrowDown.png";

const AthleticTakeAways = () => {
  const [habitOpen, setHabitOpen] = useState(false);
  const [leadershipOpen, setLeadershipOpen] = useState(false);
  const [pressureOpen, setPressureOpen] = useState(false);
  const [sharedVisionOpen, setSharedVisionOpen] = useState(false);
  const [communicationOpen, setCommunicationOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Applicable Skills</h2>
      <div className={styles.blackbar}></div>
      <div className={styles.entry}>
        <div className={styles.row} onClick={() => setHabitOpen(!habitOpen)}>
          <p className={styles.subtitle}>Time Management</p>
          <img
            className={habitOpen ? styles.arrowClicked : styles.arrow}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
        {habitOpen && (
          <p className={styles.paragraph}>
            Life was fast-paced as a student-athlete. Balancing practices,
            classes, and competitions taught me the value of discipline and time
            management. I made it a habit to plan my day the night before,
            prioritizing tasks and ensuring I had enough time for both training
            and academics. Staying organized with calendars and to-do lists
            helped me avoid falling behind, while sticking to a consistent sleep
            schedule kept me energized for early workouts and late study
            sessions. These habits not only kept me on track during busy days
            but also shaped how I approach challenges in life and work.
          </p>
        )}
      </div>
      <div className={styles.blackbar}></div>
      <div className={styles.entry}>
        <div
          className={styles.row}
          onClick={() => setLeadershipOpen(!leadershipOpen)}
        >
          <p className={styles.subtitle}>Leadership</p>
          <img
            className={leadershipOpen ? styles.arrowClicked : styles.arrow}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
        {leadershipOpen && (
          <p className={styles.paragraph}>
            I’ve learned a lot about leadership since my first day on the team.
            I worked my way up to become the team vault leader, responsible for
            the success of the vaulting team. One of the most important lessons
            I’ve learned is that my own motivation directly influences the
            team’s success. Leadership isn’t about just telling people what to
            do—it’s about showing them what’s possible through your own actions
            and commitment.
          </p>
        )}
      </div>
      <div className={styles.blackbar}></div>
      <div className={styles.entry}>
        <div
          className={styles.row}
          onClick={() => setPressureOpen(!pressureOpen)}
        >
          <p className={styles.subtitle}>Pressure</p>
          <img
            className={pressureOpen ? styles.arrowClicked : styles.arrow}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
        {pressureOpen && (
          <p className={styles.paragraph}>
            The feeling I get from staring down the vault runway, knowing I only
            have one chance, is unlike any other. It’s a mix of excitement and
            pressure, but over time I’ve learned to handle it. Instead of
            getting overwhelmed, I’ve realized that pressure can help me focus
            and stay sharp. I’ve learned that it’s normal to feel the weight of
            the moment, and it doesn’t mean something is wrong. In fact, it’s
            often a sign that I care about what I’m doing. I trust my training
            and preparation, and that confidence helps me perform even when
            there’s pressure to succeed. Over the years, I’ve become more
            comfortable with these situations, knowing that pressure is just
            part of the challenge.
          </p>
        )}
      </div>
      <div className={styles.blackbar}></div>
      <div className={styles.entry}>
        <div
          className={styles.row}
          onClick={() => setSharedVisionOpen(!sharedVisionOpen)}
        >
          <p className={styles.subtitle}>Shared Vision</p>
          <img
            className={sharedVisionOpen ? styles.arrowClicked : styles.arrow}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
        {sharedVisionOpen && (
          <p className={styles.paragraph}>
            I’ve learned that success isn’t just about individual performance —
            it’s about working together toward a common goal. A shared vision
            within a team can create an environment where everyone is motivated
            and focused on the same outcome. I’ve seen how important it is for
            the entire team to align with the same vision. Whether it’s pushing
            each other to reach personal bests or coming together to improve as
            a group, when we share the same goal, we make progress faster and
            more effectively, often with less resistence.
          </p>
        )}
      </div>
      <div className={styles.blackbar}></div>
      <div className={styles.entry}>
        <div
          className={styles.row}
          onClick={() => setCommunicationOpen(!communicationOpen)}
        >
          <p className={styles.subtitle}>Communication</p>
          <img
            className={communicationOpen ? styles.arrowClicked : styles.arrow}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
        {communicationOpen && (
          <p className={styles.paragraph}>
            Effective communication has been a cornerstone of my experience as a
            student-athlete. I’ve learned that It’s not just about speaking up;
            it’s about making sure everyone feels heard and understood. Good
            communication helps avoid misunderstandings and ensures that
            everyone is on the same page when it comes to goals and
            expectations. I’ve found that open lines of communication can also
            build trust among teammates. When we communicate openly, it
            encourages collaboration and allows us to address issues before they
            become problems. Whether it’s a quick pep talk or a detailed
            discussion about technique, fostering an environment where everyone
            feels comfortable sharing their thoughts has been key to keeping the
            team cohesive and motivated.
          </p>
        )}
      </div>
      <div className={styles.blackbar}></div>
    </div>
  );
};

export default AthleticTakeAways;
