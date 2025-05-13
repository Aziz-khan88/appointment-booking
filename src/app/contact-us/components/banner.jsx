import Contact from '@/src/app/home/contact'
import styles from "@/styles/about/about.module.scss"
const Banner = () => {
    return (
        <section className={styles.contactSec}>
            <Contact padding={true} />
        </section>
    )
}

export default Banner