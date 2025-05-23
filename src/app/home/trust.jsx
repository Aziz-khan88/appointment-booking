import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/trust.module.scss"

const Trust = ({ padding, data }) => {
    return (
        <section className={`${styles.trustSec} ${padding ? "p-100" : "pt-100"}`}>
            <Container>
                <Row>
                    <Col md={12} lg={9} className="m-auto text-center">
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                </Row>
                <Row className="mt-2 mt-lg-3 mt-xl-4">
                    {data.TrustValue.map((item, index) => (
                        <Col md={4} key={index} >
                            <div className={styles.resultBox}>
                                {item.value}
                                <div className={styles.resultName}>{item.title}</div>
                            </div>
                            <p>{item.txt}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Trust