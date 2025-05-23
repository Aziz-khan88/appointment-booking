import styles from "@/styles/case-studies/content.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"


const Content = ({ data }) => {
    return (
        <>
            {data.fold.map((item, idx) => (
                <section className={`${styles.contentSec} p-100`} key={idx}>
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col md={6} lg={5} className={item.position === "alternet" ? "my-auto order-md-2 offset-lg-1" : "my-auto"}>
                                <div className={styles.imgBox}>
                                    <Image src={item.img} alt="Image Content" width={625} height={625} />
                                </div>
                            </Col>
                            <Col md={6} lg={6} className={item.position ? "my-auto  order-md-1" : "my-auto offset-lg-1"}>
                                <h2>{item.title}</h2>
                                <div className={styles.contentBox}>{item.txt}</div>
                                {item.btn === true ?
                                    <div className="flexButton">
                                        <div className="flexBtn">
                                            <Link href="#">Start Free Trial</Link>
                                        </div>
                                        <div className="flexBtn">
                                            <Link href="#">Book a Demo</Link>
                                        </div>
                                    </div>
                                    :
                                    ""
                                }
                            </Col>
                        </Row>
                    </Container>
                </section>
            ))
            }
        </>
    )
}

export default Content