import Contact from '@/src/app/home/contact'
import Schedule from '@/src/app/home/schedule'
import Faqs from '@/src/app/home/faqs'
import Banner from '@/src/app/contact-us/components/banner'
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
            <Faqs />
        </>
    )
}

export default Page