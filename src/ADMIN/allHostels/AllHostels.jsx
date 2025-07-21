import React, { useEffect, useState } from "react";
import styles from "../allHostels/allHostels.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import { useNavigate } from "react-router-dom";

function AllHostels() {
  const navigate = useNavigate();
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    const fetchHostels = async () => {
      const response = await axiosInstance.get(`${endpoints.getAllHostel}`);
      if (response) {
        console.log(response.data);
        setHostels(response.data);
      }
    };
    fetchHostels();
  }, []);

  const handleNavigateToAddRoom = async (hostel_id) => {
    navigate(`/add-room/${hostel_id}`);
  };

  return (
    <div className={styles.parent_wrapper}>
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
                  <td>Delete</td>
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
