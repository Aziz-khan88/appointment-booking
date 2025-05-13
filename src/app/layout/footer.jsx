import styles from "@/styles/layout/footer.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { Facebook, FooterLogo, Instagram, Linkedin, Twitter } from "@/src/app/app-constants"

const Footer = () => {
    return (
        <section className={styles.footerSec}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col sm={3} md={4}>
                        <Link href="#" className={styles.footerLogo}>
                            <FooterLogo />
                        </Link>
                    </Col>
                    <Col sm={9} md={8} className="my-auto">
                        <div className={styles.footerMenu}>
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Industries</Link></li>
                                <li><Link href="#">Pricing</Link></li>
                                <li><Link href="#">Contact</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className={`${styles.newRow} h-100`} >
                    <Col sm={6} md={6} className="my-auto">
                        <ul className={styles.contactInfo}>
                            <li>
                                <div className={styles.title}>Phone</div>
                                <Link href="tel:+15097841847">+1 509 784 1847</Link>
                            </li>
                            <li>
                                <div className={styles.title}>Email</div>
                                <Link href="mailto:slotify@info.com">slotify@info.com</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} className="my-auto">
                        <div className={styles.footersocail}>
                            <ul>
                                <li><Link href="#"><Instagram /></Link></li>
                                <li><Link href="#"><Facebook /></Link></li>
                                <li><Link href="#"><Twitter /></Link></li>
                                <li><Link href="#"><Linkedin /></Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className={`${styles.copyrightRow} h-100`} >
                    <Col sm={6} md={6} className="my-auto">
                        <ul className={styles.usefullLink}>
                            <li>
                                <Link href="#">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="# ">Privacy Policy</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} className="my-auto">
                        <div className={styles.copyrightTxt}>
                            Copyright © 2025 Slotify.
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer