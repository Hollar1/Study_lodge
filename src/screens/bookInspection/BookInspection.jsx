import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import styles from "../bookInspection/bookInspection.module.scss";
import { endpoints } from "../../utils/api";
import { IoCalendarNumberOutline } from "react-icons/io5";
import Button from "../../components/button/Button";
import { IoTimeOutline } from "react-icons/io5";
import Spinner from "../../components/spinner/Spinner";

function BookInspection() {
  const [showSpinner, setShowSpinner] = useState(false);

  const navigate = useNavigate();

  const { room_id } = useParams();

  const { origin } = window.location;
  const [roomDetails, setRoomDetails] = useState({});

  const [inspection_date, setInspection_date] = useState("");
  const [inspection_time, setInspection_time] = useState("");

  const [showSelectTime, setShowSelectTime] = useState("");

  const [hostelDetails, setHostelDetails] = useState({});

  useEffect(() => {
    if (inspection_time) {
      setShowSelectTime(false);
    }
  }, [inspection_time]);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `${endpoints.get_A_room}${room_id}`
        );
        const hostel_id = response.data.hostel;

        fetchHostelDetails(hostel_id);

        setRoomDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoomDetails();
  }, []);

  const fetchHostelDetails = async (hostel_id) => {
    try {
      const response = await axiosInstance.get(
        `${endpoints.singleHostelDetails}${hostel_id}`
      );
      setHostelDetails(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handlePayAgentFee = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    try {
      const payload = {
        hostel_id: roomDetails.hostel,
        room_id: roomDetails._id,
        inspection_date_time: `${inspection_date}_${inspection_time}`,
      };

      const response = await axiosInstance.post(
        `${endpoints.createBooking}`,
        payload
      );

      if (response) {
        const booking_id = response.data._id;
        agentFeePayment(booking_id);

        setTimeout(() => {
          setShowSpinner(false);
        }, 4500);
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
      setTimeout(() => {
        setShowSpinner(false);
      }, 4500);
    }
  };

  const agentFeePayment = async (booking_id) => {
    const paymentDetails = {
      amount: Number(roomDetails.agent_fee),
      room_id: roomDetails._id,
      hostel_id: roomDetails.hostel,
      booking_id: booking_id,
      callback_url: `${origin}/receipt-page`,
    };

    try {
      const response = await axiosInstance.post(
        `${endpoints.agentFeePayment}`,
        paymentDetails
      );
      if (response) {
        const transactionPage = response.data.checkoutLink;

        window.location.href = `${transactionPage}`;
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      {showSpinner && <Spinner />}
      <div className={styles.wrapper}>
        <form onSubmit={handlePayAgentFee}>
          <header className={styles.header}>
            <IoCalendarNumberOutline size={30} />
            <h3>Book Inspection</h3>
          </header>
          <section className={styles.sec_01}>
            <header>
              <h3>Room Information</h3>
            </header>

            <div>
              <p>Hostel:</p> <span>{hostelDetails.hostel_name}</span>
            </div>

            <div>
              <p>Unit:</p> <span>{roomDetails.unit}</span>
            </div>
            <div>
              <p>Apartment:</p> <span>{roomDetails.room_number}</span>
            </div>
          </section>

          <section className={styles.sec_02}>
            {" "}
            <header>
              <h3>Inspection Date</h3>
            </header>
            <input
              type="date"
              value={inspection_date}
              name="inspection_date"
              onChange={(e) => setInspection_date(e.target.value)}
            />
          </section>

          <section className={styles.sec_03}>
            <header>
              <h3>Inspection Time</h3>
            </header>

            <aside>
              {showSelectTime && (
                <div>
                  <label htmlFor="a">
                    08:00am - 08:30am
                    <input
                      id="a"
                      type="radio"
                      value={"08:00am - 08:30am"}
                      name="inspection_time"
                      checked={inspection_time === "08:00am - 08:30am"}
                      onChange={(e) => setInspection_time(e.target.value)}
                    />
                  </label>
                  <label htmlFor="b">
                    10:00am - 10:30am
                    <input
                      id="b"
                      type="radio"
                      value={"10:00am - 10:30am"}
                      name="inspection_time"
                      checked={inspection_time === "10:00am - 10:30am"}
                      onChange={(e) => setInspection_time(e.target.value)}
                    />
                  </label>
                  <label htmlFor="c">
                    12:00pm - 12:30pm
                    <input
                      id="c"
                      type="radio"
                      value={"12:00pm - 12:30pm"}
                      name="inspection_time"
                      checked={inspection_time === "12:00pm - 12:30pm"}
                      onChange={(e) => setInspection_time(e.target.value)}
                    />
                  </label>
                  <label htmlFor="d">
                    02:00pm - 02:30pm
                    <input
                      id="d"
                      type="radio"
                      value={"02:00pm - 02:30pm"}
                      name="inspection_time"
                      checked={inspection_time === "02:00pm - 02:30pm"}
                      onChange={(e) => setInspection_time(e.target.value)}
                    />
                  </label>
                  <label htmlFor="e">
                    04:00pm - 04:30pm
                    <input
                      id="e"
                      type="radio"
                      value={"04:00pm - 04:30pm"}
                      name="inspection_time"
                      checked={inspection_time === "04:00pm - 04:30pm"}
                      onChange={(e) => setInspection_time(e.target.value)}
                    />
                  </label>
                  <label htmlFor="f">
                    05:00pm - 05:30pm
                    <input
                      id="f"
                      type="radio"
                      value={"05:00pm - 05:30pm"}
                      name="inspection_time"
                      checked={inspection_time === "05:00pm - 05:30pm"}
                      onChange={(e) => setInspection_time(e.target.value)}
                    />
                  </label>
                </div>
              )}

              <p> {inspection_time}</p>
              <span>
                <IoTimeOutline
                  onClick={() => {
                    setShowSelectTime(!showSelectTime);
                  }}
                />
              </span>
            </aside>
          </section>

          <section className={styles.sec_04}>
            <header>
              <h3>
                {roomDetails.agent_fee?.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </h3>
            </header>
            <div>
              <b>Agent Fee</b> <p>Required for room inspection</p>
            </div>
          </section>
          <section className={styles.sec_05}>
            <Button
              disabled={!inspection_date || !inspection_time}
              type={"submit"}
              children={"Pay Agent Fee"}
            />
          </section>
        </form>
        <button onClick={() => navigate("/receipt-page")}>Receipt Page</button>
      </div>
    </div>
  );
}

export default BookInspection;
