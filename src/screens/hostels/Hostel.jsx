import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useData from "../../utils/fetchHook";
import { endpoints } from "../../utils/api";
import NavBar from "../../components/navBar/NavBar";
import styles from "../hostels/hostel.module.scss";
import axiosInstance from "../../utils/axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Hostel() {
  const { hostel_id } = useParams();
  const navigate = useNavigate();

  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setUserToken(userToken);
  }, [userToken]);
  const [hostelDetails, setHostelDetails] = useState(null);
  // console.log(hostelDetails);
  const [rooms, setRooms] = useState([]);
  console.log(rooms)


  const [images, setImages] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const fetchHostel = async () => {
      try {
        const response = await axiosInstance.get(
          `${endpoints.singleHostelDetails}${hostel_id}`
        );
        setHostelDetails(response.data);
        setImages(response.data.images);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHostel();
  }, [hostel_id]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axiosInstance.get(
          `${endpoints.getRoomForHostel}${hostel_id}`
        );
        setRooms(response.data);
      } catch (error) {}
    };
    fetchRooms();
  }, [hostel_id]);

  const navigateToBooking = (room_id) => {
    navigate(userToken ? `/book-inspection/${room_id}` : "/login");
  };









  return (
    <div>
      {/* <NavBar /> */}
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <h3>{hostelDetails?.hostel_name}</h3>

          <div>
            <img src={images[currentIndex]} alt="" />
            <button className={styles.next_btn} onClick={goToNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button className={styles.previous_btn} onClick={goToPrevious}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
          {/* <article>
            <header>Accommodation Details</header>
            <p> {hostelDetails?.hostel_details}</p>
          </article> */}
        </section>

        <section className={styles.sec_02}>
          <header>Book Inspection</header>

          <div className={styles.room_container}>
            {rooms.map((room, index) => (
              <section key={index}>
                <div>
                  <b>{room.room_number}</b>{" "}
                  <i
                    className={
                      room.status === "rented"
                        ? styles.occupied
                        : room.status === "booked"
                        ? styles.booked
                        : styles.available
                    }
                  >
                    {room.status === "rented"
                      ? "Occupied"
                      : room.status === "booked"
                      ? "Booked"
                      : "Available"}
                  </i>
                </div>
                <div>
                  <p className={styles.unit}>{room.unit} </p>
                </div>
                <div>
                  <span>
                    Agent:{" "}
                    {room.agent_fee.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}{" "}
                  </span>

                  <span>
                    Caution:{" "}
                    {room.caution_fee.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div>
                  <span>
                    Rent:{" "}
                    {room.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                    /Year
                  </span>

                  <button
                    className={
                      room.status === "booked" || room.status==="rented"
                        ? styles.roomBooked
                        : styles.roomAvailable
                    }
                    disabled={
                      room.status === "rented" || room.status === "booked"
                    }
                    onClick={() => {
                      navigateToBooking(room._id);
                    }}
                  >
                    Book Inspection
                  </button>
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hostel;
