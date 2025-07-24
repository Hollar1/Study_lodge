import React from "react";
import styles from "../review/review.module.scss";
import Button from "../../components/button/Button";

function Review() {
  return (
    <div className={styles.wrapper}>
      <div>
        <section className={styles.sec_01}>
          <header>Leave a Comment and Rating</header>
        </section>
       <form action="">
         <section className={styles.sec_02}>
          <fieldset>
            <legend>Full Name</legend>
            <input type="text" />
          </fieldset>
          <fieldset>
            <legend>Your Feedback</legend>
            <textarea type="text" />
          </fieldset>
        </section>
        <section className={styles.sec_03}>
          <Button children={"Submit Review"} />
        </section>
       </form>
      </div>
    </div>
  );
}

export default Review;
