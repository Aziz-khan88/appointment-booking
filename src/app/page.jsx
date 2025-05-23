import Banner from '@/src/app/home/banner'
import Feature from '@/src/app/home/feature'
import Services from '@/src/app/home/services'
import Work from '@/src/app/home/work'
import Trust from '@/src/app/home/trust'
import Schedule from '@/src/app/home/schedule'
import Faqs from '@/src/app/home/faqs'
import Testimonials from '@/src/app/home/testimonials'
import Contact from '@/src/app/home/contact'
import CaseStudies from '@/src/app/home/casestudies'
import { Booking, Calendar, Notifications, Reporting, Staff } from "@/src/app/app-constants"
import ScheduleDentist from "media/images/industry/dentist/bannerCTA.webp"

const FeatureData = {
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
}
const TrustData = {
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
}
const ScheduleData = {
  title: "Ready to Take Control of Your Schedule?",
  txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
  img: ScheduleDentist.src
}
const Page = () => {
  return (
    <>
      <Banner />
      <Feature data={FeatureData} />
      <Services />
      <Work />
      <CaseStudies />
      <Trust data={TrustData} />
      <Schedule data={ScheduleData} />
      <Faqs />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Page