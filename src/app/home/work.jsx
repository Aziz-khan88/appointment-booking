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
                                <Col md={6} lg={5} className="my-auto">
                                    <div className="subtitle">How its work</div>
                                    <h2>Scheduling Made Simple in 3 Easy Steps</h2>
                                    <p>Set your availability, share your link, and let clients book in seconds its that easy!</p>
                                    <div className={styles.flexButton}>
                                        <div className={styles.flexBtn}>
                                            <Link href="#">Start Free Trial</Link>
                                        </div>
                                        <div className={styles.flexBtn}>
                                            <Link href="#">Book a Demo</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className="offset-lg-1 my-auto">
                                    <div className={styles.workList}>
                                        <div className={styles.workItem}>
                                            <div className={styles.workIcon}>
                                                <BullestPoint />
                                            </div>
                                            <div className={styles.workContent}>
                                                <h5>Sign up & set availability</h5>
                                                <p>Create your account and define the time slots you're available for appointments.</p>
                                            </div>
                                        </div>
                                        <div className={styles.workItem}>
                                            <div className={styles.workIcon}>
                                                <BullestPoint />
                                            </div>
                                            <div className={styles.workContent}>
                                                <h5>Share your booking link</h5>
                                                <p>Send your personalized booking link to clients via email, social media, or your website.</p>
                                            </div>
                                        </div>
                                        <div className={styles.workItem}>
                                            <div className={styles.workIcon}>
                                                < BullestPoint />
                                            </div>
                                            <div className={styles.workContent}>
                                                <h5> Clients book, get reminders</h5>
                                                <p>Clients choose a time, and automated reminders help reduce no-shows.</p>
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