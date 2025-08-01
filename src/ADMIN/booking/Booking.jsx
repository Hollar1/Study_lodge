import React from "react";
import styles from "../booking/booking.module.scss";

function Booking() {
  return (
    <div className={styles.wrapper}>
      <div>
        <section className={styles.sec_01}>
          <header>Booking Management</header>
        </section>

        <section className={styles.sec_02}>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Hostel</th>
                <th>Unit Type</th>
                <th>Room Num</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Umar Kareem</td>
                <td>Scholar's Hostel</td>
                <td>Room & Parlor Self Contained</td>
                <td>Room 05</td>
                <td>25-09-2025</td>
                <td>2:00pm-02:30pm</td>
                <td>Waiting</td>
                <td>
                  <button>Actions</button>
                  <div>
                    <button>User Profile</button>
                    <button>Confirm Booking ?</button>
                    <button>Confirm Inspection ?</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Umar Kareem</td>
                <td>Scholar's Hostel</td>
                <td>Room & Parlor Self Contained</td>
                <td>Room 05</td>
                <td>25-09-2025</td>
                <td>12:30pm-01:00pm</td>
                <td>Confirmed</td>
                {/* <td>
                  <button>Actions</button>
                  <div>
                    <button>User Profile</button>
                    <button>Confirm Booking ?</button>
                    <button>Confirm Inspection ?</button>
                  </div>
                </td> */}
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Booking;
