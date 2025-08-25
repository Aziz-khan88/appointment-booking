import styles from "@/styles/about/about.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { FlagIcon } from "@/src/app/app-constants"
import Image from "next/image"
import IMG01 from "media/images/about/Img01.webp"
import IMG02 from "media/images/about/Img02.webp"
import IMG03 from "media/images/about/Img03.webp"
import IMG04 from "media/images/about/Img04.webp"

const Banner = () => {
    return (
        <section className={styles.abtSection}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>Why We Do What We Do</h1>
                        <p>Smarter scheduling saves time and great service builds loyalty.</p>
                    </Col>
                </Row>
                <Row className="mt-md-2 mt-lg-3 mt-xl-5">
                    <Col sm={4} md={4} lg={3} >
                        <div className={styles.imgBox1}>
                            <div className={styles.imgItem}>
                                <div className={styles.icon}>
                                    <FlagIcon />
                                </div>
                                <p>We’ve been helping businesses book smarter since
                                    <span> 2019.</span></p>
                            </div>
                            <div className={styles.imgItem}>
                                <Image src={IMG01.src} alt="Img-01" fill />
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} md={4} lg={6}>
                        <div className={styles.imgBox2}>
                            <div className={styles.imgItem}>
                                <Image src={IMG02.src} alt="Img-02" fill />
                            </div>
                            <div className={styles.imgItem}>
                                <Image src={IMG03.src} alt="Img-03" fill />
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} md={4} lg={3}>
                        <div className={styles.imgBox3}>
                            <div className={styles.imgItem}>
                                <div className={styles.imgItem}>
                                    <Image src={IMG04.src} alt="Img-04" fill />
                                </div>
                            </div>
                            <div className={styles.imgItem}>
                                <h5>Smart Booking Starts Here<span>.</span></h5>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Banner