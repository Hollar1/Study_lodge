import React, { useRef, useState } from "react";
import styles from "../updateHostel/updateHostel.module.scss";
import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import Modal from "../../components/modal/Modal";
import { useNavigate, useParams } from "react-router-dom";

function UpdateHostel() {
  const {hostel_ID}=useParams()
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
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

      fd.append("hostel_name", hostelDetails.hostel_name);
      fd.append("address", hostelDetails.address);
      fd.append("hostel_details","ola");
      hostelDetails.images.forEach((image) => {
        fd.append("images", image);
      });
      const response = await axiosInstance.patch(
        `${endpoints.updateHostel}${hostel_ID}`,
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
      }
    } finally {
      setShowSpinner(false);
    }
  };
  return (
    <div className={styles.parent_wrapper}>
      {showSpinner && <Spinner />}
      {showModal && <Modal body={"Hostel Created Successfully"} />}
      <div>
        <section className={styles.sec_01}>
          <header>Update Hostel</header>
        </section>

        <form onSubmit={handleAddHostel}>
          <section className={styles.sec_02}>
            <header>Hostel Information</header>
            <main>
              <div>
                <label htmlFor="">
                  Hostel Name
                  <input
                    className={styles.A}
                    type="text"
                    value={hostelDetails.hostel_name}
                    name="hostel_name"
                    onChange={handleOnChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Address
                  <input
                    type="text"
                    className={styles.A}
                    value={hostelDetails.address}
                    name="address"
                    onChange={handleOnChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Information
                  <textarea
                    disabled
                    className={styles.B}
                    type="text"
                    value={hostelDetails.hostel_details}
                    name="hostel_details"
                    onChange={handleOnChange}
                  />
                </label>
              </div>

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

export default UpdateHostel;
