import React, { useEffect, useState } from "react";
import styles from "../allRooms/allRooms.module.scss";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FailedModal from "../../components/failedModal/FailedModal";
import Spinner from "../../components/spinner/Spinner";
import {
  faPenToSquare,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function AllRooms() {
  const navigate = useNavigate();

  const [showSpinner, setShowSpinner] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [make_room_available_id, setMake_room_available_id] = useState(null);
  const [allRooms, setAllRooms] = useState([]);
  const [chosenRoom, setChosenRoom] = useState(null);
  const [chosenHostel, setChosenHostel] = useState(null);
  console.log("This is chosen hostel details", chosenHostel);
  console.log("This is chosen room:", chosenRoom);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchRooms = async () => {
    const response = await axiosInstance.get(`${endpoints.get_all_rooms}`);
    if (response) {
      setAllRooms(response.data);
    }
  };
  useEffect(() => {
    fetchRooms();
  }, []);

  const handleDeleteRoom = async (room_id) => {
    setShowSpinner(true);
    try {
      const response = await axiosInstance.delete(
        `${endpoints.deleteRoom}${room_id}`
      );
      if (response) {
        setShowFailedModal(true);
        fetchRooms();
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

  const searchRoom = allRooms.filter((room) =>
    room.hostel?.hostel_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalRooms = allRooms.length;
  const totalOccupied = allRooms.filter((room) => room.status === "rented");
  const totalBooked = allRooms.filter((room) => room.status === "booked");

  const totalBooked_totalOccupied = totalBooked.length + totalOccupied.length;
  const totalRemaining = totalRooms - totalBooked_totalOccupied;

  const handleShowWarning = (room_id) => {
    setMake_room_available_id(room_id);
    chosenRoomDetails(room_id);
  };

  const handleMakeRoomAvailable = async () => {
    const makeRoomAvailable = endpoints.makeRoomAvailable.replace(
      "{id}",
      make_room_available_id
    );
    console.log("this is it", makeRoomAvailable);
    try {
      const payload = {
        status: "available",
      };
      const response = await axiosInstance.patch(
        `${makeRoomAvailable}`,
        payload
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const chosenRoomDetails = async (room_id) => {
    const response = await axiosInstance.get(
      `${endpoints.get_A_room}${room_id}`
    );
    const hostel_id = response.data.hostel;
    chosenHostelDetails(hostel_id);
    setChosenRoom(response.data?.room_number);
  };

  const chosenHostelDetails = async (hostel_id) => {
    const response = await axiosInstance.get(
      `${endpoints.singleHostelDetails}${hostel_id}`
    );
    setChosenHostel(response.data?.hostel_name);
  };

  return (
    <div className={styles.parent_wrapper}>
      {make_room_available_id && (
        <section className={styles.sec_04}>
          <div>
            <h3>Warning ⚠️</h3>
            <p>
              {" "}
              You are about to make <span>{chosenRoom} </span> at{" "}
              <span>{chosenHostel} hostel</span> available for new tenants. Are
              you sure the previous tenant has vacated ?{" "}
            </p>
            <aside>
              {" "}
              <button
                onClick={() => {
                  handleMakeRoomAvailable();
                }}
              >
                Yes
              </button>{" "}
              <button onClick={() => setMake_room_available_id(null)}>
                Cancel
              </button>
            </aside>
          </div>
        </section>
      )}
      {showSpinner && <Spinner />}
      {showFailedModal && <FailedModal body={"Room Successfully Deleted!"} />}
      <div>
        <section className={styles.sec_01}>
          <h3>Room Management</h3>

          <section className={styles.sec_02}>
            <article>
              <input
                type="text"
                placeholder="Search by hostel's name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} />
            </article>
            <i> Total Rooms: {allRooms?.length}</i>
            <i>Total Booked: {totalBooked?.length}</i>
            <i>Total Occupied: {totalOccupied?.length}</i>
            <i>Total Remaining: {totalRemaining}</i>
          </section>
        </section>
        <section className={styles.sec_03}>
          <table>
            <thead>
              <tr>
                <th>Num.</th>
                <th>Hostel Name</th>
                <th>Unit Type</th>
                <th>Room Num.</th>
                <th>Agent Fee</th>
                <th>Room Fee</th>
                <th>Caution Fee</th>
                <th>Status</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {searchRoom.map((room, index) => (
                <tr key={room._id}>
                  <td>{index + 1}</td>
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
                    {room?.status === "rented"
                      ? "Occupied"
                      : room?.status === "available"
                      ? "Available"
                      : room?.status === "booked"
                      ? "Booked"
                      : null}

                    {room?.status === "booked" || room.status === "rented" ? (
                      <button
                        onClick={() => {
                          handleShowWarning(room?._id);
                        }}
                      >
                        open
                      </button>
                    ) : (
                      ""
                    )}
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
