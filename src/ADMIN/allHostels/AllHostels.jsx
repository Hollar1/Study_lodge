import React, { useEffect, useState } from "react";
import styles from "../allHostels/allHostels.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import FailedModal from "../../components/failedModal/FailedModal";
import Spinner from "../../components/spinner/Spinner";

function AllHostels() {
  const navigate = useNavigate();
  const [hostels, setHostels] = useState([]);

  const [showSpinner, setShowSpinner] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const fetchHostels = async () => {
    const response = await axiosInstance.get(`${endpoints.getAllHostel}`);
    if (response) {
      setHostels(response.data);
    }
  };
  useEffect(() => {
    fetchHostels();
  }, []);

  const handleNavigateToAddRoom = async (hostel_id) => {
    navigate(`/add-room/${hostel_id}`);
  };

  const handleDeleteHostel = async (hostel_id) => {
    setShowSpinner(true);
    try {
      const response = await axiosInstance.delete(
        `${endpoints.deleteHostel}${hostel_id}`
      );
      if (response) {
        setShowFailedModal(true);
        setTimeout(() => {
          setShowFailedModal(false);
          fetchHostels();
        }, 3000);
      }
    } catch (error) {
      if (error) {
        console.log(error.response?.data?.message);
      }
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <div className={styles.parent_wrapper}>
      {showSpinner && <Spinner />}
      {showFailedModal && <FailedModal body={"Hostel Deleted Successfully!"} />}
      <div>
        <section className={styles.sec_01}>
          <header>All Hostels</header>
          <div>
            <input type="text" />
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </div>
        </section>

        <section className={styles.sec_02}>
          <div>Total Hostels:</div>
          <span>{12}</span>
        </section>

        <section className={styles.sec_03}>
          <table>
            <thead>
              <tr>
                <th>Hostel' Name</th>
                <th>Address</th>
                <th>Add Rooms</th>
                <th>Update</th>
                <th>Send Email</th>
                <th> Send SMS</th>
                <th>Close</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {hostels.map((hostel) => (
                <tr key={hostel.id}>
                  <td>{hostel.hostel_name}</td>
                  <td>{hostel.address}</td>
                  <td
                    onClick={() => {
                      handleNavigateToAddRoom(hostel.id);
                    }}
                  >
                    Add Room
                  </td>
                  <td>Update</td>
                  <td>Send Email</td>
                  <td>Send SMS</td>
                  <td>Close</td>
                  <td
                    onClick={() => {
                      handleDeleteHostel(hostel.id);
                    }}
                  >
                    Delete
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

export default AllHostels;
