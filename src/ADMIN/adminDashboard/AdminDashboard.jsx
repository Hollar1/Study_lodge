import React, { useEffect } from "react";
import AdminNavBar from "../adminComponents/adminNavBar/AdminNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../adminDashboard/adminDashboard.module.scss";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";

function AdminDashboard() {


  
  const getAllTenants = async () => {
    try {
      const response = await axiosInstance.get(`${endpoints.getAllTenants}`);
      console.log("this are the tenants",response.data)
    } catch (error) {
      console.log(error.response)
    }
  };
  useEffect(()=>{
    getAllTenants()
  },[])






  return (
    <div>
      <AdminNavBar />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <header>Tenants</header>
          <div>
            <input type="text" />
            <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
          </div>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
          </table>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
