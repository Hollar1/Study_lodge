import React, { useEffect, useState } from "react";
import styles from "../allRooms/allRooms.module.scss";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FailedModal from "../../components/failedModal/FailedModal";
import Spinner from "../../components/spinner/Spinner";
import {
  faPen,
  faPenToSquare,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function AllRooms() {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axiosInstance.get(`${endpoints.get_all_rooms}`);
      if (response) {
        setAllRooms(response.data);
      }
    };
    fetchRooms();
  }, [allRooms]);

  const handleDeleteRoom = async (room_id) => {
    setShowSpinner(true);
    try {
      console.log("you clicked:", room_id);
      const response = await axiosInstance.delete(
        `${endpoints.deleteRoom}${room_id}`
      );
      if (response) {
        setShowFailedModal(true);
        setTimeout(() => {
          setShowFailedModal(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setShowSpinner(false);
    }
  };

  const handleNavigateToUpdateRoom = async (room_id) => {
    navigate(`/update-room/${room_id}`);
  };

  return (
    <div className={styles.parent_wrapper}>
      {showSpinner && <Spinner />}
      {showFailedModal && <FailedModal body={"Room Successfully Deleted!"} />}
      <div>
        <section className={styles.sec_01}>
          <h3>Room Management</h3>
          <section className={styles.sec_02}>
            <input type="text" placeholder="Search for room or hostel" />
            <FontAwesomeIcon icon={faSearch} />
          </section>
        </section>
        <section className={styles.sec_03}>
          <table>
            <thead>
              <tr>
                <th>Hostel Name</th>
                <th>Unit Type</th>
                <th>Room Num</th>
                <th>Agent Fee</th>
                <th>Room Fee</th>
                <th>Caution Fee</th>
                <th>Status</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {allRooms.map((room) => (
                <tr key={room._id}>
                  <td>{room?.hostel?.hostel_name}</td>
                  <td>{room?.unit}</td>
                  <td>{room?.room_number}</td>
                  <td>
                    {room?.agent_fee.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>
                  <td>
                    {room?.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>
                  <td>
                    {room?.caution_fee.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>
                  <td
                    className={
                      room.status === "available"
                        ? styles.available
                        : room.status === "booked"
                        ? styles.booked
                        : styles.occupied
                    }
                  >
                    {room?.status}
                  </td>
                  <td
                    onClick={() => {
                      handleDeleteRoom(room?._id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                  <td>
                    {" "}
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => {
                        handleNavigateToUpdateRoom(room?._id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default AllRooms;
