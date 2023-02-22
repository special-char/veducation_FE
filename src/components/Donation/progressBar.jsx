import React from "react";
import styles from "./progressBar.module.css";

const Progress_bar = ({ progress }) => {
  const Childdiv = {
    width: `${progress}%`,
  };

  return (
    <div className={styles.parentdiv}>
      <div style={Childdiv} className={styles.parentdiv__childdiv}></div>
    </div>
  );
};

export default Progress_bar;
