import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { endpoints } from "../../utils/api";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styles from "../receiptPage/receiptPage.module.scss";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate, useSearchParams } from "react-router-dom";

function receiptPage() {
  const printRef = useRef();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [agentFeePayment, setAgentFeePayment] = useState(null);
  const [roomFeePayment, setRoomFeePayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullData, setFullData] = useState(null);
  // console.log(fullData)


  const [inspection_date, setInspection_date] = useState(null);
  const [inspection_time, setInspection_time] = useState(null);
  const date_time_replace =
    agentFeePayment?.booking?.inspection_date_time.replace("_", "  / Time: ");
  useEffect(() => {
    const dateSlice = date_time_replace?.slice(0, 11);
    const timeSlice = date_time_replace?.slice(-17);
    setInspection_date(dateSlice);
    setInspection_time(timeSlice);
  }, [date_time_replace]);
  const fetchUserDetails = async () => {
    const response = await axiosInstance.get(
      `${endpoints.get_A_UserProfile}${userId}`
    );
    if (response) {
      setRoomFeePayment(response.data?.hostel);
      setAgentFeePayment(response.data?.agentFeePayment);
      setFullData(response.data);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  setTimeout(() => {
    fetchUserDetails();
    setLoading(false);
  }, 2000);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const reference = searchParams.get("reference");
    const fetchPaymentDetails = async () => {
      const response = await axiosInstance.get(`${endpoints.verifyPayment}`, {
        params: {
          reference: reference,
        },
      });
    };
    fetchPaymentDetails();
  }, [searchParams]);

  const handleDownload = async () => {
    const element = printRef.current;
    // Apply a temporary scale style to reduce everything (fonts, spacing)
    element.style.transform = "scale(0.8)";
    element.style.transformOrigin = "top left";
    const canvas = await html2canvas(element, { scale: 3 });
    // Reset the scale to normal after capture
    element.style.transform = "";
    element.style.transformOrigin = "";
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdf = new jsPDF("p", "mm", [imgHeight, imgWidth]);
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("receipt.pdf");

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  };

  const handleUpdateRoomStatus = async () => {
    try {
      const roomId = agentFeePayment?.room?._id;

      const payload = {
        room_number: agentFeePayment?.room?.room_number,
        unit: agentFeePayment?.room?.unit,
        agent_fee: agentFeePayment?.room?.agent_fee,
        price: agentFeePayment?.room?.price,
        caution_fee: agentFeePayment?.room?.caution_fee,
        commission_fee: agentFeePayment?.room?.commission_fee,
        status: "booked",
        hostel: agentFeePayment?.hostel?._id,
      };

      const response = await axiosInstance.patch(
        `${endpoints.updateRoom}${roomId}`,
        payload
      );
      if (response) {
        // console.log(response.data);
      }
    } catch (error) {
      console.log("this is the error", error.response?.data?.message);
    }
  };

  useEffect(() => {
    if (agentFeePayment && roomFeePayment) {
      handleUpdateRoomStatus();
    }
  }, [agentFeePayment]);

  return (
    <div className={styles.parent_wrapper}>
      {loading && (
        <section className={styles.sec_05}>
          <div>Loading...</div>
          <p>
            Please make sure to download your receipt, it may be required to
            present as proof of payment.
          </p>
        </section>
      )}
      {agentFeePayment && roomFeePayment ? (
        <div>
          <div ref={printRef} className={styles.agentFee_wrapper}>
            <section className={styles.sec_01}>
              <header>
                <IoMdCheckmarkCircleOutline size={40} color="rgb(72,209,204)" />
                <h3>Thank you for your payment!</h3>
                <p>Your rent payment has been successfully completed.</p>
              </header>
            </section>
            <section className={styles.sec_02}>
              <header>
                <h3>Payment Summary</h3>
              </header>
              <article className={styles.article_01}>
                <div>
                  <p>Payment Status:</p>
                  <span className={styles.paymentStatus}>
                    {fullData?.roomPricePayment?.status}
                  </span>
                </div>
                <div>
                  <p>Payment For:</p>
                  <span className={styles.payment_purpose}>ROOM_RENT</span>
                </div>

                <div>
                  <p>Amount:</p>
                  <span className={styles.agentFee_amount}>
                    {fullData?.roomPricePayment?.amount?.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </span>
                </div>
              </article>
            </section>

            <section className={styles.sec_03}>
              <header>
                <h3>Rent Information</h3>
              </header>
              <article className={styles.article_02}>
                <div>
                  <p>Hostel Name:</p>
                  <span>{agentFeePayment?.hostel?.hostel_name}</span>
                </div>
                <div>
                  <p>Rented Apartment:</p>
                  <span> {agentFeePayment?.room?.room_number}</span>
                </div>
                <div>
                  <p>Unit Type:</p>
                  <span>{agentFeePayment?.room?.unit}</span>
                </div>
                <hr />
                <aside className={styles.article_04}>
                  <header>Hostel Address: </header>
                  <address>{agentFeePayment?.hostel?.address}</address>
                </aside>
                <hr />
              </article>
            </section>
            <section className={styles.sec_06}>
              <header>Important Notice!</header>
              <p>
                {" "}
                Dear{" "}
                <b>
                  {fullData.first_name} {fullData.last_name}
                </b>
                , Thank you for your payment. The room is now ready. Please
                contact the same agent who showed you the room to collect the
                key.
              </p>
              <p>
                {" "}
                Room rent due date and other details will be available in your
                account profile.
              </p>
              <p> Kind regards, Study Lodge Ltd.</p>
            </section>
          </div>
          <div className={styles.button_div}>
            <button onClick={handleDownload}>Download Receipt</button>
          </div>
        </div>
      ) : (
        <div>
          <div ref={printRef} className={styles.agentFee_wrapper}>
            <section className={styles.sec_01}>
              <header>
                <IoMdCheckmarkCircleOutline size={40} color="rgb(72,209,204)" />
                <h3>Thanks you for your payment!</h3>
                <p>
                  Your room inspection booking has been successfully completed.
                </p>
              </header>
            </section>

            <section className={styles.sec_02}>
              <header>
                <h3>Payment Summary</h3>
              </header>
              <article className={styles.article_01}>
                <div>
                  <p>Payment Status:</p>
                  <span className={styles.paymentStatus}>
                    {agentFeePayment?.status}
                  </span>
                </div>
                <div>
                  <p>Payment For:</p>
                  <span className={styles.payment_purpose}>
                    {agentFeePayment?.payment_type}
                  </span>
                </div>

                <div>
                  <p>Amount:</p>
                  <span className={styles.agentFee_amount}>
                    {agentFeePayment?.amount?.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </span>
                </div>
              </article>
            </section>

            <section className={styles.sec_03}>
              <header>
                <h3>Booking Information</h3>
              </header>
              <article className={styles.article_02}>
                <div>
                  <p>Hostel Name:</p>
                  <span>{agentFeePayment?.hostel?.hostel_name}</span>
                </div>
                <div>
                  <p>Apartment Booked:</p>
                  <span> {agentFeePayment?.room?.room_number}</span>
                </div>
                <div>
                  <p>Unit Type:</p>
                  <span>{agentFeePayment?.room?.unit}</span>
                </div>
                <hr />
                <aside className={styles.article_03}>
                  <header>Inspection Date & TIme</header>
                  <div>
                    <p>Date:</p>
                    <span>{inspection_date}</span>
                  </div>
                  <div>
                    <p>Time:</p>
                    <span>{inspection_time}</span>
                  </div>
                </aside>
                <hr />
                <aside className={styles.article_04}>
                  <header>Hostel Address: </header>
                  <address>{agentFeePayment?.hostel?.address}</address>
                </aside>
              </article>
            </section>

            <section className={styles.sec_04}>
              <p>
                Please ensure to arrive on time for your inspection. If you have
                any questions or need to make changes, feel free to contact our
                support team. Thanks 🙏
              </p>
            </section>
          </div>
          <div className={styles.button_div}>
            <button onClick={handleDownload}>Download Receipt</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default receiptPage;
