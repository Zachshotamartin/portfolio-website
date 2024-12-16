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
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Message</label>
        <textarea
          rows="3"
          cols="30"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
      <div className={styles.info}>
        <h2> Contact </h2>
        <h3> zachsm@alumni.stanford.edu </h3>
        <h2> Based In </h2>
        <h3> Cameron Park, CA </h3>
      </div>
    </div>
  );
};

export default Message;
