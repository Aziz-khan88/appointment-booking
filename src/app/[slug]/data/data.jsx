import { Booking, Calendar, Notifications, Reporting, Staff } from "@/src/app/app-constants"
// Dentist Images
import BannerDentist from "media/images/industry/dentist/BannerImg.webp"

import DentistImg1 from "media/images/industry/dentist/Img01.webp"
import DentistImg2 from "media/images/industry/dentist/Img02.webp"
import DentistImg3 from "media/images/industry/dentist/Img03.webp"



import QuicklyDentist from "media/images/industry/dentist/QuicklyImg.webp"
import ScheduleDentist from "media/images/industry/dentist/bannerCTA.webp"


// Fitness Images
import BannerFitness from "media/images/industry/fitness/BannerImg.webp"

import FitnessImg1 from "media/images/industry/fitness/Img01.webp"
import FitnessImg2 from "media/images/industry/fitness/Img02.webp"
import FitnessImg3 from "media/images/industry/fitness/Img03.webp"

import QuicklyFitness from "media/images/industry/fitness/QuicklyImg.webp"
import ScheduleFitness from "media/images/industry/fitness/bannerCTA.webp"


// Auto Images
import BannerAuto from "media/images/industry/auto/BannerImg.webp"

import AutoImg1 from "media/images/industry/auto/Img01.webp"
import AutoImg2 from "media/images/industry/auto/Img02.webp"
import AutoImg3 from "media/images/industry/auto/Img03.webp"

import QuicklyAuto from "media/images/industry/auto/QuicklyImg.webp"
import ScheduleAuto from "media/images/industry/auto/bannerCTA.webp"



// Salon Images
import BannerSalon from "media/images/industry/salon/BannerImg.webp"

import SalonImg1 from "media/images/industry/salon/Img01.webp"
import SalonImg2 from "media/images/industry/salon/Img02.webp"
import SalonImg3 from "media/images/industry/salon/Img03.webp"

import QuicklySalon from "media/images/industry/salon/QuicklyImg.webp"
import ScheduleSalon from "media/images/industry/salon/bannerCTA.webp"


// Law Images
import BannerLaw from "media/images/industry/law/BannerImg.webp"

import LawImg1 from "media/images/industry/law/Img01.webp"
import LawImg2 from "media/images/industry/law/Img02.webp"
import LawImg3 from "media/images/industry/law/Img03.webp"

import QuicklyLaw from "media/images/industry/law/QuicklyImg.webp"
import ScheduleLaw from "media/images/industry/law/bannerCTA.webp"


// Education Images
import BannerEducation from "media/images/industry/education/BannerImg.webp"

import EducationImg1 from "media/images/industry/education/Img01.webp"
import EducationImg2 from "media/images/industry/education/Img02.webp"
import EducationImg3 from "media/images/industry/education/Img03.webp"

import QuicklyEducation from "media/images/industry/education/QuicklyImg.webp"
import ScheduleEducation from "media/images/industry/education/bannerCTA.webp"


export const BlogData = [
    {
        slug: "dentist",
        tit: "About Schedulifi | Smart Appointment Booking Software Since 2019",
        description: "Since 2019, Schedulifi’s automated appointment scheduler has helped businesses simplify bookings, reduce no-shows, and deliver exceptional client experiences.",
        BannerData: {
            title: "Smarter Scheduling. Better Patient Care.",
            txt: "Your clinic deserves more than a calendar—it deserves a system that works for both staff and patients. With Schedulifi’s online appointment booking system, patients can book anytime while your team stays organized and stress-free.",
            img: BannerDentist.src
        },
        ContentSection1: {
            title: "Stay in Control with Smart Patient Scheduling",
            txt: (<>
                <p>Never miss a booking or follow-up again. Schedulifi’s online appointment booking system helps clinics and hospitals keep patient schedules accurate, organized, and always up to date.</p>
            </>
            ),
            img: DentistImg1.src
        },
        ContentSection2: {
            title: "Simplify Front Desk Operations Instantly",
            txt: (<>
                <p>Give your reception team the tools they need to work smarter, not harder. With Schedulifi’s online appointment booking system, clients can schedule anytime, reducing phone traffic and manual scheduling tasks.</p>
                <p>Our appointment booking software keeps calendars in sync across staff members, while the automated appointment scheduler sends confirmations and reminders without lifting a finger. Backed by our robust appointment management software, your reception team stays focused on delivering a great client experience instead of drowning in admin work.</p>
            </>),
            img: DentistImg2.src
        },
        ContentSection3: {
            title: "Turn Missed Appointments into Loyal Clients",
            txt: "Never let patients forget a visit again. With Schedulifi’s online appointment booking system, you can create customized reminders that strengthen trust and keep your schedule full. Our appointment booking software personalizes notifications by client, while the automated appointment scheduler sends confirmations, reschedules, and follow-ups without manual effort. Supported by Schedulifi’s advanced appointment management software, you’ll reduce no-shows, improve retention, and deliver care that feels personal every time.",
            img: DentistImg3.src
        },
        FeatureData: {
            title: "Powerful Features to Simplify Scheduling",
            desc: "From instant bookings to smart automation, Schedulifi’s online appointment booking system is designed to save time, reduce no-shows, and boost your productivity.",
            Business: [
                {
                    title: "Staff Management",
                    txt: "Manage your entire team in one place. Our appointment booking software lets you assign schedules, track availability, and prevent double-bookings—keeping your business running smoothly.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Never worry about missed appointments again. With an automated appointment scheduler, Schedulifi sends instant confirmations, timely reminders, and follow-ups that keep your clients engaged.",
                    icon: <Notifications />
                },
                {
                    title: "Reporting & Analytics",
                    txt: "Turn insights into growth. Our appointment management software tracks bookings, cancellations, and client trends—helping you make smarter business decisions backed by data.",
                    icon: <Reporting />
                },
                {
                    title: "Calendar Management",
                    txt: "Keep your schedule in perfect sync. With Schedulifi’s appointment management software, every booking updates in real time—across staff, devices, and locations. No overlaps, no confusion, just seamless scheduling you can rely on.",
                    icon: <Calendar />
                }
                ,
                {
                    title: "Online Booking",
                    txt: "Make it easy for clients to book anytime, anywhere. Our online appointment booking system gives customers 24/7 access, while the appointment booking software handles confirmations automatically. Pair it with our automated appointment scheduler, and you’ll never worry about missed calls or late arrivals again.",
                    icon: <Booking />
                }

            ],
            Clients: [
                {
                    title: "Calendar Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Calendar />
                },
                {
                    title: "Online Booking",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Booking />
                },
                {
                    title: "Staff Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Notifications />
                }
                ,
                {
                    title: "Reporting & Analytics",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Reporting />
                }

            ]
        },
        TrustData: {
            title: "Results That Speak for Themselves",
            txt: "Businesses worldwide trust Schedulifi’s online appointment booking system to simplify scheduling, boost growth, and turn predictable success into reality.",
            TrustValue: [
                {
                    title: "Successful Projects",
                    value: (<>250 <span>+</span></>),
                    txt: "Every project proves the power of Schedulifi’s appointment management software—delivering streamlined operations and smarter client scheduling from day one."
                },
                {
                    title: "Growth in Revenue",
                    value: (<>70 <span>%</span></>),
                    txt: "Companies using our automated appointment scheduler consistently cut no-shows and boost bookings, unlocking up to 70% business growth within the first year."
                },
                {
                    title: "Thriving Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "Over 500 service providers trust Schedulifi’s appointment booking software to keep their calendars full, their clients happy, and their businesses moving forward."
                }
            ]
        },
        QuicklyData: {
            title: "Instant Access to Patient Records",
            txt: "No more digging through files or chasing paperwork. With Schedulifi’s online appointment booking system, every patient detail—from visit history to treatment notes—is stored securely and accessible in seconds. Our appointment booking software links records directly to bookings, while the automated appointment scheduler ensures every appointment is tied to the right patient. With advanced appointment management software, your staff can provide faster, more personalized care and deliver the experience patients expect.",
            img: QuicklyDentist.src
        },
        ScheduleData: {
            title: "Ready to Book Smarter, Not Harder?",
            txt: "Transform how you manage time with Schedulifi’s online appointment booking system. From instant scheduling to automated reminders, our appointment booking software does the heavy lifting for you.",
            img: ScheduleDentist.src
        },
        FaqData: {
            subtitle: "FAQs",
            title: "Frequently Asked Questions",
            txt: "",
            Fqaslist: [
                {
                    title: "What is Schedulifi?",
                    txt: "Schedulifi is an all-in-one online appointment booking system that helps businesses simplify scheduling, reduce no-shows, and improve client experiences.",
                },
                {
                    title: "How does the automated reminder feature work?",
                    txt: "Our automated appointment scheduler sends SMS and email confirmations, reminders, and follow-ups so clients never miss their bookings.",
                },
                {
                    title: "Can I manage multiple staff schedules?",
                    txt: "Yes! Schedulifi’s appointment booking software allows you to assign staff, customize their availability, and avoid double-bookings with real-time syncing.",
                },
                {
                    title: "Is it easy for clients to book with me?",
                    txt: "Absolutely. With Schedulifi’s appointment management software, clients can book online 24/7 through a link, widget, or QR code.",
                },
                {
                    title: "Can I accept payments online?",
                    txt: "Yes. Schedulifi supports secure payment integrations, allowing clients to pay instantly at the time of booking.",
                },
                {
                    title: "Does Schedulifi integrate with my existing tools?",
                    txt: "Schedulifi syncs with Google Calendar, Zoom, and other business tools for seamless scheduling and virtual appointments.",
                },
                {
                    title: "Who can benefit from using Schedulifi?",
                    txt: "Schedulifi is built for doctors, salons, gyms, lawyers, garages, and more—making it the most versatile appointment booking software for service-based businesses.",
                },
            ],
        }
    },
    {
        slug: "fitness",
        tit: "Online Appointment Booking System | Automated Scheduling Software",
        desc: "Find answers to common questions about our online appointment booking system. Learn how our appointment booking software and automated scheduler simplify scheduling, reminders, and management.",
        BannerData: {
            title: "Smarter Scheduling for Stronger Results",
            txt: "Stop wasting time managing sign-ups manually. With Schedulifi’s online appointment booking system, your members can reserve classes, training sessions, or equipment instantly—24/7.",
            img: BannerFitness.src
        },
        ContentSection1: {
            title: "Stay on Top of Every Schedule",
            txt: (<><p>Never lose track of bookings again. With Schedulifi’s online appointment booking system, your business—whether a clinic, gym, or coaching center—can manage client schedules in real time.</p>
                <p>Our intuitive appointment booking software keeps calendars organized and accessible, while the automated appointment scheduler sends reminders and updates to reduce no-shows. Powered by advanced appointment management software, Schedulifi helps you deliver a seamless experience that keeps clients coming back.</p>
            </>),
            img: FitnessImg1.src
        },
        ContentSection2: {
            title: "Streamline Administrative Tasks for Your Service Desk",
            txt: (<><p>Running an auto repair shop means more than fixing cars—it means managing schedules, customer records, and front-desk operations. With Schedulifi’s online appointment booking system, you can reduce manual workload and keep your reception team focused on delivering a smoother customer experience.</p>
                <p>Our appointment booking software integrates seamlessly into your workflow, while the automated appointment scheduler ensures clients receive timely reminders. From job scheduling to invoicing, our appointment management software helps your shop run efficiently—so you spend less time on paperwork and more time on cars.</p>
            </>),
            img: FitnessImg2.src
        },
        ContentSection3: {
            title: "Send Personalized Member Reminders",
            txt: (<>
                <p>Keep your fitness studio running smoothly with automated, personalized reminders for your members. Whether it’s a class booking, a personal training session, or a renewal notice—our online appointment booking system ensures no one misses out.</p>
                <p>With our appointment booking software and automated appointment scheduler, you can reduce no-shows, increase attendance, and strengthen member loyalty. Plus, the appointment management software gives you full control to customize reminders that fit your brand and your clients’ needs.</p>
            </>),
            img: FitnessImg3.src
        },
        FeatureData: {
            title: "Powerful Features to Simplify Scheduling",
            desc: "From instant bookings to smart automation, Schedulifi’s online appointment booking system is designed to save time, reduce no-shows, and boost your productivity.",
            Business: [
                {
                    title: "Staff Management",
                    txt: "Manage your entire team in one place. Our appointment booking software lets you assign schedules, track availability, and prevent double-bookings—keeping your business running smoothly.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Never worry about missed appointments again. With an automated appointment scheduler, Schedulifi sends instant confirmations, timely reminders, and follow-ups that keep your clients engaged.",
                    icon: <Notifications />
                },
                {
                    title: "Reporting & Analytics",
                    txt: "Turn insights into growth. Our appointment management software tracks bookings, cancellations, and client trends—helping you make smarter business decisions backed by data.",
                    icon: <Reporting />
                },
                {
                    title: "Calendar Management",
                    txt: "Keep your schedule in perfect sync. With Schedulifi’s appointment management software, every booking updates in real time—across staff, devices, and locations. No overlaps, no confusion, just seamless scheduling you can rely on.",
                    icon: <Calendar />
                }
                ,
                {
                    title: "Online Booking",
                    txt: "Make it easy for clients to book anytime, anywhere. Our online appointment booking system gives customers 24/7 access, while the appointment booking software handles confirmations automatically. Pair it with our automated appointment scheduler, and you’ll never worry about missed calls or late arrivals again.",
                    icon: <Booking />
                }

            ],
            Clients: [
                {
                    title: "Calendar Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Calendar />
                },
                {
                    title: "Online Booking",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Booking />
                },
                {
                    title: "Staff Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Notifications />
                }
                ,
                {
                    title: "Reporting & Analytics",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Reporting />
                }

            ]
        },
        TrustData: {
            title: "Results That Speak for Themselves",
            txt: "Businesses worldwide trust Schedulifi’s online appointment booking system to simplify scheduling, boost growth, and turn predictable success into reality.",
            TrustValue: [
                {
                    title: "Successful Projects",
                    value: (<>250 <span>+</span></>),
                    txt: "Every project proves the power of Schedulifi’s appointment management software—delivering streamlined operations and smarter client scheduling from day one."
                },
                {
                    title: "Growth in Revenue",
                    value: (<>70 <span>%</span></>),
                    txt: "Companies using our automated appointment scheduler consistently cut no-shows and boost bookings, unlocking up to 70% business growth within the first year."
                },
                {
                    title: "Thriving Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "Over 500 service providers trust Schedulifi’s appointment booking software to keep their calendars full, their clients happy, and their businesses moving forward."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly Retrieve Member Information",
            txt: (<>
                <p>Running a fitness center isn’t just about training—it’s about creating seamless experiences for your members. With our online appointment booking system, you can instantly access client records, workout schedules, and session history. No more delays, no more missed details.</p>
                <p>Our appointment booking software keeps trainers and staff organized, while the automated appointment scheduler ensures your members never miss a class. Combined with our appointment management software, you’ll have all the tools to streamline operations, boost retention, and focus on what matters most—fitness results.</p>
            </>),
            img: QuicklyFitness.src
        },
        ScheduleData: {
            title: "Take Full Control of Your Time & Bookings",
            txt: "Never miss a client, class, or meeting again. With our online appointment booking system, you get seamless scheduling, automated reminders, and effortless management—all in one place.",
            img: ScheduleFitness.src
        },
        FaqData: {
            subtitle: "FAQs",
            title: "Frequently Asked Questions",
            txt: "Find quick answers to common questions about our online appointment booking system and how it helps your business.",
            Fqaslist: [
                {
                    title: "How does the online appointment booking system work?",
                    txt: "Our platform allows clients to schedule appointments 24/7. With automated confirmations, reminders, and rescheduling options, it eliminates back-and-forth calls.",
                },
                {
                    title: "Is your appointment booking software easy to set up?",
                    txt: " Yes! Our appointment management software is beginner-friendly. You can integrate it with your website, social media, or even share booking links directly with clients.",
                },
                {
                    title: "Can I send reminders automatically?",
                    txt: "Absolutely. The automated appointment scheduler ensures your clients never miss a session by sending SMS, email, or push notifications.",
                },
                {
                    title: "Does it support multiple team members or staff?",
                    txt: "Yes. You can manage staff availability, assign bookings, and track performance—all in one dashboard.",
                },
                {
                    title: "What industries can use this software?",
                    txt: "Our system works for gyms, clinics, salons, spas, consultants, coaches, and any service-based business.",
                },
                {
                    title: "Do I need technical skills to use it?",
                    txt: " Not at all. The platform is designed to be simple and intuitive. Our support team is always here if you need assistance.",
                },
                {
                    title: "Can I try it before buying?",
                    txt: "Yes! Start your free trial today and experience how our appointment booking software can transform your scheduling.",
                },

            ],
        }

    },
    {
        slug: "auto",
        tit: "Auto Repair Scheduling Software | Online Appointment Booking for Garages",
        desc: "Streamline your auto repair shop with Schedulifi’s Online Appointment Booking System. From client scheduling to payment reminders, our appointment management software helps mechanics reduce no-shows, save time, and focus on repairs.",

        BannerData: {
            title: "Smarter Scheduling for Better Care",
            txt: "Run your business with less stress and more efficiency. With Schedulifi’s Online Appointment Booking System, your clients can instantly book appointments, receive automated reminders, and enjoy a hassle-free experience.",
            img: BannerAuto.src
        },
        ContentSection1: {
            title: "Keep Up to Date with Smarter Scheduling Software",
            txt: (<>
                <p>Stay in control of your time with Schedulifi’s Online Appointment Booking System—built to make scheduling simple, accurate, and stress-free.</p>
            </>),
            img: AutoImg1.src
        },
        ContentSection2: {
            title: "Streamline Tasks. Strengthen Your Team.",
            txt: (<>
                <p>Free up your reception desk from endless calls, double bookings, and manual reminders. With Schedulifi’s Online Appointment Booking System, you can handle everything—appointments, payments, and patient details—in just a few clicks.</p>
                <p>Our appointment booking software automates scheduling, confirmations, and reminders—so your team spends less time on admin work and more time delivering exceptional service.</p>
            </>),
            img: AutoImg2.src
        },
        ContentSection3: {
            title: "Create Personalized Patient Reminders That Build Loyalty",
            txt: (<>
                <p>Never miss a chance to connect with your patients. With Schedulifi’s Online Appointment Booking System, you can send automated reminders via SMS or email—personalized to each patient’s needs.</p>
                <p>Our appointment booking software ensures clients stay updated about their appointments, reducing no-shows and cancellations. Plus, the automated appointment scheduler handles confirmations and follow-ups for you—saving valuable time for your reception team.</p>
            </>),
            img: AutoImg3.src
        },
        FeatureData: {
            title: "Powerful Features to Simplify Scheduling",
            desc: "From instant bookings to smart automation, Schedulifi’s online appointment booking system is designed to save time, reduce no-shows, and boost your productivity.",
            Business: [
                {
                    title: "Staff Management",
                    txt: "Manage your entire team in one place. Our appointment booking software lets you assign schedules, track availability, and prevent double-bookings—keeping your business running smoothly.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Never worry about missed appointments again. With an automated appointment scheduler, Schedulifi sends instant confirmations, timely reminders, and follow-ups that keep your clients engaged.",
                    icon: <Notifications />
                },
                {
                    title: "Reporting & Analytics",
                    txt: "Turn insights into growth. Our appointment management software tracks bookings, cancellations, and client trends—helping you make smarter business decisions backed by data.",
                    icon: <Reporting />
                },
                {
                    title: "Calendar Management",
                    txt: "Keep your schedule in perfect sync. With Schedulifi’s appointment management software, every booking updates in real time—across staff, devices, and locations. No overlaps, no confusion, just seamless scheduling you can rely on.",
                    icon: <Calendar />
                }
                ,
                {
                    title: "Online Booking",
                    txt: "Make it easy for clients to book anytime, anywhere. Our online appointment booking system gives customers 24/7 access, while the appointment booking software handles confirmations automatically. Pair it with our automated appointment scheduler, and you’ll never worry about missed calls or late arrivals again.",
                    icon: <Booking />
                }

            ],
            Clients: [
                {
                    title: "Calendar Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Calendar />
                },
                {
                    title: "Online Booking",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Booking />
                },
                {
                    title: "Staff Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Notifications />
                }
                ,
                {
                    title: "Reporting & Analytics",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Reporting />
                }

            ]
        },
        TrustData: {
            title: "Results That Speak for Themselves",
            txt: "Businesses worldwide trust Schedulifi’s online appointment booking system to simplify scheduling, boost growth, and turn predictable success into reality.",
            TrustValue: [
                {
                    title: "Successful Projects",
                    value: (<>250 <span>+</span></>),
                    txt: "Every project proves the power of Schedulifi’s appointment management software—delivering streamlined operations and smarter client scheduling from day one."
                },
                {
                    title: "Growth in Revenue",
                    value: (<>70 <span>%</span></>),
                    txt: "Companies using our automated appointment scheduler consistently cut no-shows and boost bookings, unlocking up to 70% business growth within the first year."
                },
                {
                    title: "Thriving Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "Over 500 service providers trust Schedulifi’s appointment booking software to keep their calendars full, their clients happy, and their businesses moving forward."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly Retrieve Patient Information Without the Hassle",
            txt: (<>
                <p>No more digging through files or wasting time searching. With Schedulifi’s Online Appointment Booking System, patient records, appointment history, and payment details are available instantly—right when you need them.</p>
                <p>Our appointment booking software securely stores and organizes client information, so your staff can focus on care instead of paperwork. Every update, from new bookings to cancellations, is synced in real time.</p>
            </>),
            img: QuicklyAuto.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Schedule?",
            txt: "Say goodbye to missed appointments and endless back-and-forth calls. With Schedulifi’s Online Appointment Booking System, you get effortless scheduling, automated reminders, and secure payments—all in one place.",
            img: ScheduleAuto.src
        },
        FaqData: {
            subtitle: "FAQs",
            title: "Frequently Asked Questions",
            txt: "",
            Fqaslist: [
                {
                    title: "What is Schedulifi and how does it work?",
                    txt: "Schedulifi is an Online Appointment Booking System that allows clients to instantly book, pay, and receive reminders. It simplifies scheduling while helping businesses reduce no-shows.",
                },
                {
                    title: "Can I manage multiple staff members with this software?",
                    txt: "Yes! Our appointment management software lets you assign staff, manage individual calendars, and streamline team schedules from one powerful dashboard.",
                },
                {
                    title: "How does Schedulifi reduce missed appointments?",
                    txt: "Our automated appointment scheduler sends SMS and email reminders to keep clients engaged and on time—boosting reliability and loyalty.",
                },
                {
                    title: "Does it integrate with other tools I use?",
                    txt: "Absolutely. Schedulifi syncs seamlessly with Google Calendar, Zoom, and secure payment systems, making it a versatile appointment booking software for any business.",
                },
                {
                    title: "Can clients pay online when booking?",
                    txt: "Yes. Clients can pay instantly at the time of booking, making the process convenient and ensuring confirmed appointments.",
                },
                {
                    title: "Who can benefit from using Schedulifi?",
                    txt: "Our platform is built for all service-based industries—clinics, salons, gyms, auto-repair shops, law firms, and more—making it the go-to appointment management software.",
                },
                {
                    title: "Is my business and client data secure with Schedulifi?",
                    txt: "Yes. We use industry-standard encryption and secure servers to protect sensitive data. With compliance-ready protection, our appointment booking software ensures your business and client information stays safe at all times.",
                },

            ],
        }
    },
    {
        slug: "salon",
        tit: "Schedulifi | Online Appointment Booking System for Businesses",
        desc: "Get in touch with the Schedulifi team to learn more about our appointment management software and how it can streamline your business scheduling.",
        BannerData: {
            title: "Smarter Scheduling. Stronger Connections.",
            txt: "Give your business the edge with Schedulifi’s online appointment booking system—built to simplify bookings, reduce no-shows, and create a smoother client journey.",
            img: BannerSalon.src
        },
        ContentSection1: {
            title: "Stay Ahead with Smarter Patient Scheduling",
            txt: (<>
                <p>Managing appointments doesn’t have to be complicated. With Schedulifi’s online appointment booking system, doctors, clinics, and hospitals can handle patient scheduling with ease. Take control with Schedulifi’s all-in-one appointment management software and give your patients the convenience they expect.</p>
            </>),
            img: SalonImg1.src
        },
        ContentSection2: {
            title: "Smarter Scheduling. Less Admin Work.",
            txt: (<>
                <p>Free your reception team from endless phone calls and manual scheduling. With Schedulifi’s online appointment booking system, clients can book anytime—leaving your staff free to focus on service, not paperwork.</p>
                <p>Our appointment booking software keeps calendars updated in real time, while the automated appointment scheduler handles confirmations, reschedules, and reminders automatically. Combined with Schedulifi’s powerful appointment management software, your front desk becomes more efficient, your clients stay happier, and your business runs smoother than ever.</p>
            </>),
            img: SalonImg2.src
        },
        ContentSection3: {
            title: "Personalized Reminders That Keep Clients Coming Back",
            txt: (<>
                <p>Turn missed appointments into loyal customers. With Schedulifi’s online appointment booking system, you can send automated, personalized reminders that make every client feel valued.</p>
                <p>Our smart appointment booking software ensures reminders go out at the right time, while the automated appointment scheduler handles confirmations, reschedules, and follow-ups—without adding extra work for your team. Backed by Schedulifi’s powerful appointment management software, you’ll reduce no-shows, improve retention, and grow your business effortlessly.</p>
            </>),
            img: SalonImg3.src
        },
        FeatureData: {
            title: "Powerful Features to Simplify Scheduling",
            desc: "From instant bookings to smart automation, Schedulifi’s online appointment booking system is designed to save time, reduce no-shows, and boost your productivity.",
            Business: [
                {
                    title: "Staff Management",
                    txt: "Manage your entire team in one place. Our appointment booking software lets you assign schedules, track availability, and prevent double-bookings—keeping your business running smoothly.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Never worry about missed appointments again. With an automated appointment scheduler, Schedulifi sends instant confirmations, timely reminders, and follow-ups that keep your clients engaged.",
                    icon: <Notifications />
                },
                {
                    title: "Reporting & Analytics",
                    txt: "Turn insights into growth. Our appointment management software tracks bookings, cancellations, and client trends—helping you make smarter business decisions backed by data.",
                    icon: <Reporting />
                },
                {
                    title: "Calendar Management",
                    txt: "Keep your schedule in perfect sync. With Schedulifi’s appointment management software, every booking updates in real time—across staff, devices, and locations. No overlaps, no confusion, just seamless scheduling you can rely on.",
                    icon: <Calendar />
                }
                ,
                {
                    title: "Online Booking",
                    txt: "Make it easy for clients to book anytime, anywhere. Our online appointment booking system gives customers 24/7 access, while the appointment booking software handles confirmations automatically. Pair it with our automated appointment scheduler, and you’ll never worry about missed calls or late arrivals again.",
                    icon: <Booking />
                }

            ],
            Clients: [
                {
                    title: "Calendar Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Calendar />
                },
                {
                    title: "Online Booking",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Booking />
                },
                {
                    title: "Staff Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Notifications />
                }
                ,
                {
                    title: "Reporting & Analytics",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Reporting />
                }

            ]
        },
        TrustData: {
            title: "Results That Speak for Themselves",
            txt: "Businesses worldwide trust Schedulifi’s online appointment booking system to simplify scheduling, boost growth, and turn predictable success into reality.",
            TrustValue: [
                {
                    title: "Successful Projects",
                    value: (<>250 <span>+</span></>),
                    txt: "Every project proves the power of Schedulifi’s appointment management software—delivering streamlined operations and smarter client scheduling from day one."
                },
                {
                    title: "Growth in Revenue",
                    value: (<>70 <span>%</span></>),
                    txt: "Companies using our automated appointment scheduler consistently cut no-shows and boost bookings, unlocking up to 70% business growth within the first year."
                },
                {
                    title: "Thriving Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "Over 500 service providers trust Schedulifi’s appointment booking software to keep their calendars full, their clients happy, and their businesses moving forward."
                }
            ]
        },
        QuicklyData: {
            title: "Access Client Records in Seconds",
            txt: (<>
                <p>Never waste time searching through files again. With Schedulifi’s online appointment booking system, all client details—past visits, notes, and preferences—are securely stored and instantly available.</p>
                <p>Our appointment booking software organizes history automatically, while the automated appointment scheduler ensures every booking is linked to the right client record. With Schedulifi’s advanced appointment management software, you’ll deliver personalized service faster and keep clients coming back.</p>
            </>),
            img: QuicklySalon.src
        },
        ScheduleData: {
            title: "Take Full Control of Your Schedule Today",
            txt: "Stop juggling calls and messy calendars. With Schedulifi’s online appointment booking system, every booking, reminder, and payment happens automatically—so you can focus on growing your business.",
            img: ScheduleSalon.src
        },
        FaqData: {
            subtitle: "FAQs",
            title: "Frequently Asked Questions",
            txt: "",
            Fqaslist: [
                {
                    title: "How does Schedulifi save me time?",
                    txt: "Schedulifi’s online appointment booking system automates scheduling, confirmations, and reminders—so you spend less time on calls and more time growing your business.",
                },
                {
                    title: "Can I manage multiple staff schedules?",
                    txt: "Yes! Our appointment booking software lets you set custom availability for each team member and prevents double-bookings with real-time updates.",
                },
                {
                    title: "What if my clients forget their appointments?",
                    txt: "Our automated appointment scheduler sends personalized SMS and email reminders, reducing no-shows by up to 70%.",
                },
                {
                    title: "Is it easy for clients to book with me?",
                    txt: "Absolutely. With 24/7 access via link, widget, or QR code, our appointment management software makes booking effortless for your clients.",
                },
                {
                    title: "Does Schedulifi integrate with my calendar?",
                    txt: "Yes! Schedulifi syncs with Google Calendar and other tools so you never miss a booking or double-schedule.",
                },
                {
                    title: "Can I accept payments online?",
                    txt: "Definitely. Schedulifi allows secure online payments with instant confirmations—making booking and billing seamless.",
                },
                {
                    title: "Who can benefit from Schedulifi?",
                    txt: "Our platform is designed for doctors, salons, gyms, lawyers, garages, and more—making it the most versatile appointment booking software for service-based businesses.",
                },

            ],
        }

    },
    {
        slug: "law",
        tit: "Smart Online Appointment Booking System for Law Firms",
        desc: "From client consultations to court prep, our appointment management software ensures your law firm runs smoothly. Book, manage, and automate all in one platform.",
        BannerData: {
            title: "Smarter Scheduling for Legal Professionals",
            txt: "Take the stress out of managing client meetings, hearings, and consultations with our Online Appointment Booking System. Whether you’re a solo attorney or part of a large firm, our appointment booking software helps you streamline client scheduling, reduce no-shows, and free up valuable time to focus on winning cases.",
            img: BannerLaw.src
        },
        ContentSection1: {
            title: "Stay Organized with Smart Scheduling Software for Law Firms",
            txt: (<p>Managing client meetings, court appearances, and consultations doesn’t have to be chaotic. Our Online Appointment Booking System helps your law firm stay on track with automated scheduling, reminders, and easy rescheduling options—all in one place.</p>),
            img: LawImg1.src
        },
        ContentSection2: {
            title: "Streamline Legal Administrative Tasks with Smarter Tools",
            txt: (<>
                <p>Juggling client calls, meetings, and case files doesn’t have to overwhelm your staff. Our Online Appointment Booking System is designed to reduce administrative load, giving your reception team more time to focus on clients.</p>
            </>),
            img: LawImg2.src
        },
        ContentSection3: {
            title: "Create Personalized Patient Reminders That Work for You",
            txt: (<>
                <p>Never miss an appointment again. Our automated appointment scheduler ensures patients receive timely reminders through SMS or email, reducing no-shows and keeping your clinic running smoothly.</p>
                <p>Transform how your practice engages with patients — start using our Online Appointment Booking System today and give your patients the care and attention they deserve.</p>
            </>),
            img: LawImg3.src
        },
        FeatureData: {
            title: "Powerful Features to Simplify Scheduling",
            desc: "From instant bookings to smart automation, Schedulifi’s online appointment booking system is designed to save time, reduce no-shows, and boost your productivity.",
            Business: [
                {
                    title: "Staff Management",
                    txt: "Manage your entire team in one place. Our appointment booking software lets you assign schedules, track availability, and prevent double-bookings—keeping your business running smoothly.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Never worry about missed appointments again. With an automated appointment scheduler, Schedulifi sends instant confirmations, timely reminders, and follow-ups that keep your clients engaged",
                    icon: <Notifications />
                },
                {
                    title: "Reporting & Analytics",
                    txt: "Turn insights into growth. Our appointment management software tracks bookings, cancellations, and client trends—helping you make smarter business decisions backed by data.",
                    icon: <Reporting />
                },
                {
                    title: "Calendar Management",
                    txt: "Keep your schedule in perfect sync. With Schedulifi’s appointment management software, every booking updates in real time—across staff, devices, and locations. No overlaps, no confusion, just seamless scheduling you can rely on.",
                    icon: <Calendar />
                }
                ,
                {
                    title: "Online Booking",
                    txt: "Make it easy for clients to book anytime, anywhere. Our online appointment booking system gives customers 24/7 access, while the appointment booking software handles confirmations automatically. Pair it with our automated appointment scheduler, and you’ll never worry about missed calls or late arrivals again.",
                    icon: <Booking />
                }

            ],
            Clients: [
                {
                    title: "Calendar Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Calendar />
                },
                {
                    title: "Online Booking",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Booking />
                },
                {
                    title: "Staff Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Notifications />
                }
                ,
                {
                    title: "Reporting & Analytics",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Reporting />
                }

            ]
        },
        TrustData: {
            title: "Results That Speak for Themselves",
            txt: "Businesses worldwide trust Schedulifi’s online appointment booking system to simplify scheduling, boost growth, and turn predictable success into reality.",
            TrustValue: [
                {
                    title: "Successful Projects",
                    value: (<>250 <span>+</span></>),
                    txt: "Every project proves the power of Schedulifi’s appointment management software—delivering streamlined operations and smarter client scheduling from day one."
                },
                {
                    title: "Business Growth",
                    value: (<>70 <span>%</span></>),
                    txt: "Companies using our automated appointment scheduler consistently cut no-shows and boost bookings, unlocking up to 70% business growth within the first year."
                },
                {
                    title: "Thriving Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "Over 500 service providers trust Schedulifi’s appointment booking software to keep their calendars full, their clients happy, and their businesses moving forward."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly Retrieve Patient Information with Ease",
            txt: (<>
                <p>Stop wasting valuable time searching through files. With our Online Appointment Booking System and integrated appointment management software, you can instantly access and update patient records in one secure place.</p>
                <p>Our automated appointment scheduler not only books and tracks visits but also ensures all patient details are logged and accessible — empowering your staff to deliver faster, more personalized care.</p>
            </>),
            img: QuicklyLaw.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Schedule?",
            txt: "Simplify your workflow with our Online Appointment Booking System — designed to give you effortless booking, automated reminders, and complete scheduling freedom. Whether you manage a clinic, law firm, or business, our appointment management software ensures you never miss a beat.",
            img: ScheduleLaw.src
        },
        FaqData: {
            subtitle: "FAQs",
            title: "Frequently Asked Questions",
            txt: "Find answers to the most common queries about our Online Appointment Booking System and how it simplifies scheduling for every industry.",
            Fqaslist: [
                {
                    title: "What is an Online Appointment Booking System?",
                    txt: "Our platform is a modern appointment booking software that lets clients schedule services online, while businesses manage everything in one place with ease.",
                },
                {
                    title: "How does the Automated Appointment Scheduler work?",
                    txt: "The automated appointment scheduler sends reminders, updates, and confirmations—reducing no-shows and saving valuable admin time.",
                },
                {
                    title: "Can this software be used in healthcare, legal, or automotive industries?",
                    txt: "Yes! Our appointment management software is built for clinics, law firms, salons, auto repair shops, and more—customized to fit your industry.",
                },
                {
                    title: "Do I need technical expertise to set it up?",
                    txt: "Not at all. Our software is user-friendly and comes with step-by-step guidance. You can get started in minutes.",
                },
                {
                    title: "Does the system support recurring appointments?",
                    txt: "Yes. Our solution supports one-time, recurring, and group bookings with flexible scheduling options.",
                },
                {
                    title: "Can I send personalized reminders to clients?",
                    txt: "Absolutely. Use our system to send automated reminders, follow-ups, and custom messages to improve client engagement.",
                },
                {
                    title: "Is there a free trial available?",
                    txt: "Yes, you can try our appointment booking software free of charge and explore all features before committing.",
                },
            ],
        }

    },
    {
        slug: "education",
        tit: "Education Scheduling Software | Manage Classes, Students & Reminders",
        desc: "Keep students and teachers organized with smarter scheduling software. Manage classes, exams, reminders, and student information—all in one secure platform.",
        BannerData: {
            title: "Smarter Scheduling for Better Learning",
            txt: "From admissions counseling to faculty office hours, our appointment booking software helps schools, colleges, and universities simplify scheduling. With the Automated Appointment Scheduler, students can instantly reserve time slots, receive reminders, and stay organized—while administrators reduce manual work.",
            img: BannerEducation.src
        },
        ContentSection1: {
            title: "Keep up to date with student scheduling software.",
            txt: (<>
                <p>Manage classes, meetings, and academic sessions effortlessly. Our student scheduling software allows administrators, faculty, and students to stay connected with real-time updates, automated notifications, and seamless calendar integration.</p>
                <p>Whether it’s booking advising sessions, scheduling parent-teacher meetings, or managing course sign-ups, our platform ensures smooth coordination across your institution.</p>
            </>),
            img: EducationImg1.src
        },
        ContentSection2: {
            title: "Streamline administrative tasks to support your academic staff.",
            txt: (<>
                <p>Simplify the daily workload of your school or university staff with an all-in-one scheduling and management system. From handling admissions inquiries to tracking classroom bookings, our platform reduces paperwork and automates repetitive tasks.</p>
                <p>This means your teachers and administrators spend less time on manual processes—and more time creating meaningful student experiences.</p>
            </>),
            img: EducationImg2.src
        },
        ContentSection3: {
            title: "Create personalized student reminders.",
            txt: (<>
                <p>Never miss an important academic milestone again. From assignment deadlines and class schedules to exam dates and graduation prep, our platform sends personalized reminders tailored to each student’s journey.</p>
                <p>Automated notifications keep students organized while reducing the workload on faculty and staff—ensuring smoother communication and better academic outcomes.</p>
            </>),
            img: EducationImg3.src
        },
        FeatureData: {
            title: "Powerful Features to Simplify Scheduling",
            desc: "From instant bookings to smart automation, Schedulifi’s online appointment booking system is designed to save time, reduce no-shows, and boost your productivity.",
            Business: [
                {
                    title: "Staff Management",
                    txt: "Manage your entire team in one place. Our appointment booking software lets you assign schedules, track availability, and prevent double-bookings—keeping your business running smoothly.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Never worry about missed appointments again. With an automated appointment scheduler, Schedulifi sends instant confirmations, timely reminders, and follow-ups that keep your clients engaged.",
                    icon: <Notifications />
                },
                {
                    title: "Reporting & Analytics",
                    txt: "Turn insights into growth. Our appointment management software tracks bookings, cancellations, and client trends—helping you make smarter business decisions backed by data.",
                    icon: <Reporting />
                },
                {
                    title: "Calendar Management",
                    txt: "Keep your schedule in perfect sync. With Schedulifi’s appointment management software, every booking updates in real time—across staff, devices, and locations. No overlaps, no confusion, just seamless scheduling you can rely on.",
                    icon: <Calendar />
                }
                ,
                {
                    title: "Online Booking",
                    txt: "Make it easy for clients to book anytime, anywhere. Our online appointment booking system gives customers 24/7 access, while the appointment booking software handles confirmations automatically. Pair it with our automated appointment scheduler, and you’ll never worry about missed calls or late arrivals again.",
                    icon: <Booking />
                }

            ],
            Clients: [
                {
                    title: "Calendar Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Calendar />
                },
                {
                    title: "Online Booking",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Booking />
                },
                {
                    title: "Staff Management",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Staff />
                },
                {
                    title: "Notifications & Reminders",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Notifications />
                }
                ,
                {
                    title: "Reporting & Analytics",
                    txt: "Lorem ipsum dolor sit amet consectetur. Varius faucibus metus sed enim sit ultrices fusce elementum feugiat. In nulla in amet cursus. Dignissim tempor semper pharetra mi sollicitudin. Maecenas eget elementum amet eu.",
                    icon: <Reporting />
                }

            ]
        },
        TrustData: {
            title: "Results That Speak for Themselves",
            txt: "Businesses worldwide trust Schedulifi’s online appointment booking system to simplify scheduling, boost growth, and turn predictable success into reality.",
            TrustValue: [
                {
                    title: "Successful Projects",
                    value: (<>250 <span>+</span></>),
                    txt: "Every project proves the power of Schedulifi’s appointment management software—delivering streamlined operations and smarter client scheduling from day one."
                },
                {
                    title: "Growth in Revenue",
                    value: (<>70 <span>%</span></>),
                    txt: "Companies using our automated appointment scheduler consistently cut no-shows and boost bookings, unlocking up to 70% business growth within the first year."
                },
                {
                    title: "Thriving Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "Over 500 service providers trust Schedulifi’s appointment booking software to keep their calendars full, their clients happy, and their businesses moving forward."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly retrieve student information",
            txt: (<>
                <p>Access and manage student records in seconds—whether it’s attendance history, course enrollment, or academic performance. Our platform centralizes all student data, so teachers and administrators can easily retrieve details without the hassle of spreadsheets or paperwork.</p>
                <p>From admissions to graduation, every record is organized and available when you need it most—helping your institution stay efficient and student-focused.</p>
            </>),
            img: QuicklyEducation.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Academic Schedule?",
            txt: "Start your free trial today and experience effortless class scheduling, assignment reminders, and exam management—all in one powerful platform designed for schools, colleges, and universities.",
            img: ScheduleEducation.src
        },
        FaqData: {
            subtitle: "FAQs",
            title: "Frequently Asked Questions",
            txt: "",
            Fqaslist: [
                {
                    title: "How can this platform help students manage their schedules?",
                    txt: "Our platform automates class scheduling, reminders for assignments, and exam alerts so students stay organized and never miss important deadlines.",
                },
                {
                    title: "Can teachers and administrators also use the system?",
                    txt: "Yes! Teachers can manage lesson plans, send updates, and track student attendance, while administrators streamline academic calendars and events.",
                },
                {
                    title: "Is the software suitable for schools, colleges, and universities?",
                    txt: "Absolutely. Our platform is designed to scale, making it the perfect fit for schools, higher education institutions, and training centers.",
                },
                {
                    title: "Does it integrate with other learning tools?",
                    txt: "Yes. Our system integrates seamlessly with popular LMS platforms, email, and calendar tools for a smooth workflow.",
                },
                {
                    title: "Can parents access student schedules?",
                    txt: "Parents can receive updates on classes, exams, and important school events, ensuring full transparency and support for their child’s education.",
                },
                {
                    title: "Is the platform mobile-friendly?",
                    txt: "Yes. Students, teachers, and parents can access all features on smartphones, tablets, and desktops for convenience anywhere.",
                },
                {
                    title: "How easy is it to set up?",
                    txt: "Getting started takes only a few steps. Most institutions are fully up and running within a few days.",
                },

            ],
        }

    }
]















