import Banner from "@/src/app/about-us/components/banner"
import Schedule from '@/src/app/home/schedule'
import Values from "@/src/app/about-us/components/values"
import Faqs from '@/src/app/home/faqs'


import ScheduleEducation from "media/images/industry/education/bannerCTA.webp"
const ScheduleData = {
    title: "Ready to Take Control of Your Schedule?",
    txt: "Start your free trial today and experience effortless booking, reminders, and management all in one powerful platform built for every industry.",
    img: ScheduleEducation.src
}
const Page = () => {
    return (
        <>
            <Banner />
            <Schedule data={ScheduleData} />
            <Values />
            <Faqs />
        </>
    )
}

export default Page