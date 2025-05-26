import React from "react";

import styles from "./AppBody.module.scss";
import HomePage from "../homePage";

const AppBody = () => {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
};

export default AppBody;
