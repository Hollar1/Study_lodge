import React from "react";
import styles from "../input/input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({
  label,
  value,
  name,
  type,
  onChange,
  placeholder,
  inputMode,
  icon,
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="">{label}</label>
      <div>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          inputMode={inputMode}
          name={name}
          onChange={onChange}
        />
        <span>{icon ? <FontAwesomeIcon icon={icon} /> : null}</span>
      </div>
    </div>
  );
}

export default Input;
