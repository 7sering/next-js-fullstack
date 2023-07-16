"use client"
import React, { useContext } from "react";
import styles from "./page.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkMode = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div class={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌜</div>
      <div className={styles.icon}>☀</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMode;