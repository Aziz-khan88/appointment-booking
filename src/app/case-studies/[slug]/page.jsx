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


const data = [
    {
        slug: "dentist",
        banner: {
            subtitle: "Short problem + transformation summary.",
            title: "How Dr. James Increased Bookings by 200% with Slotify",
            txt: "Lorem ipsum dolor sit amet consectetur. Pulvinar mauris nulla fusce vitae risus tempus tortor et. Habitasse accumsan risus nullam est duis iaculis quis magnis. Cras sem diam amet tempus lectus.",
            bannerIMG: DentistBanner.src,
        },
        fold: [
            {
                title: "The Challenge",
                txt: (
                    <>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero
                            pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus.
                            Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras
                            fringilla justo condimentum nibh ipsum diam fusce. Sodales et
                            eget massa tincidunt varius condimentum tempor sed.
                        </p>
                        <ul className="contentStyle">
                            <li>Missed appointments?</li>
                            <li>Manual scheduling inefficiencies?</li>
                            <li>Poor user experience?</li>
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
                            Our platform automated the scheduling process, improved UX, and
                            reduced no-shows by 40%.
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
                title: "Implementation Journey",
                txt: (
                    <>
                        <p>Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
                        <p>Cras fringilla justo condimentum nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
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
            subtitle: "Short problem + transformation summary.",
            title: "How Dr. James Increased Bookings by 200% with Slotify",
            txt: "Lorem ipsum dolor sit amet consectetur. Pulvinar mauris nulla fusce vitae risus tempus tortor et. Habitasse accumsan risus nullam est duis iaculis quis magnis. Cras sem diam amet tempus lectus.",
            bannerIMG: AutoBanner.src,
        },
        fold: [
            {
                title: "The Challenge",
                txt: (
                    <>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero
                            pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus.
                            Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras
                            fringilla justo condimentum nibh ipsum diam fusce. Sodales et
                            eget massa tincidunt varius condimentum tempor sed.
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
                            Our platform automated the scheduling process, improved UX, and
                            reduced no-shows by 40%.
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
                title: "Implementation Journey",
                txt: (
                    <>
                        <p>Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
                        <p>Cras fringilla justo condimentum nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
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
            title: "How Dr. James Increased Bookings by 200% with Slotify",
            txt: "Lorem ipsum dolor sit amet consectetur. Pulvinar mauris nulla fusce vitae risus tempus tortor et. Habitasse accumsan risus nullam est duis iaculis quis magnis. Cras sem diam amet tempus lectus.",
            bannerIMG: FitnessBanner.src,
        },
        fold: [
            {
                title: "The Challenge",
                txt: (
                    <>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero
                            pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus.
                            Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras
                            fringilla justo condimentum nibh ipsum diam fusce. Sodales et
                            eget massa tincidunt varius condimentum tempor sed.
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
                            Our platform automated the scheduling process, improved UX, and
                            reduced no-shows by 40%.
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
                title: "Implementation Journey",
                txt: (
                    <>
                        <p>Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
                        <p>Cras fringilla justo condimentum nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
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
            subtitle: "Short problem + transformation summary.",
            title: "How Dr. James Increased Bookings by 200% with Slotify",
            txt: "Lorem ipsum dolor sit amet consectetur. Pulvinar mauris nulla fusce vitae risus tempus tortor et. Habitasse accumsan risus nullam est duis iaculis quis magnis. Cras sem diam amet tempus lectus.",
            bannerIMG: SalonBanner.src,
        },
        fold: [
            {
                title: "The Challenge",
                txt: (
                    <>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero
                            pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus.
                            Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras
                            fringilla justo condimentum nibh ipsum diam fusce. Sodales et
                            eget massa tincidunt varius condimentum tempor sed.
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
                            Our platform automated the scheduling process, improved UX, and
                            reduced no-shows by 40%.
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
                title: "Implementation Journey",
                txt: (
                    <>
                        <p>Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
                        <p>Cras fringilla justo condimentum nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed.</p>
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
            <Contact />
        </>
    );
}
