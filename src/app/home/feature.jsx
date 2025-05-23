"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowIcon, Booking, Calendar, Notifications, Reporting, Staff } from "@/src/app/app-constants"
import styles from "@/styles/home/feature.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link"
import Autoplay from 'embla-carousel-autoplay'


const OPTIONS = { loop: true, dragFree: true }


const Feature = ({ data }) => {
    const [activeTab, setActiveTab] = useState("Business");
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);
    const tabData = activeTab === "Business" ? data.Business : data.Clients;
    return (
        <section className={`p-100 ${styles.featureSec}`}>
            <Container>
                <Row>
                    <Col md={12} lg={10} xl={10} xxl={9} className="m-auto text-center" >
                        <h2>Powerful Features to Simplify Scheduling</h2>
                        <p>From easy bookings to automated reminders, our software is built to save your time and boost your productivity.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col className="p-0">
                        <ul className={styles.tabList}>
                            <li
                                className={activeTab === "Business" ? styles.activeTab : ""}
                                onClick={() => setActiveTab("Business")}
                            >
                                Business
                            </li>
                            <li
                                className={activeTab === "Clients" ? styles.activeTab : ""}
                                onClick={() => setActiveTab("Clients")}
                            >
                                Clients
                            </li>
                        </ul>
                        <div className={styles.tabData}>
                            <div className={styles.embla}>
                                <div className={styles.embla__viewport} ref={emblaRef}>
                                    <div className={styles.embla__container}>
                                        {tabData?.map((item, index) => (
                                            <div className={styles.embla__slide} key={index}>
                                                <div className={styles.featureItem}>
                                                    <div className={styles.featureIcon}>
                                                        {item.icon}
                                                    </div>
                                                    <div className={styles.featureTitle}>
                                                        {item.title}
                                                    </div>
                                                    <div className={styles.featuretxt}>
                                                        {item.txt}
                                                    </div>
                                                    <div className={styles.featureReadMore}>
                                                        <Link href="#">Read More <ArrowIcon /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Feature