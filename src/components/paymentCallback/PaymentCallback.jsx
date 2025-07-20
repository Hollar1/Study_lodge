import React, { useEffect, useState } from "react";
import { useNavigate,} from "react-router-dom";
import Modal from "../modal/Modal";

function PaymentCallback() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
      navigate("/");
    }, 6000);
  }, []);
  return (
    <div>
      {showModal && (
        <div>
          <Modal
            header={"your payment was successful"}
            body={
              "We'll be in touch within 48 hours to guide you through the next step of your room rental."
            }
          />
        </div>
      )}
    </div>
  );
}

export default PaymentCallback;
