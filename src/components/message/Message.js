import React, { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import styles from "./Message.module.css";

const messagesCollectionRef = collection(db, "Messages");

const Message = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send information to firebase
    try {
      const data = {
        name,
        email,
        message,
      };
      await addDoc(messagesCollectionRef, data);
      console.log("Message Received");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      console.log("Message Send Failed");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label className={styles.label}>Name</label>
          <h2> Contact </h2>
        </div>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h3> zachsm@alumni.stanford.edu </h3>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Email</label>
          <h2> Based In </h2>
        </div>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3> Cameron Park, CA </h3>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Message</label>
        </div>
        <div className={styles.row}>
          <textarea
            className={styles.textarea}
            rows="3"
            cols="30"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className={styles.row}>
          <input className={styles.button} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Message;
