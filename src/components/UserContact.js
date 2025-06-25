import React, { useState } from "react";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const UserContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    state: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile must be 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!formData.state) newErrors.state = "Please select a state.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!\n\n" + JSON.stringify(formData, null, 2));
      setFormData({ name: "", mobile: "", email: "", state: "" });
      setErrors({});
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Enquiry Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}

        <input
          type="tel"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
          style={styles.input}
          maxLength={10}
        />
        {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select your state</option>
          {indianStates.map((state, idx) => (
            <option key={idx} value={state}>{state}</option>
          ))}
        </select>
        {errors.state && <p style={styles.error}>{errors.state}</p>}

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#1e3a8a";
            e.target.style.color = "#fff";
            e.target.style.cursor = "pointer";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#e0e0e0";
            e.target.style.color = "#000";
          }}
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    padding: "30px",
    maxWidth: "500px",
    margin: "30px auto",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  heading: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },
  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#e0e0e0",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    transition: "all 0.3s ease"
  },
  error: {
    color: "red",
    fontSize: "14px",
    margin: "0 -5px -10px 5px"
  }
};

export default UserContact;