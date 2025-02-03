import Banner from '../components/Banner'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Events from '../components/Events'
import PhotoGallery from '../components/PhotoGallery'

const HomePage = () => {
    return (
        <>
            <Banner />
            <Events />
            <Services />
            <PhotoGallery />
            <About />
            <Contact />

        </>
    )
}

export default HomePage