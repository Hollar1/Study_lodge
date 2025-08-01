import React, { useEffect, useState } from "react";
import styles from "../moreDetails/moreDetails.module.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";
import FailedModal from "../../components/failedModal/FailedModal";
import Modal from "../../components/modal/Modal";

function MoreDetails() {
  const [showModal, setShowModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [data, setData] = useState(null);
  console.log(data);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `${endpoints.get_A_UserProfile}${userId}`
        );
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        if (error) {
          console.log(error.response?.data);
        }
      }
    };
    fetchProfileDetails();
  }, [userId]);

  const handlePayRent = async () => {
    try {
      const { origin } = window.location;
      const payload = {
        amount: data?.agentFeePayment?.room?.price,
        room_id: data?.agentFeePayment?.room?._id,
        hostel_id: data?.agentFeePayment?.hostel?._id,
        booking_id: data?.agentFeePayment?.booking?._id,
        callback_url: `${origin}/rent-receipt`,
      };
      const response = await axiosInstance.post(
        `${endpoints.roomFeePayment}`,
        payload
      );

      if (response) {
        const checkoutLink = response?.data?.checkoutLink;
        window.location.href = checkoutLink;
      }
    } catch (error) {
      if (error) {
        console.log(error?.response?.data);
      }
    }
  };

  return (
    <div>
      {showSpinner && <Spinner />}
      {showModal && (
        <Modal
          body={`You have successfully logged in, explore available rooms and manage
            your bookings with ease.`}
        />
      )}
      {showFailedModal && <FailedModal body={sliceError} />}
      <div className={styles.wrapper}>
        <h3>Please Complete Your Profile Details To Enable Payment</h3>
        <section className={styles.sec_01}>
          <header>
            <FaUser size={22} />Your Personal Information
          </header>
          <section className={styles.sec_02}>
            <Input label={"House Address"} />
            <Input label={"Street"} />
            <Input label={"Town/Village"} />
            <Input label={"State"} />
            <Input label={"Country"} />

            <label className={styles.label}>
             Upload government issued i'd as proof of identity.
              <input type="file" />
            </label>
            <label className={styles.label}>
              Our accommodations are strictly for students only: Please upload
              document to proof that you are a student, i.e school i'd, school
              fee payment receipt or acceptance letter.
              <input type="file" />
            </label>
          </section>
        </section>

        <section className={styles.sec_03}>
          <header>
            <FaHeart size={22} /> Emergency Contact Details
          </header>
          <section className={styles.sec_02}>
            <Input label={"Full Name"} />
            <Input label={"Relationship"} />
            <Input label={"Phone Number"} />
            <Input label={"Full Address"} />
          </section>
        </section>

        <div>
          <Button onClick={handlePayRent} children={"Submit Details"} />
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
