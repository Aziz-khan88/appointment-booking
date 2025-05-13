"use client"
import { useEffect, useState } from "react";
import styles from "@/styles/home/services.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { HeadingSmall } from "@/src/app/app-constants";
import Img01 from "media/images/servicesBanner/services01.webp";
import Img02 from "media/images/servicesBanner/services02.webp";
import Img03 from "media/images/servicesBanner/services03.webp";
import Img04 from "media/images/servicesBanner/services04.webp";
import Image from "next/image";

const ServiceData = [
    {
        category: "Salon",
        title: "Booking That’s as Polished as Your Service",
        txt: "Make it easy for clients to book, reschedule, and pay—all while keeping your calendar organized and your chairs full.",
        image: Img02.src,
    },
    {
        category: "Gym",
        title: "Fitness Scheduling, Simplified",
        txt: "Let your members schedule classes, personal training, or equipment time with ease, so you can focus on gains, not admin.",
        image: Img04.src,
    },
    {
        category: "Hospital",
        title: "Smarter Scheduling for Healthcare",
        txt: "Streamline patient bookings, reduce wait times, and manage appointments with ease—so your staff can focus on care, not calendars.",
        image: Img01.src,
    },
    {
        category: "Garage",
        title: "Drive Efficiency in Every Booking",
        txt: "Let customers schedule services anytime, get reminders, and keep your bays full with a system designed for auto shops and garages.",
        image: Img03.src,
    }
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % ServiceData.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const activeService = ServiceData[activeIndex];

    return (
        <section className={styles.servicesSec}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={4} xl={4} className="my-auto">
                        <div className={styles.titleBox}>
                            <div className={styles.subTitle}>{activeService.category}</div>
                            <h3>{activeService.title}</h3>
                            <p>{activeService.txt}</p>
                            <div className="CommonBtn">
                                <Link href="#"> <span></span>Connect Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={7} xl={6} className="mt-auto offset-lg-1 offset-xl-2">
                        <div className={styles.listingBox}>
                            <h4>Tailored for <br />Every Industry <HeadingSmall /></h4>
                            <ul>
                                {ServiceData.map((item, index) => (
                                    <li key={index} onClick={() => setActiveIndex(index)} className={`${index === activeIndex ? styles.active : ''}`}>
                                        <div className={`${styles.servicesItem} `}>
                                            <span>{`0${index + 1}.`}</span>{item.category}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image
                src={activeService.image}
                fill
                alt={`${activeService.category} Image`}
                className={styles.bgImage}
            />
        </section>
    );
};

export default Services;
