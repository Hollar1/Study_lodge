import React from "react";
import styles from "../profile/profile.module.scss";
import female_icon from "../../assets/images/female_icon.webp";
import male_icon from "../../assets/images/male_icon.webp";
import Button from "../../components/button/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <header>Profile</header>
        </section>

        <section className={styles.sec_02}>
          {/* <aside>
            <img src={female_icon} alt="" />
          </aside> */}

          <div>
            <h3>Umar Kareem </h3>
            <p>olaumare1@gmail.com</p>
            <p>09087678976</p>
            <div>
              {" "}
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
                <td>$700.00</td>
                <td>Paid</td>
              </tr>

              <tr className={styles.commissionFee_sec}>
                <td>Caution Fee</td>
                <td>$300.00</td>
                <td>Paid</td>
              </tr>

              <tr className={styles.cautionFee_sec}>
                <td>Rent Fee</td>
                <td>$1,700.00</td>
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
                <td>Scholar's Hostel</td>
              </tr>
              <tr>
                <td>Unit</td>
                <td>Scholar's Hostel</td>
              </tr>
              <tr>
                <td>Apartment</td>
                <td>Scholar's Hostel</td>
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
      </div>
    </div>
  );
}

export default Profile;
