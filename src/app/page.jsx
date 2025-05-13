import Banner from '@/src/app/home/banner'
import Feature from '@/src/app/home/feature'
import Services from '@/src/app/home/services'
import Work from '@/src/app/home/work'
import Trust from '@/src/app/home/trust'
import Schedule from '@/src/app/home/schedule'
import Faqs from '@/src/app/home/faqs'
import Testimonials from '@/src/app/home/testimonials'
import Contact from '@/src/app/home/contact'

const Page = () => {
  return (
    <>
      <Banner />
      <Feature />
      <Services />
      <Work />
      <Trust />
      <Schedule />
      <Faqs />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Page