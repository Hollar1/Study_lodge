import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import styles from "../spinner/spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.wrapper}>
      <div>
        <FadeLoader height={30} width={5} margin={10} color="#191970" />
      </div>
    </div>
  );
}

export default Spinner;
