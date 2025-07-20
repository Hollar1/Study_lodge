import React, { useEffect, useState } from "react";
import styles from "../footer/footer.module.scss";
import mail_logo from "../../assets/images/mail_logo.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Footer() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("userToken");
    setUserToken(userToken);
    setUserId(userId);
  }, [userId]);
  console.log(userId);

  return (
    <div>
      <footer className={styles.footer}>
        <section className={styles.sec_A}>
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            onClick={() => {
              navigate(userToken ? `/profile/${userId}` : "/login");
            }}
          >
            Profile
          </div>
          <div
            onClick={() => {
              navigate("/job-vacancy");
            }}
          >
            Vacancy
          </div>
        </section>

        <section className={styles.sec_B}>
          <div
            onClick={() => {
              navigate("/terms-conditions");
            }}
          >
            Terms & Conditions
          </div>
          <div
            onClick={() => {
              navigate("/privacy-policy");
            }}
          >
            Policy & Privacy
          </div>
          <div
            onClick={() => {
              navigate("/help-support");
            }}
          >
            Help & Support
          </div>
          <div>Contact Us</div>
        </section>

        <section className={styles.sec_C}>
          <img src={mail_logo} alt="" />
          <img src={mail_logo} alt="" />
          <img src={mail_logo} alt="" />
        </section>

        <section className={styles.sec_D}>
          <address>F / ab55, lku, lkare Akoko Ondo, State, Nigeria</address>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
