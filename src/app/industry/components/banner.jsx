
import styles from "@/styles/industry/banner.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import BannerImg from "media/images/industry/BannerImg.webp"
import Link from "next/link"

const Banner = () => {
    return (
        <section className={styles.industryBanner}>
            <Container className="h-100">
                <Row className="h-100" >
                    <Col sm={7} md={7} lg={6} className="my-auto">
                        <h1>Smarter Scheduling for Better Care</h1>
                        <p>Empower your clinic with seamless appointment booking, automated reminders, and a smoother patient experience—so you can focus on what matters most: care.</p>
                        <div className="CommonBtn">
                            <Link href="#"> <span></span>Connect Now</Link>
                        </div>
                    </Col>
                    <Col sm={5} md={5} lg={5} className="my-auto offset-lg-1">
                        <div className={styles.bannerImg}>
                            <Image src={BannerImg.src} alt="Img Banner" fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner