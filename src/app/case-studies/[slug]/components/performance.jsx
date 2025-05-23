import styles from "@/styles/case-studies/performance.module.scss"
import { Col, Container, Row } from "react-bootstrap"

const Performance = ({ data }) => {
    return (
        <section className={styles.performanceSec}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.performanceBox}>
                            <div className={styles.performanceItem}>
                                <h4>{data.performance.title}</h4>
                            </div>
                            {data.performance.performanceValue.map((item, index) => (
                                <div className={styles.performanceItem} key={index}>
                                    <div className={styles.perftitle}>{item.value} <span>{item.title}</span></div>
                                </div>
                            ))
                            }

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Performance