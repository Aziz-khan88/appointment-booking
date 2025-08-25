import Contact from '@/src/app/home/contact'
import Schedule from '@/src/app/home/schedule'
import Faqs from '@/src/app/home/faqs'
import Banner from '@/src/app/contact-us/components/banner'

import { ContactData, ScheduleData, FaqData } from "@/src/app/contact-us/data/data"

const Page = () => {
    return (
        <>
            <Banner data={ContactData} />
            <Schedule data={ScheduleData} />
            <Faqs data={FaqData} />
        </>
    )
}

export default Page