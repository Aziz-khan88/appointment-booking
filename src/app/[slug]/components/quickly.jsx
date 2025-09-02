import styles from "@/styles/industry/quickly.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"

const Quickly = ({ data }) => {
    return (
        <section className={styles.quicklySec}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto order-2 order-lg-1">
                        <h2>{data.title}</h2>
                        {data.txt}
                    </Col>
                    <Col md={6} lg={5} className="my-auto offset-lg-1 order-1 order-md-2">
                        <div className={styles.imgBox}>
                            <Image src={data.img} alt={data.title} fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Quickly