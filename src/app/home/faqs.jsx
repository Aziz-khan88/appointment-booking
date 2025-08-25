"use client"
import { useState } from "react";
import ImgBg from "media/images/testImage.webp"
import styles from "@/styles/home/faqs.module.scss"
import { Col, Container, Form, Row } from "react-bootstrap"
import { CrossIcon } from "../app-constants";
import Image from "next/image";
import Img01 from "media/images/test/img01.webp"
import Img02 from "media/images/test/img02.webp"
import Img03 from "media/images/test/img03.webp"

const Faqs = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className={`${styles.faqsSec} p-100`}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.faqsBox}>
                            <Row className={styles.faqsBoxWhite}>
                                <Col md={12} lg={10} xl={8} className="m-auto">
                                    <div className="subtitle center">{data.subtitle}</div>
                                    <h2>{data.title}</h2>
                                    <p>{data.txt}</p>
                                </Col>
                                <Col md={12} lg={10} xl={8} className="m-auto">
                                    <div className={styles.faqsMainBox}>
                                        {data.Fqaslist.map((items, index) => (
                                            <div className={`${styles.faqsListing} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                                <div
                                                    className={styles.faqsTitle}
                                                    onClick={() => toggleFaq(index)}
                                                >
                                                    <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                                        <CrossIcon />
                                                    </div>
                                                    {items.title}

                                                </div>
                                                <div className={styles.faqscontent}>
                                                    {items.txt}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                                <Col md={12} lg={10} xl={8} className="m-auto">
                                    <div className={styles.faqCtaSec} style={{ backgroundImage: `url(${ImgBg.src})` }}>
                                        <div className={styles.faqsImage}>
                                            <Image src={Img01.src} alt="Img01" width={42} height={42} />
                                            <Image src={Img02.src} alt="Img03" width={42} height={42} />
                                            <Image src={Img01.src} alt="Img02" width={42} height={42} />
                                            <Image src={Img03.src} alt="Img02" width={42} height={42} />
                                        </div>
                                        <h5>Still have questions?</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        <Form>
                                            <div className={styles.fromBox}>
                                                <input type="email" placeholder="Enter Your Email" required />
                                                <input type="submit" value="Submit" />
                                            </div>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faqs