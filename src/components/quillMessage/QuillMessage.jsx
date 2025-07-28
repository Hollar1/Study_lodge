import React from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import styles from "../quillMessage/quillMessage.module.scss";
import { useState } from "react";
import Button, { Button_B } from "../button/Button";


function QuillMessage({sendMessage,closeMessage

}) {
  const [text, setText] = useState(""); // This is the email body
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); // Email subject

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <div>
      <div>
        <section className={styles.sec_01}>
          <div>
            <ReactQuill
              value={text}
              modules={modules}
              onChange={setText}
              className={styles.quill}
            />
            <Button children={"SEND MESSAGE"} onClick={sendMessage} />
            <Button_B children={"CANCEL MESSAGE"} onClick={closeMessage}/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default QuillMessage;




