import styles from "@/styles/industry/quickly.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import IMG from "media/images/industry/salon/Img.webp"
import Image from "next/image"

const Quickly = () => {
    return (
        <section className={styles.quicklySec}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto order-2 order-lg-1">
                        <h2>Quickly retrieve patient information.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.</p>
                    </Col>
                    <Col md={6} lg={5} className="my-auto offset-lg-1 order-1 order-lg-2">
                        <div className={styles.imgBox}>
                            <Image src={IMG.src} alt="Image Content" fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Quickly