import styles from "@/styles/about/value.module.scss"
import { Col, Container, Row } from "react-bootstrap"

const Values = () => {
    return (
        <section className={`${styles.valuesSec} pt-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="d-flex">
                        <div className={styles.valueBox}>
                            <h4>Mission</h4>
                            <p>To simplify appointment scheduling for businesses and their clients by providing a seamless, reliable, and user-friendly booking experience that saves time, reduces no-shows, and supports growth.</p>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex">
                        <div className={styles.valueBox}>
                            <h4>Vision</h4>
                            <p>To become the leading global platform for appointment management—empowering every business, from salons to clinics, to run smoother, smarter, and more connected than ever before.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Values