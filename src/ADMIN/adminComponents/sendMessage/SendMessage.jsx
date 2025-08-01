import axios from "axios";
import styles from "../sendMessage/sendMessage.module.scss";

export const SendMessage = async (number, message) => {
  const API_URL = "https://api.ng.termii.com/api/sms/send";
  const FROM = "StudyLodge";
  const API_KEYS =
    "TLxFKOKQXuhBFEmaeckNBIhKdCAFUbKYXYJAzffpPUgUciRwvblpBeQdsRRfnR";

  try {
    const response = await axios.post(`${API_URL}`, {
      to: number,
      from: FROM,
      sms: message,
      type: "plain",
      channel: "generic",
      api_key: API_KEYS,
    });
    if (response) {
      console.log(response?.data);
    }
  } catch (error) {
    if (error) {
      console.log(error.response?.data);
    }
  }
};

export const MessageBox = ({
  value,
  name,
  onChange,
  handleSendText,
  handleCancel,
  inputName,
  inputNumber,
  inputOnChange,
}) => {
  return (
    <section className={styles.sec_04}>
      <div>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => inputOnChange(e.target.value)}
          name={inputName}
        />
        <textarea
          value={value}
          name={name}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
        <article>
          <button onClick={handleSendText}>Send SMS</button>
          <button onClick={handleCancel}>Cancel</button>
        </article>
      </div>
    </section>
  );
};
