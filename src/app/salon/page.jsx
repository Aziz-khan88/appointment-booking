
import Banner from "@/src/app/industry/components/banner"
import Feature from '@/src/app/home/feature'
import Trust from '@/src/app/home/trust'
import Schedule from '@/src/app/home/schedule'
import Faqs from '@/src/app/home/faqs'
import Content from "@/src/app/industry/components/content"
import IMG01 from "media/images/industry/salon/Img01.webp"
import IMG02 from "media/images/industry/salon/Img02.webp"
import IMG03 from "media/images/industry/salon/Img03.webp"
import Quickly from "@/src/app/industry/components/quickly"


const data1 = {
    title: "Keep up to date with patient scheduling software.",
    txt: "Lorem ipsum dolor sit amet consectetur. Pharetra vestibulum a ligula lacus pharetra sed odio scelerisque id. Vivamus enim dictum eu at malesuada bibendum enim magna massa. Nibh.",
    img: IMG01.src
}
const data2 = {
    title: "Streamline administrative tasks to support your reception team.",
    txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
    img: IMG02.src
}
const data3 = {
    title: "Create personalized patient reminders.",
    txt: "Lorem ipsum dolor sit amet consectetur. Varius ac cursus libero pharetra lectus sit. Tortor id amet amet nunc sed feugiat lectus. Commodo egestas nibh vitae fames tincidunt eget volutpat. Cras fringilla justo condimentum aliquam cursus nibh ipsum diam fusce. Sodales et eget massa tincidunt varius condimentum tempor sed. Cursus nunc nunc ut vitae dignissim mattis ultrices mauris nibh volutpat. Amet nunc et faucibus.",
    img: IMG03.src
}
const Page = () => {
    return (
        <>
            <Banner />
            <Content data={data1} />
            <Feature />
            <Trust padding={true} />
            <Content data={data2} btn={false} />
            <Quickly />
            <Content data={data3} btn={false} />
            <Schedule />
            <Faqs />
        </>
    )
}

export default Page