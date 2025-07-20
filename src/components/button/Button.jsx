import React from "react";
import styles from "../button/button.module.scss";

function Button({ children ,type,disabled}) {
  return (
    <div className={styles.wrapper}>
      <button disabled={disabled} type={type}>{children}</button>
    </div>
  );
}
export default Button;
