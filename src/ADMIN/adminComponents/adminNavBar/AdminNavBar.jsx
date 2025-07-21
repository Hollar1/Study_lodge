import React from "react";
import styles from "../adminNavBar/adminNavBar.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function AdminNavBar() {
  const navigate = useNavigate()
  return (
    <div>
      <section className={styles.sec_01}>
        <nav>
          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div onClick={()=>{navigate("all-hostels")}}>Hostels</div>
          <div>Rooms</div>
          <div>Members</div>
          <div>Create Hostel</div>
        </nav>
      </section>
    </div>
  );
}

export default AdminNavBar;
