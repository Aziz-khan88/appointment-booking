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
        category: "Salons",
        title: "Appointment Scheduling for Beauty Professionals",
        txt: "Our appointment booking system for salons helps you manage bookings, reduce no-shows, and fill more seats every day.",
        image: Img02.src,
    },
    {
        category: "Gym",
        title: "Personal Training & Fitness Coaching Appointment Setting",
        txt: "Simplify personal training bookings with a fitness trainer appointment scheduling tool designed for gyms and studios.",
        image: Img04.src,
    },
    {
        category: "Dentist",
        title: "Appointment Booking System",
        txt: "Simplify appointment bookings with a system built for doctors, dentists, and hospitals. Offer real- time scheduling, secure payments, and automated notifications for patients.",
        image: Img01.src,
    },
    {
        category: "Garages",
        title: "Manage Vehicle Service Bookings",
        txt: "A booking system for Mechanics and Garages to reduce no-shows by automating reminders and making scheduling convenient for your clients.",
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
                                <Link href="#"> <span></span>Start Booking</Link>
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
