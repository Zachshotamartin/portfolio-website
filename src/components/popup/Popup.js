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
    setIsOpen(true);
  };

  const handleNavOpen = () => {
    console.log("handlenav called");
    console.log(navIsOpen);
    setNavIsOpen(true);
    console.log(navIsOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavClose = () => {
    setTransitioning(true);
    setTimeout(() => {
      setNavIsOpen(false);
      setTransitioning(false);
    }, 500);
  };

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (navRef.current && !navRef.current.contains(event.target)) {
  //         handleNavClose();
  //       }
  //     };

  //     if (navIsOpen) {
  //       document.addEventListener("click", handleClickOutside);
  //     }

  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, [navIsOpen]);

  return (
    <div className={styles.component}>
      {
        <button
          className={styles.componentbutton}
          onClick={!navIsOpen ? handleNavOpen : handleNavClose}
        ></button>
      }
      {navIsOpen && (
        <div ref={navRef} className={styles.container}>
          <div className={styles.torotate}>
            <button
              className={
                !transitioning
                  ? styles.containerbutton
                  : styles.containerbuttontransitioning
              }
              onClick={handleOpen}
            >
              Message Me
            </button>
          </div>
          <div className={styles.torotate}>
            <a href="mailto:zachsm@alumni.stanford.edu">
              <button
                className={
                  !transitioning
                    ? styles.containerbutton
                    : styles.containerbuttontransitioning
                }
              >
                Email Me
              </button>
            </a>
          </div>
          <div className={styles.torotate}>
            <a href={PDF} target="_blank" rel="noopener noreferrer">
              <button
                className={
                  !transitioning
                    ? styles.containerbutton
                    : styles.containerbuttontransitioning
                }
              >
                Resume
              </button>
            </a>
          </div>
          {isOpen && <Message onClose={handleClose} />}
        </div>
      )}
    </div>
  );
};

export default Popup;
