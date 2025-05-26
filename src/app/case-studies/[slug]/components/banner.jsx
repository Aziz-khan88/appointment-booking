import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/case-studies/banner.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const Banner = ({ data }) => {
    return (
        <section className={styles.singleCaseSec}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <div className={styles.subtitle}>{data.banner.subtitle}</div>
                        <h1>{data.banner.title}</h1>
                        <p>{data.banner.txt}</p>
                        <div className="flexButton">
                            <div className="flexBtn">
                                <Link href="#">Start Free Trial</Link>
                            </div>
                            <div className="flexBtn">
                                <Link href="#">Book a Demo</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="my-auto text-center">
                        <Image src={data.banner.bannerIMG} alt="ImgBG" width={970} height={760} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner