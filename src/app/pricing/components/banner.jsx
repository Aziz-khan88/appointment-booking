import styles from "@/styles/about/value.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { CheckList } from "@/src/app/app-constants"

const Banner = () => {
    return (
        <section className={styles.pricingSec}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Pricing That Works for You</h1>
                        <p>Flexible plans for every stage of your business—no hidden fees, no surprises.</p>
                    </Col>
                </Row>
                <Row className="mt-md-2 mt-lg-3 mt-xl-4">
                    <Col md={4}>
                        <div className={styles.pricingBox}>
                            <h5>Free Plan</h5>
                            <p>Free for personal payments.</p>
                            <div className={styles.boxPrice}>$0<span>/month</span></div>
                            <div className={styles.boxTxt}>
                                <ul>
                                    <li>
                                        <div className={styles.iconBox}><div className={styles.iconBox}><CheckList /></div></div>
                                        Up to 200 appointments
                                    </li>
                                    <li><div className={styles.iconBox}><CheckList /></div>Accept payments</li>
                                    <li><div className={styles.iconBox}><CheckList /></div>Your custom Booking Page</li>
                                </ul>
                            </div>
                            <div className={styles.btnPrice}>
                                Get Free Plan
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.pricingBox}>
                            <h5>Advanced</h5>
                            <p>Minimal fees for advanced transactions</p>
                            <div className={styles.boxPrice}>$19<span>/month</span></div>
                            <div className={styles.boxTxt}>
                                <ul>
                                    <li><div className={styles.iconBox}><CheckList /></div>Up to 200 appointments</li>
                                    <li><div className={styles.iconBox}><CheckList /></div>Accept payments</li>
                                    <li><div className={styles.iconBox}><CheckList /></div>Your custom Booking Page</li>
                                    <li><div className={styles.iconBox}><CheckList /></div>iOS and Android apps</li>
                                </ul>
                            </div>
                            <div className={styles.btnPrice}>
                                Get Free Plan
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.pricingBox}>
                            <h5>Business</h5>
                            <p>Premium business transactions</p>
                            <div className={styles.boxPrice}>$29<span>/month</span></div>
                            <div className={styles.boxTxt}>
                                <ul>
                                    <li><div className={styles.iconBox}><CheckList /></div>Up to 200 appointments</li>
                                    <li><div className={styles.iconBox}><CheckList /></div>Accept payments</li>
                                    <li><div className={styles.iconBox}><CheckList /></div>Your custom Booking Page</li>
                                </ul>
                            </div>
                            <div className={styles.btnPrice}>
                                Get Free Plan
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner