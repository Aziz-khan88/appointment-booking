import styles from "@/styles/about/thanks.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const CallBack = () => {
    return (
        <section className={styles.thanksSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={8} className="m-auto text-center">
                        <h1>THANK YOU!</h1>
                        <p>Our team is reviewing your details and will get back to you shortly. If you want to explore more about what we do or just want to know a bit more, feel free to take a look around!</p>
              
                            <div className={styles.commonBtn}>
                                <Link href="/"><span></span>Back To Home</Link>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CallBack;
