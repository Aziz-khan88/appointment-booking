import styles from "@/styles/industry/content.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"


const Content = ({ data, btn, alternet }) => {
    return (
        <section className={`${styles.contentSec} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <Image src={data.img} alt="Image Content" width="753" height="433" />
                    </Col>
                    <Col md={6} lg={6} className="my-auto">
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                        {btn === false ?
                            ""
                            :
                            <div className="flexButton">
                                <div className="flexBtn">
                                    <Link href="#">Start Free Trial</Link>
                                </div>
                                <div className="flexBtn">
                                    <Link href="#">Book a Demo</Link>
                                </div>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Content