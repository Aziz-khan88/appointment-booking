
import Banner from "@/src/app/[slug]/components/banner"
import Feature from '@/src/app/home/feature'
import Trust from '@/src/app/home/trust'
import Schedule from '@/src/app/home/schedule'
import Faqs from '@/src/app/home/faqs'
import Content from "@/src/app/[slug]/components/content"
import { BlogData } from "@/src/app/[slug]/data/data"
import Quickly from "./components/quickly"





const Page = async ({ params }) => {
    const { slug } = params;
    const industry = BlogData.find((item) => item.slug === slug);
    if (!industry) return <div>Industry not found</div>;


    return (
        <>
            <Banner data={industry.BannerData} />
            <Content data={industry.ContentSection1} />
            <Feature data={industry.FeatureData} />
            <Trust padding={true} data={industry.TrustData} />
            <Content data={industry.ContentSection2} btn={false} />
            <Quickly data={industry.QuicklyData} />
            <Content data={industry.ContentSection3} btn={false} />
            <Schedule data={industry.ScheduleData} />
            <Faqs />

        </>
    )
}

export default Page