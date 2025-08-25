import Banner from "@/src/app/pricing/components/banner"
import Schedule from '@/src/app/home/schedule'
import Faqs from '@/src/app/home/faqs'
import { FaqData, ScheduleData } from "@/src/app/pricing/data/data"



const Page = () => {
    return (
        <>
            <Banner />
            <Schedule data={ScheduleData} />
            <Faqs data={FaqData} />
        </>
    )
}

export default Page