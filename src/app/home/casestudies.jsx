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
        title: "How BrightSmile Dental Reduced No-Shows by 50% and Improved Patient Care",
        txt: "BrightSmile Dental faced daily challenges with missed appointments, long phone queues, and scheduling errors that disrupted patient care. By switching to Schedulifi’s dental scheduling software, the practice cut no-shows in half, saved staff over 8 hours a week in admin tasks, and gave patients the convenience of booking online anytime with instant confirmations and reminders.",
        img: IMG01.src,
        link: "dentist"
    },
    {
        title: "Effortless Appointment Scheduling for ",
        txt: "AutoFix Garage was overwhelmed by constant phone calls, double-booked mechanics, and last-minute cancellations that left bays empty. After switching to Schedulifi’s auto repair scheduling software, the shop saved 12 hours a week in admin time, cut no-shows by 47%, and gave customers 24/7 online booking with instant confirmations and reminders—keeping their service bays full and their team focused on repairs.",
        img: IMG01.src,
        link: "auto"
    }, {
        title: "How FitPro Gym Increased Class Attendance by 43% with Schedulifi",
        txt: "FitPro Gym, a busy fitness studio in Austin, struggled with missed classes, scheduling conflicts, and members unable to book after hours. After switching to Schedulifi’s fitness scheduling software, the gym reduced no-shows by 62%, increased class attendance by 43%, and saved 10+ hours a week in admin time—keeping trainers focused on members instead of managing calendars.",
        img: IMG01.src,
        link: "fitness"
    }
    , {
        title: "How Ellis & Partners Cut No-Shows by 46% and Freed Up 10 Hours a Week",
        txt: "Ellis & Partners, a busy family law firm in New York, was losing valuable billable hours to missed consultations and endless scheduling calls. After adopting Schedulifi’s legal scheduling software, the firm reduced no-shows by 46%, automated reminders for clients, and saved over 10 hours a week in administrative time—allowing attorneys to focus on cases, not calendars.",
        img: IMG01.src,
        link: "salon"
    }
    , {
        title: "How Central Valley University Reduced No-Shows by 54% with Schedulifi",
        txt: "Central Valley University was struggling with missed advising sessions, overloaded admin staff, and frustrated students who couldn’t book outside office hours. By implementing Schedulifi’s education scheduling software, the university reduced no-shows by 54%, saved 15+ hours a week in admin time, and gave students 24/7 access to advising, tutoring, and faculty office hours—boosting both efficiency and student satisfaction.",
        img: IMG01.src,
        link: "education"
    }
    , {
        title: "How Ellis & Partners Cut No-Shows by 46% and Freed Up 10 Hours a Week",
        txt: "Ellis & Partners, a busy family law firm in New York, was losing valuable billable hours to missed consultations and endless scheduling calls. After adopting Schedulifi’s legal scheduling software, the firm reduced no-shows by 46%, automated reminders for clients, and saved over 10 hours a week in administrative time—allowing attorneys to focus on cases, not calendars.",
        img: IMG01.src,
        link: "law"
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