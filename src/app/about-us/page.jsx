import Banner from "@/src/app/about-us/components/banner"
import Schedule from '@/src/app/home/schedule'
import Values from "@/src/app/about-us/components/values"
import Faqs from '@/src/app/home/faqs'
import { FaqData } from "@/src/app/about-us/data/data"
import ScheduleEducation from "media/images/industry/education/bannerCTA.webp"

const ScheduleData = {
    title: "Take Charge of Your Time Today",
    txt: "Skip the endless calls and no-shows. Schedulifi’s Online Appointment Booking System puts bookings, payments, and reminders in one powerful platform.",
    img: ScheduleEducation.src
}
const Page = () => {
    return (
        <>
            <Banner />
            <Schedule data={ScheduleData} />
            <Values />
            <Faqs data={FaqData} />
        </>
    )
}

export default Page