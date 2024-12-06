/*************  ✨ Codeium Command 🌟  *************/
import RandomColor from "./RandomColor";
import styles from "./ColorDiv.module.css";
import React, { useCallback, useEffect, useState } from "react";

const colors = {
  0: "#6e9ac2",
  1: "#8fa589",
  2: "#f3b76f",
  3: "#f77f6b",
};
function ColorDiv({ rows, columns }) {
  const randomColor = "#" + RandomColor();
  const [keys, setKeys] = useState([]);

  // const handleMouseOver = useCallback(
  //   (i) => {
  //     setKeys((prevKeys) => [...prevKeys, i]);
  //   },
  //   [setKeys]
  // );
  // const handleMouseOut = useCallback(
  //   (i) => {
  //     setKeys((prevKeys) => prevKeys.filter((key) => key !== i));
  //   },
  //   [setKeys]
  // );
  useEffect(() => {
    let counter = 0;

    const intervalId = setInterval(() => {
      const randomKey = Math.floor(Math.random() * (rows * columns));
      const randomColor = colors[Math.floor(Math.random() * 4)];
      setKeys((prevKeys) => {
        if (counter >= 100 && prevKeys.length > 0) {
          const indexToRemove = Math.floor(Math.random() * prevKeys.length);
          return [
            ...prevKeys.slice(0, indexToRemove),
            ...prevKeys.slice(indexToRemove + 1),
            { key: randomKey, color: randomColor },
          ];
        } else {
          counter++;
          return [...prevKeys, { key: randomKey, color: randomColor }];
        }
      });
    }, 1); // adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, [rows, columns, setKeys]);

  const gridItems = [];

  for (let i = 0; i < rows * columns; i++) {
    const keyObj = keys.find((obj) => obj.key === i);
    gridItems.push(
      <div
        key={i}
        style={
          keyObj
            ? {
                backgroundColor: keyObj.color,
                height: "100%",
                width: "100%",
                transition: "ease-in-out 0.2s",
              }
            : {}
        }
        className={styles.gridItem}
      ></div>
    );
  }

  const gridStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="grid-container" style={gridStyle}>
      {gridItems}
    </div>
  );
}
export default ColorDiv;
