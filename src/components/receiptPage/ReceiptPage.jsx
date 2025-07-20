import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styles from "../receiptPage/receiptPage.module.scss";

function receiptPage() {
  const userId = localStorage.getItem("userId");
  const [agentFeePayment, setAgentFeePayment] = useState(true);
  const [roomFeePayment, setRoomFeePayment] = useState(false);

  const date_time_replace =
    agentFeePayment?.booking?.inspection_date_time.replace("_", "  / Time: ");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await axiosInstance.get(
        `${endpoints.get_A_UserProfile}${userId}`
      );
      if (response) {
        setAgentFeePayment(response.data?.agentFeePayment);
        // setRoomFeePayment(response.data?.hostel);
      }
    };
    fetchUserDetails();
  }, [userId]);
  return (
    <div>
      {agentFeePayment && roomFeePayment ? (
        <div>Room Paid</div>
      ) : agentFeePayment ? (
        <div className={styles.agentFee_wrapper}>
          <section className={styles.sec_01}>
            <header>
              <IoMdCheckmarkCircleOutline size={40} color="rgb(72,209,204)" />
              <h3>Thanks you for your payment!</h3>
              <p>
                Your room inspection booking has been successfully completed.
              </p>
            </header>
          </section>

          <section className={styles.sec_02}>
            <header>
              <h3>Payment Summary</h3>
            </header>

            <article className={styles.article_01}>
              <div>
                <p>Payment Status:</p>
                <span className={styles.paymentStatus}>
                  {agentFeePayment?.status}
                </span>
              </div>

              <div>
                <p>Payment For:</p>
                <span className={styles.payment_purpose}>
                  {agentFeePayment?.payment_type}
                </span>
              </div>

              <div>
                <p>Amount:</p>
                <span className={styles.agentFee_amount}>
                  {agentFeePayment?.amount?.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </span>
              </div>
            </article>
          </section>

          <section className={styles.sec_03}>
            <header>
              <h3>Bookin Information</h3>
            </header>

            <article className={styles.article_02}>
              <div>
                <p>Payment Status:</p>
                <span>{agentFeePayment?.status}</span>
              </div>

              <div>
                <p>Payment For:</p>
                <span>{agentFeePayment?.payment_type}</span>
              </div>

              <div>
                <p>Amount:</p>
                <span>
                  {agentFeePayment?.amount?.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </span>
              </div>

              <hr />

              <aside className={styles.article_03}>
                <header>Inspection Date & TIme</header>
                <div>Date: {date_time_replace}</div>
              </aside>
              <hr />

              <aside className={styles.article_04}>
                <header>Address:</header>
                <div>{agentFeePayment?.hostel?.address}</div>
              </aside>
            </article>
          </section>

          <section className={styles.sec_04}>
            <p>
              Please ensure to arrive on time for your inspection. If you have
              any questions or need to make changes, feel free to contact our
              support team.
            </p>
            <i>We appreciate your trust in our service!</i>
          </section>
        </div>
      ) : (
        <div>Payment Unsuccessful</div>
      )}
    </div>
  );
}

export default receiptPage;
