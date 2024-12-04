import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/portfolio"></a>Portfolio
        </li>
        <li>
          <a href="/athletics"></a>Athletics
        </li>
        <li>
          <a href="/resume"></a>Resume
        </li>
        <li>
          <a href="/contact"></a>Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
