'use client'
import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { EducationIcon, GarageIcon, GymIcon, HospitalIcon, LawIcon, MainLogo, MenuClosed, MenuOpen, SalonIcon } from '@/src/app/app-constants'
import Link from "next/link"
import styles from "@/styles/layout/header.module.scss"

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
        if (menuActive) {
            document.body.classList.add('active')
        } else {
            document.body.classList.remove('active')
        }
    }, [menuActive])

    const handleMenuToggle = () => {
        setMenuActive(!menuActive)
    }


    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <section className={`${styles.headerSec} ${scrolled ? styles.active : ""}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} md={3} lg={4} className="my-auto">
                        <Link href="/" className={styles.mainLogo}>
                            <MainLogo />
                        </Link>
                    </Col>
                    <Col xs={6} md={9} lg={8} className="my-auto">
                        <div className={styles.menuIcon} onClick={handleMenuToggle}>
                            {menuActive ?
                                <MenuClosed />
                                :
                                <MenuOpen />
                            }
                        </div>
                        <ul className={`${styles.navigationMenu} ${menuActive ? styles.active : ''}`}>
                            <li>
                                <Link href="/" onClick={handleMenuToggle}>Home</Link>
                            </li>
                            <li>
                                <Link href="/about-us" onClick={handleMenuToggle}>About</Link>
                            </li>
                            <li>
                                <Link href="#">Industries</Link>
                                <div className={styles.megeMenu}>
                                    <div className={styles.menuList}>
                                        <div className={styles.menuItem} onClick={handleMenuToggle}>
                                            <SalonIcon />
                                            <Link href="/salon">Salon</Link>
                                        </div>
                                        <div className={styles.menuItem} onClick={handleMenuToggle}>
                                            <GarageIcon />
                                            <Link href="/auto">Auto</Link>
                                        </div>
                                        <div className={styles.menuItem} onClick={handleMenuToggle}>
                                            <HospitalIcon />
                                            <Link href="/dentist">Dentist</Link>
                                        </div>
                                        <div className={styles.menuItem} onClick={handleMenuToggle}>
                                            <LawIcon />
                                            <Link href="/law">Law</Link>
                                        </div>
                                        <div className={styles.menuItem} onClick={handleMenuToggle}>
                                            <GymIcon />
                                            <Link href="/fitness">Fitness</Link>
                                        </div>
                                        <div className={styles.menuItem} onClick={handleMenuToggle}>
                                            <EducationIcon />
                                            <Link href="/education">Education</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="/pricing" onClick={handleMenuToggle}>Pricing</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" onClick={handleMenuToggle}>Contact Us</Link>
                            </li>
                            <li>
                                <a href="#">+1 833 500 6007</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header