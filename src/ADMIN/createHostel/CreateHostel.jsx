import React, { useRef, useState } from "react";
import styles from "../createHostel/createHostel.module.scss";
import Button from "../../components/button/Button";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import Modal from "../../components/modal/Modal";
import FailedModal from "../../components/failedModal/FailedModal";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";

function CreateHostel() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [failedMessage, setFailedMessage] = useState("");

  const sliceError = failedMessage
    ?.slice(12, failedMessage.length - 42)
    .replace(/"/g, "");

  const [hostelDetails, setHostelDetails] = useState({
    hostel_name: "",
    address: "",
    hostel_details: "",
    images: [],
  });

  const handleOnChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      setHostelDetails((preValue) => ({
        ...preValue,
        [name]: [...preValue[name], ...Array.from(files)],
      }));
    } else {
      setHostelDetails((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  };

  const pickFile = useRef(null);
  const handlePickFile = () => {
    pickFile.current.click();
  };

  const handleAddHostel = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    try {
      const fd = new FormData();

      fd.append("hostel_name", hostelDetails.hostel_name.toLowerCase());
      fd.append("address", hostelDetails.address.toLowerCase());
      fd.append("hostel_details", "nothing to be gere");
      hostelDetails.images.forEach((image) => {
        fd.append("images", image);
      });
      const response = await axiosInstance.post(
        `${endpoints.create_hostel}`,
        fd
      );
      if (response) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/admin-dashboard");
        }, 4000);
      }
    } catch (error) {
      if (error) {
        console.log(error.response?.data?.message);
        setFailedMessage(error.response?.data?.message);
      }
    } finally {
      setShowSpinner(false);
    }
  };
  return (
    <div className={styles.parent_wrapper}>
      {showSpinner && <Spinner />}
      {showModal && <Modal body={"Hostel Created Successfully"} />}
      {failedMessage && <FailedModal body={sliceError} />}
      <div>
        <section className={styles.sec_01}>
          <header>Add New Hostel</header>
        </section>

        <form onSubmit={handleAddHostel}>
          <section className={styles.sec_02}>
            <header>Hostel Information</header>
            <main>
              <div></div>
              <fieldset className={styles.fieldset_A}>
                <div>
                  <label htmlFor="">
                    Hostel Name
                    <input
                      type="text"
                      className={styles.A}
                      value={hostelDetails.hostel_name}
                      name="hostel_name"
                      onChange={handleOnChange}
                      autoComplete="off"
                    />
                  </label>

                  <label htmlFor="">
                    School
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="yes">KWASU Molete</option>
                      <option value="no">AAU Akungba</option>
                      <option value="no">FP Offa</option>
                    </select>
                  </label>
                </div>
              </fieldset>

              <div>
                <label htmlFor="">
                  Address
                  <input
                    type="text"
                    className={styles.A}
                    value={hostelDetails.address}
                    name="address"
                    onChange={handleOnChange}
                    autoComplete="off"
                  />
                </label>
              </div>

              <fieldset className={styles.fieldset_B}>
                <legend>Features</legend>
                <div>
                  <label htmlFor="">
                    Room Type
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="furnished">Furnished</option>
                      <option value="unfurnished">Unfurnished</option>
                    </select>
                  </label>

                  <label htmlFor="">
                    Bills-Inclusive
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>
                </div>

                <div>
                  <label htmlFor="">
                    Cctv
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="no">No</option>
                      <option value="yes">yes</option>
                      <option value="24/7">24/7</option>
                    </select>
                  </label>

                  <label htmlFor="">
                    Water-Supply
                    <select>
                      <option value="">--Select--</option>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                      <option value="24/7">24/7</option>
                    </select>
                  </label>
                </div>

                <div>
                  <label htmlFor="">
                    To-School
                    <select>
                      <option value="">--Select--</option>
                      <option value="05 min">05 Min</option>
                      <option value="10 min">10 Min</option>
                      <option value="15 min">15 Min</option>
                      <option value="20 min">20 Min</option>
                      <option value="25 min">25 Min</option>
                      <option value="30 min">30 Min</option>
                    </select>
                  </label>

                  <label>
                    Electricity
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                      <option value="24/7">24/7</option>
                    </select>
                  </label>
                </div>
              </fieldset>

              <section className={styles.image_sec}>
                <label htmlFor="">
                  Images <span>(jpg, jpeg)</span>{" "}
                </label>
                <section onClick={handlePickFile}>
                  <aside>Choose file</aside>{" "}
                  <span>{hostelDetails.images.length}</span>
                </section>
              </section>
              <input
                type="file"
                style={{ display: "none" }}
                ref={pickFile}
                name="images"
                onChange={handleOnChange}
                multiple
                accept=".jpg, .jpeg"
              />
              <nav className={styles.btn_nav}>
                <Button type={"submit"} children={"Add Hostel"} />
              </nav>
            </main>
          </section>
        </form>
      </div>
    </div>
  );
}

export default CreateHostel;
