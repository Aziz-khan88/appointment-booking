import { notFound } from "next/navigation";
import Banner from "@/src/app/case-studies/[slug]/components/banner";
import Content from "@/src/app/case-studies/[slug]/components/content";
import Performance from "@/src/app/case-studies/[slug]/components/performance";
import Schedule from '@/src/app/home/schedule'
import Contact from '@/src/app/home/contact'

import DentistBanner from "media/images/casestudies/dentist/BannerImg.webp"
import Dentist1 from "media/images/casestudies/dentist/img01.webp";
import Dentist2 from "media/images/casestudies/dentist/img02.webp";
import Dentist3 from "media/images/casestudies/dentist/img03.webp";

import AutoBanner from "media/images/casestudies/auto/BannerImg.webp"
import Auto1 from "media/images/casestudies/auto/img01.webp";
import Auto2 from "media/images/casestudies/auto/img02.webp";
import Auto3 from "media/images/casestudies/auto/img03.webp";

import FitnessBanner from "media/images/casestudies/fitness/BannerImg.webp"
import Fitness1 from "media/images/casestudies/fitness/img01.webp";
import Fitness2 from "media/images/casestudies/fitness/img02.webp";
import Fitness3 from "media/images/casestudies/fitness/img03.webp";

import SalonBanner from "media/images/casestudies/salon/BannerImg.webp"
import Salon1 from "media/images/casestudies/salon/img01.webp";
import Salon2 from "media/images/casestudies/salon/img02.webp";
import Salon3 from "media/images/casestudies/salon/img03.webp";

import ScheduleEducation from "media/images/industry/education/bannerCTA.webp"
const ScheduleData = {
    title: "Ready to Take Control of Your Schedule?",
    txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
    img: ScheduleEducation.src
}

const ContactData = {
    title: "It’s Time to Schedule Smarter with Schedulifi ",
    desc: "Experience seamless appointment booking, automated reminders, and total calendar control with Schedulifi.",

};


const data = [
    {
        slug: "dentist",
        tit: "Case Study: Green Valley Clinic Cuts No-Shows by 52%",
        desc: "See how Green Valley Clinic used Schedulifi to reduce no-shows by 52%, save staff time, and boost patient satisfaction with smarter scheduling.",
        banner: {
            subtitle: "Short Problem + Big Transformation",
            title: "Green Valley Clinic Cut No-Shows 52% With Schedulifi",
            txt: "Green Valley Clinic, serving over 3,000 patients, faced scheduling chaos marked by endless calls, errors, and no-shows. After adopting Schedulifi’s online appointment booking system, the clinic reduced missed appointments, eased staff workload, and boosted patient satisfaction within just four months.",
            bannerIMG: DentistBanner.src,
        },
        fold: [
            {
                title: "The Challenge",
                txt: (
                    <>
                        <p>
                            Before Schedulifi, Green Valley Clinic struggled with:

                        </p>
                        <ul className="contentStyle">
                            <li>High no-show rates – Nearly 1 in 5 patients failed to show up, wasting valuable provider time.</li>
                            <li>Phone traffic overload – Staff spent hours each day answering calls, reducing focus on patient care.</li>
                            <li>Scheduling errors – Double bookings and gaps in the calendar caused inefficiency.</li>
                            <li>Limited patient convenience – Patients couldn’t schedule appointments after office hours.</li>
                        </ul>
                    </>
                ),
                img: Dentist1.src,
                position: "",
                btn: true
            },
            {
                title: "The Solution",
                txt: (
                    <>
                        <p>
                            Schedulifi enabled 24/7 booking, reminders, real-time sync, and secure patient record management.
                        </p>
                        <ul className="contentStyle">
                            <li>Integrated calendar sync</li>
                            <li>Responsive interface</li>
                            <li>Real-time notifications</li>
                        </ul>
                    </>
                ),
                img: Dentist2.src,
                position: "alternet",
                btn: true
            },
            {
                title: "Smooth Implementation",
                txt: (
                    <>
                        <p>Within months of using Schedulifi, the clinic saw a 52% drop in no-shows as automated reminders kept patients on time. Online self-booking boosted appointments by 30%, while staff saved 1.5 hours daily by avoiding constant calls and paperwork. Most importantly, satisfaction soared—82% of patients reported preferring the new booking system over traditional phone scheduling.</p>
                    </>
                ),
                img: Dentist3.src,
                position: "",
                btn: true
            },
        ],
        performance: {
            title: (<>Measuring our impact on your <span>performance.</span></>),
            performanceValue: [
                {
                    value: "200%",
                    title: "increase in bookings",
                },
                {
                    value: "30%",
                    title: "reduction in no-shows",
                },
                {
                    value: "$40",
                    title: "saved monthly in admin hours",
                }
            ]
        },
    },
    {
        slug: "auto",
        banner: {
            subtitle: "Short Problem + Big Transformation",
            title: "AutoFix Garage Saves Time with Schedulifi",
            txt: "AutoFix Garage in Denver eliminated booking chaos using Schedulifi. In just three months, they saved 12 weekly hours, reduced no-shows, improved scheduling efficiency, and increased customer retention significantly.",
            bannerIMG: AutoBanner.src,
        },
        fold: [
            {
                title: "The Challenge",
                txt: (
                    <>
                        <p>
                            Before Schedulifi, AutoFix Garage struggled with constant booking issues. Staff spent hours daily managing phone calls and reschedules, while missed after-hours opportunities cost the shop valuable business. Manual scheduling often resulted in double bookings between mechanics, causing frustrating delays. Furthermore, frequent no-shows and cancellations left service bays idle, resulting in lost revenue and reduced productivity.
                        </p>
                        <ul className="contentStyle">
                            <li>Missed appointments?</li>
                            <li>Manual scheduling inefficiencies?</li>
                            <li>Poor user experience?</li>
                        </ul>
                    </>
                ),
                img: Auto1.src,
                position: "",
                btn: true
            },
            {
                title: "The Solution",
                txt: (
                    <>
                        <p>
                            Schedulifi streamlined AutoFix’s bookings with 24/7 online scheduling, reminders, records, and payments.
                        </p>
                        <ul className="contentStyle">
                            <li>Integrated calendar sync</li>
                            <li>Responsive interface</li>
                            <li>Real-time notifications</li>
                        </ul>
                    </>
                ),
                img: Auto2.src,
                position: "alternet",
                btn: true
            },
            {
                title: "Smooth Implementation",
                txt: (
                    <>
                        <p>Within just three months, AutoFix Garage achieved measurable improvements. Automated scheduling saved the front desk more than 12 hours each week, while automated reminders cut no-shows by 47%. Online booking boosted overall appointments by 25%, with many customers reserving services during nights and weekends. </p>
                        <p>Most importantly, retention improved, as loyal customers praised the simple booking process and timely reminders that made scheduling effortless.</p>
                    </>
                ),
                img: Auto3.src,
                position: "",
                btn: true
            },
        ],
        performance: {
            title: (<>Measuring our impact on your <span>performance.</span></>),
            performanceValue: [
                {
                    value: "200%",
                    title: "increase in bookings",
                },
                {
                    value: "30%",
                    title: "reduction in no-shows",
                },
                {
                    value: "$40",
                    title: "saved monthly in admin hours",
                }
            ]
        },
    },
    {
        slug: "fitness",
        banner: {
            subtitle: "Short problem + transformation summary.",
            title: "How FitPro Gym Boosted Class Attendance 43% Using Schedulifi",
            txt: "FitPro Gym in Austin struggled with scheduling chaos and missed sessions. After adopting Schedulifi, they streamlined bookings, cut no-shows, and boosted attendance—improving both operations and member satisfaction.",
            bannerIMG: FitnessBanner.src,
        },
        fold: [
            {
                title: "The Challenge",
                txt: (
                    <>
                        <p>
                            Before Schedulifi, FitPro Gym faced constant challenges. Nearly one in four members missed their booked classes, staff wasted hours juggling phone calls and spreadsheets, and members grew frustrated without after-hours booking. Meanwhile, trainers struggled with double-bookings caused by the lack of real-time calendar syncing.
                        </p>
                        <ul className="contentStyle">
                            <li>Missed appointments?</li>
                            <li>Manual scheduling inefficiencies?</li>
                            <li>Poor user experience?</li>
                        </ul>
                    </>
                ),
                img: Fitness1.src,
                position: "",
                btn: true
            },
            {
                title: "The Solution",
                txt: (
                    <>
                        <p>
                            Schedulifi gave FitPro Gym a powerful, all-in-one scheduling solution. Members could book classes and personal training anytime through the website or app, while automated SMS and email reminders significantly reduced missed sessions. Real-time trainer scheduling eliminated double bookings, and instant access to member records allowed coaches to personalize every session. With a mobile-friendly experience, members enjoyed the freedom to book on the go, boosting both engagement and flexibility.
                        </p>
                        <ul className="contentStyle">
                            <li>Integrated calendar sync</li>
                            <li>Responsive interface</li>
                            <li>Real-time notifications</li>
                        </ul>
                    </>
                ),
                img: Fitness2.src,
                position: "alternet",
                btn: true
            },
            {
                title: "Smooth Implementation",
                txt: (
                    <>
                        <p>Within six months, FitPro Gym saw remarkable improvements. Class attendance increased by 43%, driven by timely reminders that kept members accountable. No-shows dropped by 62%, while staff saved over ten hours each week thanks to streamlined scheduling. Most importantly, retention strengthened, with 79% of members reporting they preferred Schedulifi’s modern booking system over the old manual process.</p>
                    </>
                ),
                img: Fitness3.src,
                position: "",
                btn: true
            },
        ],
        performance: {
            title: (<>Measuring our impact on your <span>performance.</span></>),
            performanceValue: [
                {
                    value: "200%",
                    title: "increase in bookings",
                },
                {
                    value: "30%",
                    title: "reduction in no-shows",
                },
                {
                    value: "$40",
                    title: "saved monthly in admin hours",
                }
            ]
        },
    },
    {
        slug: "salon",
        banner: {
            subtitle: "Short Problem + Big Transformation",
            title: "LuxeGlow Boosts Bookings Fast",
            txt: "LuxeGlow Salon, a boutique hair and beauty salon in Chicago, struggled with managing appointments across multiple stylists.Phone calls were constant, scheduling errors led to double bookings, and no- shows were eating into revenue.",
            bannerIMG: SalonBanner.src,
        },
        fold: [
            {
                title: "The Challenge",
                txt: (
                    <>
                        <p>
                            Before adopting Schedulifi, LuxeGlow struggled with frequent no-shows as clients often forgot appointments, wasting valuable time slots. The booking process was inefficient, with staff spending hours on calls and calendar updates. Mismanaged schedules caused double bookings, while limited booking hours meant clients lost convenience and opportunities.
                        </p>
                        <ul className="contentStyle">
                            <li>Missed appointments?</li>
                            <li>Manual scheduling inefficiencies?</li>
                            <li>Poor user experience?</li>
                        </ul>
                    </>
                ),
                img: Salon1.src,
                position: "",
                btn: true
            },
            {
                title: "The Solution",
                txt: (
                    <>
                        <p>
                            With Schedulifi, LuxeGlow gained a complete appointment management solution. Clients could book 24/7 via the salon’s website or Instagram, while automated SMS and email reminders drastically reduced no-shows. Real-time calendar sync eliminated double bookings, client records enabled personalized service, and integrated payments allowed online prepay to cut last-minute cancellations.
                        </p>
                        <ul className="contentStyle">
                            <li>Integrated calendar sync</li>
                            <li>Responsive interface</li>
                            <li>Real-time notifications</li>
                        </ul>
                    </>
                ),
                img: Salon2.src,
                position: "alternet",
                btn: true
            },
            {
                title: "Smooth Implementation",
                txt: (
                    <>
                        <p>After six months with Schedulifi, LuxeGlow saw remarkable results. No-shows dropped by 58% thanks to automated reminders, while bookings grew 40% as after-hours clients scheduled online. Staff saved two hours daily by reducing phone work, and personalized services from client histories boosted retention, increasing repeat bookings by 25%.</p>
                    </>
                ),
                img: Salon3.src,
                position: "",
                btn: true
            },
        ],
        performance: {
            title: (<>Measuring our impact on your <span>performance.</span></>),
            performanceValue: [
                {
                    value: "200%",
                    title: "increase in bookings",
                },
                {
                    value: "30%",
                    title: "reduction in no-shows",
                },
                {
                    value: "$40",
                    title: "saved monthly in admin hours",
                }
            ]
        },
    },
];

export default function CaseStudySlugPage({ params }) {
    const { slug } = params;
    const caseStudy = data.find((item) => item.slug === slug);
    if (!caseStudy) return notFound();

    return (
        <>
            <Banner data={caseStudy} />
            <Content data={caseStudy} />
            <Performance data={caseStudy} />
            <Schedule data={ScheduleData} />
            <Contact data={ContactData} />
        </>
    );
}
