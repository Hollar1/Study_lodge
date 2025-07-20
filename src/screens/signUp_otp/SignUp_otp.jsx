import React from "react";
import styles from "../signUp_otp/signUp_otp.module.scss";
import company_logo from "../../assets/images/company_logo_01.png";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function SignUp_otp() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <img src={company_logo} alt="" />
          <h3>Enter OPT Code</h3>
          <p> Enter four digit pin code sent to your email address</p>
        </section>
        <form className={styles.otpForm}>
          <section className={styles.sec_02}>
            <Input label={"Enter OTP"} inputMode={"number"} />
          </section>
          <section className={styles.sec_03}>
            <Button children={"Verify"} />
          </section>
        </form>
      </div>
    </div>
  );
}

export default SignUp_otp;
