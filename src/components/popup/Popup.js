import React, { useState, useEffect, useRef } from "react";

import styles from "./Popup.module.css";
import Message from "../message/Message";
import PDF from "../../res/ZacharyMartin-Resume.pdf";
import arrow from "../../res/images/arrow.png";

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        handleNavClose();
        handleClose();
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
      {
        /*************  ✨ Codeium Command 🌟  *************/
        <button
          className={styles.componentbutton}
          style={{
            backgroundImage: `url(${arrow})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          onClick={!navIsOpen ? handleNavOpen : handleNavClose}
        ></button>
        /******  b5f45d96-fcae-4012-98b0-c878b0fe9360  *******/
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
