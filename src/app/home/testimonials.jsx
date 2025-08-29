"use client"
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/home/testimonials.module.scss"
import Image from "next/image"
import { ArrowNew, StarIcon, TestQoute } from "@/src/app/app-constants"
import IMG01 from "media/images/clients/client01.webp"
import { Col, Container, Row } from "react-bootstrap"
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

const OPTIONS = { loop: true, duration: 30 }
const SLIDES = [
    {
        clientImg: IMG01.src,
        txt: "Before Schedulifi, our front desk was drowning in calls and missed appointments were costing us thousands every month. Now, patients book online in seconds, and automated reminders have cut our no-shows in half. It’s like having an extra staff member who never makes mistakes.",
        designation: "Dr. Angela Morris",
        star: 5,
    },
    {
        clientImg: IMG01.src,
        txt: "Running a salon means juggling dozens of bookings every day, and one missed appointment can throw everything off. Schedulifi has been a game-changer. Clients love the 24/7 booking, and we’ve seen a 40% increase in repeat appointments since switching.",
        designation: "Jasmine Lopez",
        star: 5,
    },
    {
        clientImg: IMG01.src,
        txt: "Our trainers used to spend hours managing schedules, and members couldn’t book after hours. With Schedulifi, classes fill up faster, no-shows are way down, and we’ve freed up 10+ hours a week. Now our team can focus on coaching, not calendars.",
        designation: "Mark Davis",
        star: 5,
    }

]

const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade(), Autoplay()])
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on("select", onSelect)
        onSelect()
    }, [emblaApi])

    const scrollToSlide = (index) => {
        if (!emblaApi) return
        emblaApi.scrollTo(index)
    }
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };

    return (
        <section className={`${styles.testimonialSec} p-100`}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>What Our Users Are Saying</h2>
                        <p>Real stories from businesses who simplified scheduling with us. </p>

                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {SLIDES.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.testimonialBox} >
                                                <div className={styles.testImg}>
                                                    <Image src={item.clientImg} alt="Testimonials Image" fill />
                                                </div>
                                                <TestQoute />
                                                <p>{item.txt}</p>
                                                <div className={styles.designation}>
                                                    {item.designation}
                                                    <div className={styles.starIcon}>
                                                        {[...Array(item.star)].map((_, i) => (
                                                            <StarIcon key={i} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className={styles.embla__dots}>
                                {SLIDES.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.embla__dot} ${index === selectedIndex ? styles.isActive : ''}`}
                                        onClick={() => scrollToSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <ArrowNew direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <ArrowNew direction="next" />
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials