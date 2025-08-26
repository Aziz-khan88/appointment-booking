import styles from "@/styles/home/contactfrom.module.scss"
import { Col, Container, Form, Row } from "react-bootstrap"

const Contact = ({ padding, data }) => {
    return (
        <section className={`${styles.contactFormSec} ${padding ? "" : "p-100"}`}>
            <Container>
                <Row>
                    <Col className="m-auto">
                        <div className={styles.contactFormBox}>
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                            <div className={styles.formContainer}>
                                <Form>
                                    <div className={styles.formListing}>
                                        <div className={styles.formItem}>
                                            <label>Your Name</label>
                                            <input type="text" required />
                                        </div>
                                        <div className={styles.formItem}>
                                            <label>Contact Email</label>
                                            <input type="email" required />
                                        </div>
                                        <div className={styles.formItem}>
                                            <label>Phone Number</label>
                                            <input type="tel" required />
                                        </div>
                                        <div className={styles.formItem}>
                                            <label>Subject</label>
                                            <input type="text" required />
                                        </div>
                                        <div className={styles.formArea}>
                                            <label>Message</label>
                                            <textarea name="msg"></textarea>
                                        </div>
                                        <div className={styles.formCheckBox}>
                                            <input type="checkbox" />
                                            <span>I acknowledge and agree to receive appointment confirmations and reminders.</span>
                                        </div>
                                        <div className={styles.formsubmit}>
                                            <input type="submit" value="Submit" name="Submit" />
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact