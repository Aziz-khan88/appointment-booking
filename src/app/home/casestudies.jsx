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
        title: "BrightSmile Dental Cuts No-Shows Efficiently",
        txt: "BrightSmile Dental faced daily challenges, including missed appointments, long phone queues, and scheduling errors, which disrupted patient care. By switching to Schedulifi’s dental scheduling software, the practice reduced no-shows by 50%, saved staff over eight hours weekly on administrative tasks, and offered patients the convenience of online booking at any time with instant confirmations and reminders.",
        img: IMG01.src,
        link: "dentist"
    },
    {
        title: "AutoFix Garage Boosts Efficiency with Schedulifi ",
        txt: "AutoFix Garage struggled with nonstop calls, double bookings, and costly no-shows. By adopting Schedulifi’s auto repair scheduling software, the shop reduced no-shows by 47% and saved 12 hours of weekly administrative work. Customers now enjoy 24/7 online booking, instant confirmations, and reminders, ensuring full-service bays and mechanics focused on quality repairs.",
        img: IMG01.src,
        link: "auto"
    }, {
        title: "FitPro Gym Boosts Attendance with Schedulifi",
        txt: "FitPro Gym in Austin faced constant struggles, including missed classes, scheduling conflicts, and frustrated members who were unable to book appointments after hours. By adopting our fitness scheduling software, the studio reduced no-shows by 62%, increased class attendance by 43%, and saved over 10 hours of weekly administrative work, freeing trainers to focus on clients instead of juggling calendars.",
        img: IMG01.src,
        link: "fitness"
    }
    , {
        title: "LuxeGlow Salon Thrives Using Schedulifi",
        txt: "LuxeGlow Salon faced constant no-shows and overwhelming front desk calls. After adopting Schedulifi’s salon scheduling software, they reduced no-shows by 58% and saved over two hours of admin work daily. Automated reminders and 24/7 online booking kept stylist chairs full, improved client satisfaction, and allowed staff to focus more on providing exceptional services.",
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