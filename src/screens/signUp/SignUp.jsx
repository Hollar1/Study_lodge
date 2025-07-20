import React, { useState } from "react";
import styles from "../signUp/signUp.module.scss";
import company_logo from "../../assets/images/company_logo_01.png";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Modal from "../../components/modal/Modal";
import Spinner from "../../components/spinner/Spinner";
import { baseUrl, endpoints } from "../../utils/api";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [signUpDetails, setSignUpDetails] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    try {
      const fd = new FormData();
      fd.append("first_name", signUpDetails.first_name);
      fd.append("last_name", signUpDetails.last_name);
      fd.append("gender", signUpDetails.gender);
      fd.append("email", signUpDetails.email);
      fd.append("phone_number", signUpDetails.phone_number);
      fd.append("password", signUpDetails.password);
      const response = await axios.post(`${baseUrl}${endpoints.signUp}`, fd);
      if (response) {
        setShowModal(true);
        console.log(response);
      }
    } catch (error) {
      if (error) {
        console.log(error);
      }
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <div>
      {showSpinner && <Spinner />}
      {showModal && <Modal />}
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <img src={company_logo} alt="" />
          <h3>Create Your New Account.</h3>
        </section>
        <form className={styles.signUp_form} onSubmit={handleSignUp}>
          <section className={styles.sec_02}>
            <Input
              label={"First Name"}
              value={signUpDetails.first_name}
              name={"first_name"}
              onChange={handleOnChange}
            />
            <Input
              label={"Last Name"}
              value={signUpDetails.last_name}
              name={"last_name"}
              onChange={handleOnChange}
            />
            <Input
              label={"Gender"}
              value={signUpDetails.gender}
              name={"gender"}
              onChange={handleOnChange}
            />
            <Input
              label={"Email"}
              value={signUpDetails.email}
              name={"email"}
              onChange={handleOnChange}
            />
            <Input
              label={"Phone"}
              value={signUpDetails.phone_number}
              name={"phone_number"}
              onChange={handleOnChange}
            />
            <Input
              label={"Password"}
              icon={faEyeSlash}
              value={signUpDetails.password}
              name={"password"}
              onChange={handleOnChange}
            />
          </section>
          <section className={styles.sec_03}>
            <Button type={"submit"} children={"Sign Up"} />
          </section>
        </form>

        <section className={styles.sec_04}>
          <p>Already have an account? </p>{" "}
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
