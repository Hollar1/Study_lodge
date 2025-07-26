import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../updateRoom/updateRoom.module.scss";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import Modal from "../../components/modal/Modal";
import Spinner from "../../components/spinner/Spinner";
function UpdateRoom() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [RoomUnit, setRoomUnit] = useState("");
  const [hostelName, setHostelName] = useState("");

  const [hostelId, setHostelId] = useState("");

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

  const handleEditRoom = async (e) => {
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
      console.log(payload);
      const response = await axiosInstance.patch(
        `${endpoints.updateRoom}${roomId}`,
        payload
      );
      if (response) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/admin-dashboard", { replace: true });
        }, 4000);
      }
    } catch (error) {
      if (error) {
        console.log(error?.response?.data?.message);
      }
    } finally {
      setShowSpinner(false);
    }
  };

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await axiosInstance.get(
        `${endpoints.get_A_room}${roomId}`
      );
      setRoomUnit(response.data.unit);
      setHostelId(response.data.hostel);
    };
    fetchRoom();
  }, [roomId]);









  useEffect(() => {
    const fetchHostel = async () => {
      const response = await axiosInstance.get(
        `${endpoints.singleHostelDetails}${hostelId}`
      );
      setHostelName(response.data?.hostel_name);
    };
    fetchHostel();
  }, [hostelId]);

  return (
    <div>
      {showSpinner && <Spinner />}
      {showModal && <Modal body={"Room Updated Successfully 👍🏾"} />}
      <section className={styles.sec_01}>
        <header>
          <h3>Building Management System</h3>
          <p> Updating {RoomUnit} </p>
        </header>
      </section>
      <section className={styles.sec_02}>
        <header>
          <h3>{hostelName}</h3>
        </header>
        <form onSubmit={handleEditRoom}>
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
                  <option value="rented">Occupied</option>
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

            <button type="submit">Update Room</button>
          </main>
        </form>
      </section>
    </div>
  );
}

export default UpdateRoom;
