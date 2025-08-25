import styles from "@/styles/home/schedule.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"


const Schedule = ({ data }) => {
    return (
        <section className={`${styles.scheduleSec}`} style={{ backgroundImage: `url(${data.img})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} lg={9} className="m-auto text-center">
                        <div className={styles.scheduleBox}>
                            <h2>{data.title}</h2>
                            <p>{data.txt}</p>
                            <div className={styles.flexButton}>
                                <div className={styles.flexBtn}>
                                    <Link href="#">Start Free Trial</Link>
                                </div>
                                <div className={styles.flexBtn}>
                                    <Link href="#">Book a Demo</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Schedule