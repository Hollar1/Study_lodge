import React, { useState } from "react";
import styles from "../modal/modal.module.scss";

function Modal({ header, body }) {
  return (
    <div className={`${styles.parent_wrapper}`}>
      <div className={`${styles.wrapper}`}>
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Modal;
