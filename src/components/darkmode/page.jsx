import React from "react";
import styles from "./page.module.css";

const DarkMode = () => {
    const mode = "light"
  return (
    <div class={styles.container}>
      <div className={styles.icon}>🌜</div>
      <div className={styles.icon}>☀</div>
      <div className={styles.ball} style={ mode === "light" ? {left:"2px"} : {right:"2px"}} />
    </div>
  );
};

export default DarkMode;
