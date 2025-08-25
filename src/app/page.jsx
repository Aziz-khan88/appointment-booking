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


import { ContactData, FeatureData, TrustData, ScheduleData, FaqData } from '@/src/app/home/data/data'



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
      <Faqs data={FaqData} />
      <Testimonials />
      <Contact data={ContactData} />
    </>
  )
}

export default Page