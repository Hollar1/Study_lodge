import React, { useEffect, useState } from "react";
import styles from "../allHostels/allHostels.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLadderWater, faSearch } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import FailedModal from "../../components/failedModal/FailedModal";
import Spinner from "../../components/spinner/Spinner";
import {
  MessageBox,
  SendMessage,
} from "../adminComponents/sendMessage/SendMessage";
import Modal from "../../components/modal/Modal";

function AllHostels() {
  const navigate = useNavigate();
  const [hostels, setHostels] = useState([]);

  // SMS FUNCTIONS START HERE
  const [number, setNumber] = useState("");
  const [sms, setSms] = useState("");
  const [showSMSBox, setShowSMSbox] = useState(false);
  console.log(number, sms);

  const handleShowSMSbox = () => {
    setShowSMSbox(true);
  };

  const handleSendSMS = async () => {
    try {
      await SendMessage(number, sms);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setSms("");
        setShowSMSbox(false);
      }, 4000);
      // navigate(0);
    } catch (error) {
      if (error) {
        console.log(error.response?.data);
      }
    }
  };
  // SMS FUNCTIONS ENDS HERE

  const [mail_id, set_mail_id] = useState("");

  const [showSpinner, setShowSpinner] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [showQuillMessage, setShowQuillMessage] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

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

  const handleNavigateToUpdateHostel = (hostel_id) => {
    navigate(`/update-hostel/${hostel_id}`);
  };

  const search_for_hostel = hostels.filter((hostel) =>
    hostel.hostel_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGetHostel_id = (hostel_id_email) => {
    set_mail_id(hostel_id_email);
    setShowQuillMessage(true);
  };

  return (
    <div className={styles.parent_wrapper}>
      {showSpinner && <Spinner />}
      {showFailedModal && <FailedModal body={"Hostel Deleted Successfully!"} />}
      {showModal && <Modal body={"Message successfully Sent 👍🏾"} />}

      {showSMSBox && (
        <MessageBox
          inputName={"number"}
          inputOnChange={setNumber}
          inputNumber={number}
          onChange={setSms}
          value={sms}
          name={"sms"}
          handleSendText={handleSendSMS}
          handleCancel={() => {
            setShowSMSbox(false);
          }}
        />
      )}

      {/* {showSMSBox && (
        <section className={styles.sec_04}>
          <div>
            <input
              type="text"
              value={number}
              name="number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              value={sms}
              name="sms"
              onChange={(e) => setSms(e.target.value)}
            ></textarea>
            <article>
              <button onClick={handleSendSMS}>Send SMS</button>
              <button
                onClick={() => {
                  setShowSMSbox(false);
                }}
              >
                Cancel
              </button>
            </article>
          </div>
        </section>
      )} */}

      <div>
        <section className={styles.sec_01}>
          <header>All Hostels</header>
          <div>
            <input
              type="text"
              placeholder="Search by hostel's name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </div>
        </section>

        <section className={styles.sec_02}>
          <button
            onClick={() => {
              navigate("/create-hostel");
            }}
          >
            Create Hostel{" "}
          </button>
          <article>
            <div>Total Hostels:</div>
            <span>{12}</span>
          </article>
        </section>

        <section className={styles.sec_03}>
          <table>
            <thead>
              <tr>
                <th>Hostel' Name</th>
                <th>Address</th>
                <th>Add Rooms</th>
                <th>Send Email</th>
                <th> Send SMS</th>
                <th colSpan={"3"}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {search_for_hostel?.map((hostel) => (
                <tr key={hostel.id}>
                  <td>{hostel.hostel_name}</td>
                  <td>{hostel.address}</td>
                  <td
                    onClick={() => {
                      handleNavigateToAddRoom(hostel.id);
                    }}
                  >
                    <button> Add Room</button>
                  </td>

                  <td>
                    <button
                      onClick={() => {
                        handleGetHostel_id(hostel.id);
                      }}
                    >
                      Send Email
                    </button>
                  </td>
                  <td>
                    <button onClick={handleShowSMSbox}>Send SMS</button>
                  </td>
                  <td
                    onClick={() => {
                      handleNavigateToUpdateHostel(hostel.id);
                    }}
                  >
                    <button> Update</button>
                  </td>
                  <td>
                    <button>Close</button>
                  </td>
                  <td
                    onClick={() => {
                      handleDeleteHostel(hostel.id);
                    }}
                  >
                    <button> Delete</button>
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
