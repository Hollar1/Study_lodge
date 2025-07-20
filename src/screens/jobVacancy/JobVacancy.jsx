import React from "react";
import Styles from "../jobVacancy/jobVacancy.module.scss";

function JobVacancy() {
  return (
    <div className={Styles.parent_wrapper}>
      <div>
        <section className={Styles.sec_01}>
          <h3>No Open Positions at the Moment!</h3>
        </section>
        <section className={Styles.sec_02}>
          Thank you for your interest in joining our team. At this time, we do
          not have any available positions for roles such as site supervisor,
          Agent or showcase person. We appreciate your enthusiasm and encourage
          you to check back in the future as opportunities arise.
        </section>
        <section className={Styles.sec_03}>
          <p>Best regards,</p>
          <p>Study Lodge Limited.</p>
        </section>
      </div>
    </div>
  );
}

export default JobVacancy;
