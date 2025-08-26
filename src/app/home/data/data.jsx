export const ContactData = {
    title: "It’s Time to Schedule Smarter with Schedulifi ",
    desc: "Experience seamless appointment booking, automated reminders, and total calendar control with Schedulifi.",

};
export const TrustData = {
    title: "Trusted by Industry Leaders, Loved by Users",
    txt: "A reliable appointment scheduling tool for service providers to manage bookings effortlessly and increase efficiency.",
    TrustValue: [
        {
            title: "Active Professionals",
            value: (<>350 <span>+</span></>),
            txt: "We’ve successfully completed over 250 projects and we’re just getting started!"
        },
        {
            title: "Fewer No-Shows",
            value: (<>74 <span>%</span></>),
            txt: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
        },
        {
            title: "5-Star Client Reviews",
            value: (<>500 <span>+</span></>),
            txt: "More than 500 satisfied clients trust us to bring their ideas to life."
        }
    ]
}
import { Booking, Calendar, Notifications, Reporting, Staff } from "@/src/app/app-constants"
export const FeatureData = {
    title: "Powerful Features to Simplify Appointment Booking ",
    desc: "Schedulifi is a scheduling software with smart features you need in a single online appointment booking app built for busy professionals",
    Business: [
        {
            title: "Real-Time Appointment Scheduling",
            txt: "Let's clients see open slots and book instantly, no back-and-forth. The booking system syncs with your calendar to prevent double bookings.",
            icon: <Calendar />
        },
        {
            title: "Automated Reminders & Notifications",
            txt: "Reduce no-shows with emails and text reminders. Automated appointment scheduler includes confirmations, rescheduling, and follow-ups.",
            icon: <Booking />
        },
        {
            title: "Appointment Records & History",
            txt: "Get easy access to past visits, notes, and client history. The appointment management software keeps everything organized and at your fingertips.",
            icon: <Staff />
        },
        {
            title: "Online Payments Integration",
            txt: "Accept secure online payments with ease. Schedulifi supports online payment processing, AI integration and instant confirmations of payment receipt",
            icon: <Notifications />
        }
        ,
        {
            title: "Multi-Channel Booking (Web & Mobile)",
            txt: "Seamless scheduling across web and mobile. Reach more clients with 24/7 booking access.",
            icon: <Reporting />
        }

    ],
    Clients: [
        {
            title: "Calendar Management",
            txt: "Stay organized with an integrated calendar in your scheduling software. Sync tasks, events, and appointments in real time across all devices for seamless planning.",
            icon: <Calendar />
        },
        {
            title: "Online Booking",
            txt: "Simplify the booking process with easy online scheduling through your automated appointment scheduler. Let clients book anytime, anywhere, with instant confirmations and maximum convenience.",
            icon: <Booking />
        },
        {
            title: "Staff Management",
            txt: "Manage your team effortlessly with appointment management software that simplifies scheduling, roles, and responsibilities. Keep everyone on the same page and ensure smooth collaboration for better productivity.",
            icon: <Staff />
        },
        {
            title: "Notifications & Reminders",
            txt: "Stay connected with an automated appointment scheduler that sends timely alerts, confirmations, and reminders. Never miss an important task or appointment again.",
            icon: <Notifications />
        }
        ,
        {
            title: "Reporting & Analytics",
            txt: "Gain valuable insights with powerful reporting tools built into your appointment management software. Track progress, monitor performance, and make data-driven decisions with ease.",
            icon: <Reporting />
        }

    ]
}

import ScheduleDentist from "media/images/industry/dentist/bannerCTA.webp"
export const ScheduleData = {
    title: "Take Charge of Your Schedule Today",
    txt: "Start your free trial today and watch how automation turns scheduling into your easiest task.",
    img: ScheduleDentist.src
}

export const FaqData = {
    subtitle: "FAQs",
    title: "All You Need to Know",
    txt: "",
    Fqaslist: [
        {
            title: "How does Schedulifi help reduce no-shows?",
            txt: "Schedulifi sends automated reminders via email or SMS, helping clients remember and show up for their appointments on time.",
        },
        {
            title: "Can I customize booking hours for multiple team members?",
            txt: "Yes, Schedulifi allows flexible scheduling for each team member, so everyone can manage their own availability with ease.",
        },
        {
            title: "Does Schedulifi integrate with Google Calendar and Zoom?",
            txt: "Absolutely. Schedulifi syncs with Google Calendar and integrates with Zoom for seamless virtual appointment setup.",
        },
        {
            title: "Is there a mobile app?",
            txt: "Yes, Schedulifi is accessible on mobile so you can manage appointments on the go—anytime, anywhere.",
        },
        {
            title: "How secure is my data?",
            txt: "Schedulifi uses industry-standard encryption and secure servers to protect all your business and customer data.",
        },
        {
            title: "Can I accept online payments?",
            txt: "Yes, Schedulifi supports secure online payments so clients can easily pay when booking.",
        },

    ],
};