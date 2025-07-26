import React, { useState } from "react";
import styles from "../login/login.module.scss";
import company_logo from "../../assets/images/company_logo_01.png";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import NavBar from "../../components/navBar/NavBar";
import Modal from "../../components/modal/Modal";
import Spinner from "../../components/spinner/Spinner";
import { baseUrl, endpoints } from "../../utils/api";
import axios from "axios";
import FailedModal from "../../components/failedModal/FailedModal";
function Login() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const sliceError = showFailedModal?.slice(12, showFailedModal.length - 41);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    try {
      const payload = {
        email: loginDetails.email.toLowerCase(),
        password: loginDetails.password,
      };

      const response = await axios.post(
        `${baseUrl}${endpoints.login}`,
        payload
      );

      if (response) {
        const userToken = response.data.token;
        localStorage.setItem("userToken", userToken);
        const userId = response.data.user._id;
        localStorage.setItem("userId", userId);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate(
            response.data.user.role === "admin" ? "/admin-dashboard" : "/"
          );
        }, 4000);
      }
    } catch (error) {
      if (error) {
        console.log(error);
        setShowFailedModal(error?.response?.data?.message);
        setTimeout(() => {
          setShowFailedModal(null);
        }, 4000);
      }
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <div>
      {showSpinner && <Spinner />}
      {showModal && (
        <Modal
          header={`Welcome ${loginDetails.email}.`}
          body={`You have successfully logged in, explore available rooms and manage
            your bookings with ease.`}
        />
      )}
      {showFailedModal && <FailedModal body={sliceError} />}
      {/* <NavBar/> */}
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <img src={company_logo} alt="" />
          <h3>Create Your New Account.</h3>
        </section>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <section className={styles.sec_02}>
            <Input
              label={"Email"}
              value={loginDetails.email}
              name={"email"}
              onChange={handleOnChange}
            />
            <Input
              label={"Password"}
              icon={faEyeSlash}
              value={loginDetails.password}
              name={"password"}
              onChange={handleOnChange}
            />
          </section>
          <section className={styles.sec_03}>
            <button>Forgot Password?</button>
          </section>
          <section className={styles.sec_04}>
            <Button type={"submit"} children={"Login"} />
          </section>
        </form>
        <section className={styles.sec_05}>
          <p>Don't have an account? </p>{" "}
          <button
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Create
          </button>
        </section>
      </div>
    </div>
  );
}

export default Login;
