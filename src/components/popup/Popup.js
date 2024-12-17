import React, { useState, useEffect, useRef } from "react";

import styles from "./Popup.module.css";
import Message from "../message/Message";
import PDF from "../../res/ZacharyMartin-Resume.pdf";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const navRef = useRef(null);

  const handleOpen = () => {
    setTransitioning(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    setTransitioning(false);
  };

  const handleNavOpen = () => {
    setNavIsOpen(true);
  };

  const handleClose = () => {
    setTransitioning(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
    setTransitioning(false);
  };

  const handleNavClose = () => {
    setNavIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        handleNavClose();
      }
    };

    if (navIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navIsOpen]);

  return (
    <div className={styles.component}>
      {!navIsOpen && <button onClick={handleNavOpen}></button>}
      {navIsOpen && (
        <div ref={navRef} className={styles.container}>
          <button onClick={handleOpen}>Message Me</button>
          <a href="mailto:zachsm@alumni.stanford.edu">
            <button>Email Me</button>
          </a>
          <a href={PDF} target="_blank" rel="noopener noreferrer">
            <button>Resume</button>
          </a>
          {isOpen && <Message onClose={handleClose} />}
        </div>
      )}
    </div>
  );
};

export default Popup;
