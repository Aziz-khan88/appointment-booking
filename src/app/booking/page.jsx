"use client";
import styles from "@/styles/booking/booking.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import {
    ArrowNew,
    CalendarIcon,
    CameraIcon,
    ClockIcon,
    HeadingBar,
    LocationIcon,
} from "@/src/app/app-constants";

const availableSlots = {
    "2025-09-05": ["9:00 AM - 9:20 AM", "1:00 PM - 1:40 PM", "3:30 PM - 4:30 PM"],
    "2025-09-06": ["9:00 AM - 10:00 AM", "1:00 PM - 2:00 PM", "3:30 PM - 4:30 PM"],
    "2025-09-07": ["9:00 AM - 10:00 AM", "1:00 PM - 2:00 PM", "3:30 PM - 4:30 PM"],
    "2025-09-08": ["9:00 AM - 10:00 AM", "1:00 PM - 2:00 PM", "3:30 PM - 4:30 PM"],
    "2025-09-09": ["9:00 AM - 11:00 AM", "1:00 PM - 2:00 PM", "3:30 PM - 4:30 PM"],
};

const Page = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [step, setStep] = useState(1);
    const [location, setLocation] = useState("Loading...");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [bookedSlots, setBookedSlots] = useState({}); // { "Wed May 28 2025": ["9:00 AM - 9:20 AM"] }

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedSlot(null);
        setStep(1);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            date: selectedDate.toDateString(),
            time: selectedSlot,
            location: location,
            ...formData,
        };

        try {
            const response = await fetch("https://sheetdb.io/api/v1/qb2v3jjppty15", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: payload }),
            });

            if (response.ok) {
                alert("Booking submitted successfully!");
                setSelectedDate(null);
                setSelectedSlot(null);
                setStep(1);
                setFormData({ name: "", email: "", phone: "" });
                window.location.reload();
            } else {
                alert("Failed to submit booking.");

            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred while submitting.");
        }
    };

    const getDuration = (slot) => {
        if (!slot) return null;

        const [start, end] = slot.split(" - ");
        const toMinutes = (time) => {
            const [t, modifier] = time.split(" ");
            let [hours, minutes] = t.split(":").map(Number);
            if (modifier === "PM" && hours !== 12) hours += 12;
            if (modifier === "AM" && hours === 12) hours = 0;
            return hours * 60 + minutes;
        };

        const duration = toMinutes(end) - toMinutes(start);

        return duration % 60 === 0
            ? `${duration / 60} Hour${duration > 60 ? "s" : ""}`
            : `${duration} Minute${duration > 1 ? "s" : ""}`;
    };

    const formatSlotDateTime = (date, slot) => {
        if (!date || !slot) return null;
        return `${slot}, ${date.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })}`;
    };

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const res = await fetch("https://ipinfo.io/?token=229b1c3fa2e54c");
                if (!res.ok) throw new Error("API response not ok");
                const data = await res.json();
                setLocation(`${data.city}, ${data.country} (${data.timezone})`);
            } catch (err) {
                console.error("Failed to get location", err);
                setLocation("Unknown location");
            }
        };

        const fetchBookedSlots = async () => {
            try {
                const res = await fetch("https://sheetdb.io/api/v1/qb2v3jjppty15");
                const data = await res.json();
                const grouped = data.reduce((acc, entry) => {
                    const { date, time } = entry;
                    if (!acc[date]) acc[date] = [];
                    acc[date].push(time);
                    return acc;
                }, {});
                setBookedSlots(grouped);
            } catch (err) {
                console.error("Failed to fetch booked slots", err);
            }
        };

        fetchLocation();
        fetchBookedSlots();
    }, []);

    const slots = selectedDate ? availableSlots[formatDate(selectedDate)] || [] : [];
    const dateKey = selectedDate?.toDateString();
    const disabledSlots = dateKey ? bookedSlots[dateKey] || [] : [];

    return (
        <section className={styles.bookingSec}>
            <Container>
                <Row>
                    <Col md={12} lg={4}>
                        <h2>Time Picker <HeadingBar /></h2>
                        <ul className={styles.meetingPoints}>
                            <li><ClockIcon /> <span>{getDuration(selectedSlot) || "Select a time slot"}</span></li>
                            <li><CameraIcon /> <span>Web conferencing details provided upon confirmation.</span></li>
                            <li><CalendarIcon /> <span>{formatSlotDateTime(selectedDate, selectedSlot) || "Select a date and time"}</span></li>
                            <li><LocationIcon /> <span>{location}</span></li>
                        </ul>
                    </Col>

                    {step === 1 && (
                        <>
                            <Col md={6} lg={4}>
                                <h2>Select a Date<HeadingBar /></h2>
                                <Calendar
                                    onChange={handleDateChange}
                                    value={selectedDate}
                                    minDate={new Date()}
                                    maxDetail="month"
                                    showNavigation={true}
                                />
                            </Col>
                            <Col md={6} lg={4}>
                                {slots.length > 0 ? (
                                    <div className={styles.slotBox}>
                                        <div className={styles.titleCurrentDate}>
                                            {selectedDate.toDateString()}
                                        </div>
                                        {slots.map((slot, idx) => {
                                            const isDisabled = disabledSlots.includes(slot);
                                            const isSelected = selectedSlot === slot;
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`${styles.slotItem} ${isSelected ? styles.selected : ""} ${isDisabled ? styles.disabled : ""}`}
                                                >
                                                    <button
                                                        onClick={() => !isDisabled && setSelectedSlot(slot)}
                                                        className={styles.slotButton}
                                                        disabled={isDisabled}
                                                    >
                                                        {slot}
                                                    </button>
                                                    {isSelected && !isDisabled && (
                                                        <button onClick={() => setStep(2)} className={styles.nextButton}>
                                                            Next
                                                        </button>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <p className={styles.nodataFound}>No available slots for this date.</p>
                                )}
                            </Col>
                        </>
                    )}

                    {step === 2 && (
                        <Col md={6} lg={4}>
                            <div className={styles.titBack}>
                                <h2>Enter Your Details<HeadingBar /></h2>
                                <div className={styles.backBtn} onClick={() => setStep(1)}>
                                    <ArrowNew />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className={styles.fromSubmit}>
                                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
                                <p>By proceeding, you confirm that you have read and agree to Slotify Terms of Use and Privacy Notice.</p>
                                <div className={styles.btnFlex}>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default Page;
