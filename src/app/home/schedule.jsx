import styles from "@/styles/home/schedule.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import bgImage from "media/images/ctaImage.webp"

const Schedule = () => {
    return (
        <section className={`${styles.scheduleSec}`} style={{ backgroundImage: `url(${bgImage.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} lg={8} className="m-auto text-center">
                        <div className={styles.scheduleBox}>
                            <h2>Ready to Take Control of Your Schedule?</h2>
                            <p>Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.</p>
                            <div className={styles.flexButton}>
                                <div className={styles.flexBtn}>
                                    <Link href="#">Start Free Trial</Link>
                                </div>
                                <div className={styles.flexBtn}>
                                    <Link href="#">Book a Demo</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Schedule