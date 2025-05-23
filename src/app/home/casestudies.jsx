"use client"
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/home/casestudies.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import IMG01 from "media/images/casestudies/caseImg02.webp"
import CaseBanner from "media/images/casestudies/caseBanner.webp"
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowNew } from '@/src/app/app-constants'

const OPTIONS = { loop: true, duration: 30 }

const SLIDES = [
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.",
        img: IMG01.src,
        link: "dentist"
    },
    {
        title: "Effortless Appointment Scheduling for ",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.",
        img: IMG01.src,
        link: "auto"
    }, {
        title: "Lorem ipsum dolor sit amet consectetur.",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.",
        img: IMG01.src,
        link: "fitness"
    }
    , {
        title: "Lorem ipsum dolor sit amet consectetur.",
        txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.",
        img: IMG01.src,
        link: "salon"
    }
]


const CaseStudies = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade(), Autoplay()]);
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`${styles.caseStudiesSec}`} style={{ backgroundImage: `url(${CaseBanner.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto">
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {SLIDES.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.caseContainer}>
                                                <div className={styles.caseContent}>
                                                    <div className="subtitle blur">Case Studies</div>
                                                    <h2>{item.title}</h2>
                                                    <p>{item.txt}</p>
                                                    <a href={`/case-studies/${item.link}`} className={styles.caseBtn}>View Full Case Study</a>
                                                    <div className={styles.embla_container}>
                                                        <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                                            <ArrowNew direction="prev" />
                                                        </div>
                                                        <div className={styles.embla_next} onClick={nextButtonHandler}>
                                                            <ArrowNew direction="next" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.caseImage}>
                                                    <Image src={item.img} alt="IMG01" width={630} height={615} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CaseStudies