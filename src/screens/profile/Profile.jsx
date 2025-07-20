import React, { useEffect, useState } from "react";
import styles from "../profile/profile.module.scss";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";

function Profile() {
  const navigate = useNavigate();
  const [user_id, setUserId] = useState(null);

  const [data, setData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, []);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `${endpoints.get_A_UserProfile}${user_id}`
        );
        if (response) {
          setData(response.data);
        }
      } catch (error) {}
    };
    fetchProfileDetails();
  }, [user_id]);

  return (
    <div>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <header>Profile</header>
        </section>

        <section className={styles.sec_02}>
          <div>
            <aside>
              <h3>Full Name:</h3>
              <p>
                {" "}
                {data?.first_name} {data?.last_name}
              </p>
            </aside>
            <aside>
              <h3>Email:</h3>
              <p>
                {" "}
                <p style={{ textTransform: "lowercase" }}>{data?.email}</p>
              </p>
            </aside>
            <aside>
              <h3>Contact:</h3>
              <p>{data?.phone_number}</p>
            </aside>

            <div>
              <button className={styles.edit_btn}>Edit Profile</button>{" "}
              <button className={styles.logout_btn} onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </section>

        <section className={styles.sec_03}>
          <table>
            <thead>
              <tr>
                <th colSpan={3}>Payment Details</th>
              </tr>
            </thead>

            <tbody>
              <tr className={styles.agentFee_sec}>
                <td>Agent Fee</td>
                <td>
                  {data?.agentFeePayment?.amount.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </td>
                <td>Paid</td>
              </tr>

              <tr className={styles.commissionFee_sec}>
                <td>Caution Fee</td>
                <td>
                  {" "}
                  {data?.agentFeePayment?.room?.caution_fee.toLocaleString(
                    "en-NG",
                    {
                      style: "currency",
                      currency: "NGN",
                    }
                  )}
                </td>
                <td>Paid</td>
              </tr>

              <tr className={styles.cautionFee_sec}>
                <td>Rent Fee</td>
                <td>
                  {" "}
                  {data?.agentFeePayment?.room?.price.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </td>
                <td>Waiting...</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.sec_04}>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Rent Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Hostel's Name</td>
                <td>{data?.agentFeePayment?.hostel?.hostel_name}</td>
              </tr>
              <tr>
                <td>Unit</td>
                <td>{data?.agentFeePayment?.room?.unit}</td>
              </tr>
              <tr>
                <td>Apartment</td>
                <td>{data?.agentFeePayment?.room?.room_number}</td>
              </tr>
              <tr>
                <td>Rent Length</td>
                <td>Scholar's Hostel</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>Scholar's Hostel</td>
              </tr>
              <tr>
                <td>Due Date</td>
                <td>Scholar's Hostel</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.sec_05}>
          <Button type={"submit"} children={"Renew Rent"} />
        </section>

        <section className={styles.sec_06}>
          <header>Emergency Contact Person</header>
          <aside>
            <div>
              <p>Full Name:-</p>
              <span>Kareem Suliyat</span>
            </div>
            <div>
              <p>Relationship:-</p>
              <span>Kareem Suliyat</span>
            </div>

            <div>
              <p>Phone Num:-</p>
              <span>Kareem Suliyat</span>
            </div>
          </aside>

          <div className={styles.address_div}>
            <p>Address:</p>
            <address>F/ab55, iku , ikare akoko, Ondo state, Nigeria.</address>
          </div>
        </section>
        <button
          onClick={() => {
            navigate("/receipt-page");
          }}
        >
          RECEIPT PAGE
        </button>
      </div>
    </div>
  );
}

export default Profile;
