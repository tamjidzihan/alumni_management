import AboutUs from '../../components/AboutUs/AboutUs'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'

const About = () => {
    return (
        <>
            <Breadcrumb pageName="About Us" />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    <AboutUs />
                </div>
            </div>
        </>
    )
}

export default About