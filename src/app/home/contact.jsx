"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import styles from "@/styles/home/contactfrom.module.scss";
import { Col, Container, Form, Row } from "react-bootstrap";

const Contact = ({ padding, data }) => {
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please agree to receive appointment confirmations and reminders.");
      return;
    }

    const payload = {
      recipient: formData.email,
      brand_id: 4,
      name: formData.name,
      phone: formData.phone,
      website: typeof window !== "undefined" ? window.location.href : "",
      custom_data: {
        subject: formData.subject,
        message: formData.message,
      },
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
        setStatus("Message sent successfully!");
        setTimeout(() => {
          router.push("/thank-you");
        }, 500);
      } else {
        console.error("API error:", result);
        setStatus("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className={`${styles.contactFormSec} ${padding ? "" : "p-100"}`}>
      <Container>
        <Row>
          <Col className="m-auto">
            <div className={styles.contactFormBox}>
              <h2>{data?.title}</h2>
              <p>{data?.desc}</p>
              <div className={styles.formContainer}>
                <Form onSubmit={handleSubmit}>
                  <div className={styles.formListing}>
                    <div className={styles.formItem}>
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formItem}>
                      <label>Contact Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formItem}>
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formItem}>
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.formArea}>
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className={styles.formCheckBox}>
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                      />
                      <span>
                        I acknowledge and agree to receive appointment confirmations and reminders.
                      </span>
                    </div>
                    <div className={styles.formsubmit}>
                      <input type="submit" value="Submit" name="Submit" />
                    </div>
                  </div>
                </Form>
                {status && <p style={{ marginTop: "10px" }}>{status}</p>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
