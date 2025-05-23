
import styles from "@/styles/industry/banner.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"

const Banner = ({ data }) => {
    if (!data) return null;
    return (
        <section className={styles.industryBanner}>
            <Container className="h-100">
                <Row className="h-100" >
                    <Col sm={7} md={7} lg={6} className="my-auto">
                        <h1>{data.title}</h1>
                        <p>{data.txt}</p>
                        <div className="CommonBtn">
                            <Link href="#"> <span></span>Connect Now</Link>
                        </div>
                    </Col>
                    <Col sm={5} md={5} lg={5} className="my-auto offset-lg-1">
                        <div className={styles.bannerImg}>
                            <Image src={data.img} alt={data.title} fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner