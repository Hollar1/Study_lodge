import React from "react";
import styles from "../failedModal/failedModal.module.scss";

function FailedModal({ header, body }) {
  return (
    <div className={`${styles.parent_wrapper}`}>
      <div className={`${styles.wrapper}`}>
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default FailedModal;
