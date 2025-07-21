import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../addRoom/addRoom.module.scss";
import Spinner from "../../components/spinner/Spinner";
import { faL, fas } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";

function AddRoom() {
  const { hostelId } = useParams();

  const [showSpinner, setShowSpinner] = useState(false);

  const [roomDetails, setRoomDetails] = useState({
    room_number: "",
    unit: "",
    agent_fee: "",
    price: "",
    caution_fee: "",
    commission_fee: "",
    status: "",
    hostel: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    try {
      const payload = {
        room_number: roomDetails.room_number,
        unit: roomDetails.unit,
        agent_fee: roomDetails.agent_fee,
        price: roomDetails.price,
        caution_fee: roomDetails.caution_fee,
        commission_fee: roomDetails.commission_fee,
        status: roomDetails.status,
        hostel: hostelId,
      };


      const response = await axiosInstance.post(
        `${endpoints.addRoom}`,
        payload
      );
      console.log(response.data);
    } catch (error) {
      if (error) {
        console.log(error?.response?.data?.message);
      }
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <div>
      {showSpinner && <Spinner />}
      <section className={styles.sec_01}>
        <header>
          <h3>Building Management System</h3>
          <p> Add Room to Hostel Name</p>
        </header>
      </section>
      <section className={styles.sec_02}>
        <header>
          <h3>Add New Room</h3>
        </header>

        <form onSubmit={handleAddRoom}>
          <main>
            <div>
              <label htmlFor="">
                Room Number
                <select
                  value={roomDetails.room_number}
                  name="room_number"
                  onChange={handleOnChange}
                >
                  <option value="">--Select--</option>
                  <option value="room 01">Room 01</option>
                  <option value="room 02">Room 02</option>
                  <option value="room 03">Room 03</option>
                  <option value="room 04">Room 04</option>
                  <option value="room 05">Room 05</option>
                  <option value="room 06">Room 06</option>
                  <option value="room 07">Room 07</option>
                  <option value="room 08">Room 08</option>
                  <option value="room 09">Room 09</option>
                  <option value="room 10">Room 10</option>
                  <option value="room 11">Room 11</option>
                  <option value="room 12">Room 12</option>
                  <option value="room 13">Room 13</option>
                  <option value="room 14">Room 14</option>
                  <option value="room 15">Room 15</option>
                  <option value="room 16">Room 16</option>
                  <option value="room 17">Room 17</option>
                  <option value="room 18">Room 18</option>
                  <option value="room 19">Room 19</option>
                  <option value="room 20">Room 20</option>
                </select>
              </label>
              <label htmlFor="">
                Unit
                {/* <input type="text" /> */}
                <select
                  value={roomDetails.unit}
                  name="unit"
                  onChange={handleOnChange}
                >
                  <option value="">--Select--</option>
                  <option value="single room (share facilities)">
                    Single Room (Share Facilities)
                  </option>
                  <option value="one bedroom flat">One Bedroom Flat</option>
                  <option value="two bedroom flat">Two Bedroom Flat</option>
                  <option value="three bedroom flat">Three Bedroom Flat</option>
                  <option value="four bedroom flat">Four Bedroom Flat</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="">
                Room Price
                <input
                  type="number"
                  value={roomDetails.price}
                  name="price"
                  onChange={handleOnChange}
                />
              </label>
              <label htmlFor="">
                Agent Fee
                <input
                  type="number"
                  value={roomDetails.agent_fee}
                  name="agent_fee"
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Caution Fee
                <input
                  type="number"
                  value={roomDetails.caution_fee}
                  name="caution_fee"
                  onChange={handleOnChange}
                />
              </label>
              <label htmlFor="">
                Commission Fee
                <input
                  type="number"
                  value={roomDetails.commission_fee}
                  name="commission_fee"
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Room Status
                <select
                  value={roomDetails.status}
                  name="status"
                  onChange={handleOnChange}
                >
                  <option value="">--Select--</option>
                  <option value="available">Available</option>
                  <option value="booked">Booked</option>
                </select>
              </label>
              <label htmlFor="">
                Hostel ID
                <input
                  type="text"
                  value={hostelId}
                  disabled
                  style={{ color: "rgb(169, 165, 165)" }}
                />
              </label>
            </div>

            <button type="submit">Add Room To Building</button>
          </main>
        </form>
      </section>
    </div>
  );
}

export default AddRoom;
