import React, { useState, useEffect } from "react";
import styles from "../navBar/navBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import company_logo from "../../assets/images/company_logo_01.png";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../utils/api";
import axiosInstance from "../../utils/axiosInstance";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [hostels, setHostels] = useState([]);
  const userToken = localStorage.getItem("userToken");
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();
  const fetchAllHostel = async () => {
    const response = await axiosInstance.get(`${endpoints.getAllHostel}`);
    setHostels(response.data);
  };

  useEffect(() => {
    fetchAllHostel();
  }, []);

  const handleGoToHostel = (id) => {
    navigate(`/hostel/${id}`);
    setShowMenu(false);
  };

  return (
    <div className={styles.wrapper}>
      <nav>
        <img onClick={() => navigate("/")} src={company_logo} alt="" />

        <div>
          <FontAwesomeIcon
            icon={faUser}
            onClick={() => {
              navigate(userToken ? `/profile/${userId}` : "/login");
            }}
          />

          <FontAwesomeIcon
            icon={showMenu ? faXmark : faBars}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            style={{ color: showMenu ? "red" : null }}
          />
        </div>
      </nav>

      {showMenu && (
        <section className={styles.menu_container}>
          {hostels.map((hostelDetail) => (
            <button
              key={hostelDetail.id}
              onClick={() => {
                handleGoToHostel(hostelDetail.id);
              }}
            >
              <p>{hostelDetail.hostel_name}</p>{" "}
              <span>{hostelDetail.address}</span>
            </button>
          ))}
     <button onClick={()=>{navigate("/admin-dashboard")}}>Admin Dashboard</button>
        </section>
      )}
    </div>
  );
}

export default NavBar;
