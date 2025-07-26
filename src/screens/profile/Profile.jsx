import React, { useEffect, useState } from "react";
import styles from "../profile/profile.module.scss";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";

function Profile() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  console.log(data?.rentDetails);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `${endpoints.get_A_UserProfile}${userId}`
        );
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        if (error) {
          console.log(error.response?.data);
        }
      }
    };
    fetchProfileDetails();
  }, [userId]);

  const handlePayRent = async () => {
    try {
      const { origin } = window.location;
      const payload = {
        amount: data?.agentFeePayment?.room?.price,
        room_id: data?.agentFeePayment?.room?._id,
        hostel_id: data?.agentFeePayment?.hostel?._id,
        booking_id: data?.agentFeePayment?.booking?._id,
        callback_url: `${origin}/rent-receipt`,
      };
      // console.log(payload);
      const response = await axiosInstance.post(
        `${endpoints.roomFeePayment}`,
        payload
      );
      console.log(response);
      const checkoutLink = response?.data?.checkoutLink;
      window.location.href = checkoutLink;
    } catch (error) {
      if (error) {
        console.log(error?.response?.data);
      }
    }
  };

  const handleRentRenewal = async () => {
    console.log("yes");
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <header>Profile</header>
        </section>

        <section className={styles.sec_02}>
          <div>
            <aside>
              <h3>Full Name:</h3>
              <p>
                {" "}
                {data?.first_name} {data?.last_name}
              </p>
            </aside>
            <aside>
              <h3>Email:</h3>
              <p>
                {" "}
                <span style={{ textTransform: "lowercase" }}>
                  {data?.email}
                </span>
              </p>
            </aside>
            <aside>
              <h3>Contact:</h3>
              <p>{data?.phone_number}</p>
            </aside>

            <div>
              <button
                className={userId ? styles.logout_btn : styles.login_btn}
                onClick={handleLogout}
              >
                {userId ? "Logout" : "Login"}
              </button>
            </div>
          </div>
        </section>
 

        {data?.agentFeePayment && (
          <section className={styles.sec_03}>
            <table>
              <thead>
                <tr>
                  <th colSpan={3}>Payment Details</th>
                </tr>
              </thead>

              <tbody>
                <tr className={styles.agentFee_sec}>
                  <td>Agent Fee</td>
                  <td>
                    {data?.agentFeePayment?.amount.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>

                  <td
                    className={
                      data?.agentFeePayment ? styles.paid : styles.waiting
                    }
                  >
                    {data?.agentFeePayment ? "Paid" : "waiting"}
                  </td>
                </tr>

                <tr className={styles.commissionFee_sec}>
                  <td>Caution Fee</td>
                  <td>
                    {" "}
                    {data?.agentFeePayment?.room?.caution_fee.toLocaleString(
                      "en-NG",
                      {
                        style: "currency",
                        currency: "NGN",
                      }
                    )}
                  </td>
                  <td>N/A</td>
                </tr>

                <tr className={styles.cautionFee_sec}>
                  <td>Rent Fee</td>
                  <td>
                    {" "}
                    {data?.agentFeePayment?.room?.price.toLocaleString(
                      "en-NG",
                      {
                        style: "currency",
                        currency: "NGN",
                      }
                    )}
                  </td>

                  <td
                    className={
                      data?.roomPricePayment ? styles.paid : styles.waiting
                    }
                  >
                    {" "}
                    {data?.roomPricePayment ? "paid" : "Waiting..."}{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {data?.hostel && (
          <section className={styles.sec_04}>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Rent Details</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Hostel's Name</td>
                  <td>{data?.agentFeePayment?.hostel?.hostel_name}</td>
                </tr>
                <tr>
                  <td>Unit</td>
                  <td>{data?.agentFeePayment?.room?.unit}</td>
                </tr>
                <tr>
                  <td>Apartment</td>
                  <td>{data?.agentFeePayment?.room?.room_number}</td>
                </tr>

                <tr>
                  <td>Start Date</td>

                  <td>
                    {data?.rentDetails?.rentStartDate
                      ? new Date(data.rentDetails.rentDueDate)
                          .toISOString()
                          .split("T")[0]
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>Due Date</td>
                  <td>
                    {data?.rentDetails?.rentDueDate
                      ? new Date(data.rentDetails.rentDueDate)
                          .toISOString()
                          .split("T")[0]
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>Days Left</td>
                  <td>{data?.rentDetails?.countdown - 10} Days</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {data?.agentFeePayment && (
          <section className={styles.sec_05}>
            <Button
              onClick={
                data?.agentFeePayment && data.hostel
                  ? handleRentRenewal
                  : handlePayRent
              }
              type={"submit"}
              children={
                data?.agentFeePayment && data?.hostel
                  ? "Renew Rent"
                  : "Pay Rent"
              }
            />
          </section>
        )}

        <section className={styles.sec_06}>
          <header>Emergency Contact Person</header>
          <aside>
            <div>
              <p>Full Name:-</p>
              <span>Kareem Suliyat</span>
            </div>
            <div>
              <p>Relationship:-</p>
              <span>Kareem Suliyat</span>
            </div>

            <div>
              <p>Phone Num:-</p>
              <span>Kareem Suliyat</span>
            </div>
          </aside>

          <div className={styles.address_div}>
            <p>Address:</p>
            <address>F/ab55, iku , ikare akoko, Ondo state, Nigeria.</address>
          </div>
        </section>
        {/* <button
          onClick={() => {
            navigate("/receipt-page");
          }}
        >
          RECEIPT PAGE
        </button> */}
      </div>
    </div>
  );
}

export default Profile;
