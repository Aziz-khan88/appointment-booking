"use client";

import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "@/styles/home/faqs.module.scss";

const MinimalEmailForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      recipient: email,
      name:"No Name",
      phone:"No Phone Number",
      brand_id: 4,
      website: typeof window !== "undefined" ? window.location.href : "",
      custom_data: {},
    };

    try {
      const response = await fetch(
        "https://api.infinitidigital.us/api/send-brandemail/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      let result;
      try {
        result = await response.json();
      } catch {
        const text = await response.text();
        console.error("Server returned non-JSON:", text);
        setStatus("Server error. Please try again later.");
        return;
      }

      if (response.ok) {
        setStatus("Email submitted successfully!");
        setEmail("");
      } else {
        console.error("API error:", result);
        setStatus("Failed to submit email. Try again later.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className={styles.fromBox}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </div>
      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </Form>
  );
};

export default MinimalEmailForm;
