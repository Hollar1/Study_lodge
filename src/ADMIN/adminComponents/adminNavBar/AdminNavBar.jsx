import React, { useState } from "react";
import styles from "../adminNavBar/adminNavBar.module.scss";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function AdminNavBar() {
  const navigate = useNavigate();
  const [showBars, setShowBars] = useState(false);
  const handleShowBars = () => {
    setShowBars(!showBars);
  };
  return (
    <div>
      <section className={styles.sec_01}>
        <nav>
          <div onClick={handleShowBars}>
            <FontAwesomeIcon icon={showBars ? faXmark : faBars} />
          </div>
          <div
            onClick={() => {
              navigate("/all-hostels");
            }}
          >
            Hostels
          </div>
          <div
            onClick={() => {
              navigate("/all-rooms");
            }}
          >
            Rooms
          </div>
          <div onClick={()=>{navigate("/booking")}}>Booking(3)</div>
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            Web-Page
          </div>
        </nav>
      </section>
      {showBars && (
        <section className={styles.sec_02}>
          <button
            onClick={() => {
              navigate("/admin-sign-up");
            }}
          >
            Create Admin
          </button>
          <button onClick={()=>{navigate("/all-users")}}>All Users</button>
          <button>Send Email</button>
          <button>Send SMS</button>
          <button>Settings</button>
        </section>
      )}
    </div>
  );
}

export default AdminNavBar;
