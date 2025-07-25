import React, { useEffect, useState } from "react";
import styles from "../allUsers/allUsers.module.scss";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints, baseUrl } from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/spinner/Spinner";
import FailedModal from "../../components/failedModal/FailedModal";
function AllUsers() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const fetchAllUsers = async () => {
    try {
      const response = await axiosInstance.get(`${endpoints.getAllUsers}`);
      setAllUsers(response.data);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleSearch = allUsers.filter(
    (user) =>
      user?.phone_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user?.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (user_id) => {
    setShowSpinner(true);
    try {
      const response = await axiosInstance.delete(
        `${endpoints.deleteUserAccount}${user_id}`
      );
      if (response) {
        setShowModal(true);
        fetchAllUsers();
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      }
    } catch (error) {
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <div className={styles.parent_wrapper}>
      {showSpinner && <Spinner />}
      {showModal && (
        <FailedModal body={"User Account Deleted Successfully !"} />
      )}
      <div>
        <section className={styles.sec_01}>
          <header>All Users</header>
          <div>
            <input
              type="text"
              placeholder="Search by user email or phone_number only!"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />{" "}
            <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
          </div>
        </section>
        <section className={styles.sec_02}>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Acc Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {handleSearch.map((user) => (
                <tr key={user?._id}>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.gender}</td>
                  <td
                    className={
                      user.isEmailConfirmed === true
                        ? styles.verified
                        : styles.unverified
                    }
                  >
                    {user.isEmailConfirmed === true ? "Verified" : "Unverified"}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                    >
                      Delete
                    </button>
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

export default AllUsers;
