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
        BannerData: {
            title: "Smarter Scheduling for Better Care",
            txt: "Empower your clinic with seamless appointment booking, automated reminders, and a smoother patient experience—so you can focus on what matters most: care.",
            img: BannerDentist.src
        },
        ContentSection1: {
            title: "Keep up to date with patient scheduling software.",
            txt: "Lorem ipsum dolor sit amet consectetur. Pharetra vestibulum a ligula lacus pharetra sed odio scelerisque id. Vivamus enim dictum eu at malesuada bibendum enim magna massa. Nibh.",
            img: DentistImg1.src
        },
        ContentSection2: {
            title: "Streamline administrative tasks to support your reception team.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: DentistImg2.src
        },
        ContentSection3: {
            title: "Create personalized patient reminders.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: DentistImg3.src
        },
        FeatureData: {
            Business: [
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
            title: "Trusted by Businesses. Backed by Results.",
            txt: "From seamless bookings to increased client engagement, our numbers speak for themselves. Join a growing network of businesses streamlining their scheduling with ease.",
            TrustValue: [
                {
                    title: "Projects Delivered",
                    value: (<>250 <span>+</span></>),
                    txt: "We’ve successfully completed over 250 projects and we’re just getting started!"
                },
                {
                    title: "Business Growth",
                    value: (<>70 <span>%</span></>),
                    txt: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
                },
                {
                    title: "Happy Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "More than 500 satisfied clients trust us to bring their ideas to life."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly retrieve patient information.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: QuicklyDentist.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Schedule?",
            txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
            img: ScheduleDentist.src
        }
    },
    {
        slug: "fitness",
        BannerData: {
            title: "Smarter Scheduling for Better Care",
            txt: "Empower your clinic with seamless appointment booking, automated reminders, and a smoother patient experience—so you can focus on what matters most: care.",
            img: BannerFitness.src
        },
        ContentSection1: {
            title: "Keep up to date with patient scheduling software.",
            txt: "Lorem ipsum dolor sit amet consectetur. Pharetra vestibulum a ligula lacus pharetra sed odio scelerisque id. Vivamus enim dictum eu at malesuada bibendum enim magna massa. Nibh.",
            img: FitnessImg1.src
        },
        ContentSection2: {
            title: "Streamline administrative tasks to support your reception team.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: FitnessImg2.src
        },
        ContentSection3: {
            title: "Create personalized patient reminders.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: FitnessImg3.src
        },
        FeatureData: {
            Business: [
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
            title: "Trusted by Businesses. Backed by Results.",
            txt: "From seamless bookings to increased client engagement, our numbers speak for themselves. Join a growing network of businesses streamlining their scheduling with ease.",
            TrustValue: [
                {
                    title: "Projects Delivered",
                    value: (<>250 <span>+</span></>),
                    txt: "We’ve successfully completed over 250 projects and we’re just getting started!"
                },
                {
                    title: "Business Growth",
                    value: (<>70 <span>%</span></>),
                    txt: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
                },
                {
                    title: "Happy Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "More than 500 satisfied clients trust us to bring their ideas to life."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly retrieve patient information.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: QuicklyFitness.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Schedule?",
            txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
            img: ScheduleFitness.src
        }

    },
    {
        slug: "auto",
        BannerData: {
            title: "Smarter Scheduling for Better Care",
            txt: "Empower your clinic with seamless appointment booking, automated reminders, and a smoother patient experience—so you can focus on what matters most: care.",
            img: BannerAuto.src
        },
        ContentSection1: {
            title: "Keep up to date with patient scheduling software.",
            txt: "Lorem ipsum dolor sit amet consectetur. Pharetra vestibulum a ligula lacus pharetra sed odio scelerisque id. Vivamus enim dictum eu at malesuada bibendum enim magna massa. Nibh.",
            img: AutoImg1.src
        },
        ContentSection2: {
            title: "Streamline administrative tasks to support your reception team.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: AutoImg2.src
        },
        ContentSection3: {
            title: "Create personalized patient reminders.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: AutoImg3.src
        },
        FeatureData: {
            Business: [
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
            title: "Trusted by Businesses. Backed by Results.",
            txt: "From seamless bookings to increased client engagement, our numbers speak for themselves. Join a growing network of businesses streamlining their scheduling with ease.",
            TrustValue: [
                {
                    title: "Projects Delivered",
                    value: (<>250 <span>+</span></>),
                    txt: "We’ve successfully completed over 250 projects and we’re just getting started!"
                },
                {
                    title: "Business Growth",
                    value: (<>70 <span>%</span></>),
                    txt: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
                },
                {
                    title: "Happy Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "More than 500 satisfied clients trust us to bring their ideas to life."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly retrieve patient information.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: QuicklyAuto.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Schedule?",
            txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
            img: ScheduleAuto.src
        }

    },
    {
        slug: "salon",
        BannerData: {
            title: "Smarter Scheduling for Better Care",
            txt: "Empower your clinic with seamless appointment booking, automated reminders, and a smoother patient experience—so you can focus on what matters most: care.",
            img: BannerSalon.src
        },
        ContentSection1: {
            title: "Keep up to date with patient scheduling software.",
            txt: "Lorem ipsum dolor sit amet consectetur. Pharetra vestibulum a ligula lacus pharetra sed odio scelerisque id. Vivamus enim dictum eu at malesuada bibendum enim magna massa. Nibh.",
            img: SalonImg1.src
        },
        ContentSection2: {
            title: "Streamline administrative tasks to support your reception team.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: SalonImg2.src
        },
        ContentSection3: {
            title: "Create personalized patient reminders.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: SalonImg3.src
        },
        FeatureData: {
            Business: [
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
            title: "Trusted by Businesses. Backed by Results.",
            txt: "From seamless bookings to increased client engagement, our numbers speak for themselves. Join a growing network of businesses streamlining their scheduling with ease.",
            TrustValue: [
                {
                    title: "Projects Delivered",
                    value: (<>250 <span>+</span></>),
                    txt: "We’ve successfully completed over 250 projects and we’re just getting started!"
                },
                {
                    title: "Business Growth",
                    value: (<>70 <span>%</span></>),
                    txt: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
                },
                {
                    title: "Happy Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "More than 500 satisfied clients trust us to bring their ideas to life."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly retrieve patient information.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: QuicklySalon.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Schedule?",
            txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
            img: ScheduleSalon.src
        }

    },
    {
        slug: "law",
        BannerData: {
            title: "Smarter Scheduling for Better Care",
            txt: "Empower your clinic with seamless appointment booking, automated reminders, and a smoother patient experience—so you can focus on what matters most: care.",
            img: BannerLaw.src
        },
        ContentSection1: {
            title: "Keep up to date with patient scheduling software.",
            txt: "Lorem ipsum dolor sit amet consectetur. Pharetra vestibulum a ligula lacus pharetra sed odio scelerisque id. Vivamus enim dictum eu at malesuada bibendum enim magna massa. Nibh.",
            img: LawImg1.src
        },
        ContentSection2: {
            title: "Streamline administrative tasks to support your reception team.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: LawImg2.src
        },
        ContentSection3: {
            title: "Create personalized patient reminders.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: LawImg3.src
        },
        FeatureData: {
            Business: [
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
            title: "Trusted by Businesses. Backed by Results.",
            txt: "From seamless bookings to increased client engagement, our numbers speak for themselves. Join a growing network of businesses streamlining their scheduling with ease.",
            TrustValue: [
                {
                    title: "Projects Delivered",
                    value: (<>250 <span>+</span></>),
                    txt: "We’ve successfully completed over 250 projects and we’re just getting started!"
                },
                {
                    title: "Business Growth",
                    value: (<>70 <span>%</span></>),
                    txt: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
                },
                {
                    title: "Happy Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "More than 500 satisfied clients trust us to bring their ideas to life."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly retrieve patient information.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: QuicklyLaw.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Schedule?",
            txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
            img: ScheduleLaw.src
        }

    },
    {
        slug: "education",
        BannerData: {
            title: "Smarter Scheduling for Better Care",
            txt: "Empower your clinic with seamless appointment booking, automated reminders, and a smoother patient experience—so you can focus on what matters most: care.",
            img: BannerEducation.src
        },
        ContentSection1: {
            title: "Keep up to date with patient scheduling software.",
            txt: "Lorem ipsum dolor sit amet consectetur. Pharetra vestibulum a ligula lacus pharetra sed odio scelerisque id. Vivamus enim dictum eu at malesuada bibendum enim magna massa. Nibh.",
            img: EducationImg1.src
        },
        ContentSection2: {
            title: "Streamline administrative tasks to support your reception team.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: EducationImg2.src
        },
        ContentSection3: {
            title: "Create personalized patient reminders.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: EducationImg3.src
        },
        FeatureData: {
            Business: [
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
            title: "Trusted by Businesses. Backed by Results.",
            txt: "From seamless bookings to increased client engagement, our numbers speak for themselves. Join a growing network of businesses streamlining their scheduling with ease.",
            TrustValue: [
                {
                    title: "Projects Delivered",
                    value: (<>250 <span>+</span></>),
                    txt: "We’ve successfully completed over 250 projects and we’re just getting started!"
                },
                {
                    title: "Business Growth",
                    value: (<>70 <span>%</span></>),
                    txt: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!"
                },
                {
                    title: "Happy Clients",
                    value: (<>500 <span>+</span></>),
                    txt: "More than 500 satisfied clients trust us to bring their ideas to life."
                }
            ]
        },
        QuicklyData: {
            title: "Quickly retrieve patient information.",
            txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
            img: QuicklyEducation.src
        },
        ScheduleData: {
            title: "Ready to Take Control of Your Schedule?",
            txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
            img: ScheduleEducation.src
        }

    }
]















