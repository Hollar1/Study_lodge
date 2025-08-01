import React from "react";
import styles from "../forgotPassEmail/forgotPassEmail.module.scss";
import forgotPassIcon from "../../assets/images/forgotPass_icon.png";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function ForgotPass_otp() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <img src={forgotPassIcon} alt="" />
          <h3>Reset Your Password</h3>
          <p>
            {" "}
            Enter the four(4) digit code sent to your registered email address
          </p>
        </section>
        <form className={styles.otpForm}>
          <section className={styles.sec_02}>
            <Input label={"Enter Email"} />
          </section>
          <section className={styles.sec_03}>
            <Button children={"Request OTP"} />
          </section>
        </form>
      </div>
    </div>
  );
}

export default ForgotPass_otp;
