"use client"
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/home/banner.module.scss"
import Fade from 'embla-carousel-fade'
import { Col, Container, Row } from "react-bootstrap"
import Autoplay from 'embla-carousel-autoplay'
import Slide1 from "media/images/homeBanner/slider01.webp"
import Slide2 from "media/images/homeBanner/slider02.webp"
import Slide3 from "media/images/homeBanner/slider03.webp"
import { HeadingBar } from '@/src/app/app-constants'
import Link from 'next/link'

const OPTIONS = { loop: true, duration: 30 }

const SLIDES = [
    {
        title: "Effortless Appointment Scheduling for Professionals Across Industries",
        txt: "Set up your services and team, show their availability, and start getting bookings around the clock—it's that simple.",
        img: Slide1.src,
    },
    {
        title: "Effortless Appointment Scheduling for Professionals Across Industries2",
        txt: "Set up your services and team, show their availability, and start getting bookings around the clock—it's that simple.",
        img: Slide2.src,
    }, {
        title: "Effortless Appointment Scheduling for Professionals Across Industries",
        txt: "Set up your services and team, show their availability, and start getting bookings around the clock—it's that simple.",
        img: Slide3.src,
    }
]

const Banner = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade(), Autoplay()])
    return (
        <section className={styles.BannerSec}>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {SLIDES.map((item, index) => (
                            <div className={styles.embla__slide} key={index} style={{ background: `url(${item.img})` }}>
                                <Container className="h-100">
                                    <Row className="h-100">
                                        <Col md={10} lg={9} xl={8} className="my-auto">
                                            <div className={styles.contentBox}>
                                                <h1>{item.title} <HeadingBar /></h1>
                                                <p>{item.txt}</p>
                                                <div className="CommonBtn">
                                                    <Link href="#"> <span></span>Connect Now</Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner