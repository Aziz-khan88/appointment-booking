import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/trust.module.scss"

const Trust = ({ padding }) => {
    return (
        <section className={`${styles.trustSec} ${padding ? "p-100" : ""}`}>
            <Container>
                <Row>
                    <Col md={12} lg={9} className="m-auto text-center">
                        <h2>Trusted by Businesses. Backed by Results.</h2>
                        <p>From seamless bookings to increased client engagement, our numbers speak for themselves. Join a growing network of businesses streamlining their scheduling with ease.</p>
                    </Col>
                </Row>
                <Row className="mt-2 mt-lg-3 mt-xl-4">
                    <Col md={4} >
                        <div className={styles.resultBox}>
                            250 <span>+</span>
                            <div className={styles.resultName}>Projects Delivered</div>
                        </div>
                        <p>We’ve successfully completed over 250 projects and we’re just getting started!</p>
                    </Col>
                    <Col md={4}>
                        <div className={styles.resultBox}>
                            70 <span>%</span>
                            <div className={styles.resultName}>Business Growth</div>
                        </div>
                        <p>Our strategies have helped clients achieve up to 70% revenue growth in just one year!</p>
                    </Col>
                    <Col md={4}>
                        <div className={styles.resultBox}>
                            500 <span>+</span>
                            <div className={styles.resultName}>Happy Clients</div>
                        </div>
                        <p>More than 500 satisfied clients trust us to bring their ideas to life.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Trust