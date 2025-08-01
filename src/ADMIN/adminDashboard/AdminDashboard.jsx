import React from "react";
import styles from "../adminDashboard/adminDashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../ADMIN/adminComponents/adminNavBar/AdminNavBar";
import { MessageBox, } from "../adminComponents/sendMessage/SendMessage";


function AdminDashboard() {
  return (
    <div className={styles.parent_wrapper}>

      {/* <MessageBox/> */}
      <div>
        <section className={styles.sec_01}>
          <NavBar />

          <section className={styles.sec_02}>
            <article>
              <input
                type="text"
                placeholder="Search by full name"
                value=""
              />
              <FontAwesomeIcon icon={faSearch} />
            </article>
            <i>Total Tenants: 0</i>
          </section>
        </section>

        <section className={styles.sec_03}>
          <table>
            <thead>
              <tr>
                <th>Room Num</th>
                <th>Full Name</th>
                <th>Hostel</th>
                <th>Unit Type</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Days Left</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </section>
           
        
     
      </div>
    </div>
  );
}

export default AdminDashboard;
