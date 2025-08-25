import styles from "@/styles/home/works.module.scss"
import { BullestPoint } from "../app-constants"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"

const Work = () => {
    return (
        <section className={`${styles.workSection} p-100`}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.workBox}>
                            <Row className={styles.workBoxWhite}>
                                <Col md={6} lg={6} className="my-auto">
                                    <div className="subtitle">How its work</div>
                                    <h2>Appointment Scheduling in 3 Easy Steps</h2>
                                    <p>Schedulifi makes appointment booking quick and hassle-free. Whether it’s a service, consultation, or session, clients can book in just a few clicks, saving time for both your business and your customers.</p>
                                    <div className={styles.flexButton}>
                                        <div className={styles.flexBtn}>
                                            <Link href="#">Start Booking</Link>
                                        </div>
                                        <div className={styles.flexBtn}>
                                            <Link href="#">Book a Demo</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="my-auto">
                                    <div className={styles.workList}>
                                        <div className={styles.workItem}>
                                            <div className={styles.workIcon}>
                                                <BullestPoint />
                                            </div>
                                            <div className={styles.workContent}>
                                                <h5>Sign Up & Set Availability</h5>
                                                <p>Add your working hours, staff members, and location, all from one dashboard.</p>
                                            </div>
                                        </div>
                                        <div className={styles.workItem}>
                                            <div className={styles.workIcon}>
                                                <BullestPoint />
                                            </div>
                                            <div className={styles.workContent}>
                                                <h5>Share Your Booking Link</h5>
                                                <p>Let clients book via link, website widget, or QR code.</p>
                                            </div>
                                        </div>
                                        <div className={styles.workItem}>
                                            <div className={styles.workIcon}>
                                                < BullestPoint />
                                            </div>
                                            <div className={styles.workContent}>
                                                <h5>Relax & Manage Automatically</h5>
                                                <p>Get notified instantly. Let Schedulifi handle reminders, reschedules, and follow-ups.</p>
                                            </div >
                                        </div >
                                    </div >
                                </Col >
                            </Row >
                        </div >
                    </Col >
                </Row >
            </Container >
        </section >
    )
}

export default Work