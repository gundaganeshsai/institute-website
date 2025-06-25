import React, { useState } from "react";

const UserContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Message submitted! Thank you.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "auto"
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px"
  },
  textarea: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    height: "100px"
  },
  button: {
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default UserContact;
