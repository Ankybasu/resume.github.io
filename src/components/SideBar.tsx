import React from "react";
import styles from "../customstyle.module.css";
import Image from "../images/dp.png";
const SideBar = () => {
  return (
    <div>
      <div className={styles.sidebar}>
        <div className={styles.common}>
          <div className={styles.head1}>Ankita Basu</div>
          <img src={Image} className={styles.imgstyle}></img>
          <div style={{ fontSize: "smaller" }}>
            Hi, I am Ankita Basu and I'm a senior software engineer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
