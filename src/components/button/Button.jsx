import React from "react";
import styles from "../button/button.module.scss";

function Button({ children, type, disabled, onClick }) {
  return (
    <div className={`${styles.wrapper}`}>
      <button onClick={onClick} disabled={disabled} type={type}>
        {children}
      </button>
    </div>
  );
}
export default Button;

export const Button_B = ({ children, type, disabled, onClick }) => {
  return (
    <div className={`${styles.wrapper_B}`}>
      <button onClick={onClick} disabled={disabled} type={type}>
        {children}
      </button>
    </div>
  );
};
