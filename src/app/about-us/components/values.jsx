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
                            <p>At Schedulifi, our mission is to simplify scheduling for every business with an online appointment booking system that works as hard as you do. By delivering a seamless, reliable, and client-friendly experience, our appointment booking software helps reduce no-shows, save time, and unlock new growth opportunities.</p>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex">
                        <div className={styles.valueBox}>
                            <h4>Vision</h4>
                            <p>Our vision is to redefine how businesses manage time by becoming the world’s most trusted appointment management software. From solo professionals to global enterprises, Schedulifi empowers every industry with an automated appointment scheduler that makes booking smarter, service smoother, and connections stronger than ever before.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Values