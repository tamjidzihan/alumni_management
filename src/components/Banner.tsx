import banner from '../assets/banner.jpg'
import BlurText from './BlurText';
import ShinyText from './ShinyText';

const Banner = () => {
    return (
        <>
            <section id='home' className="relative h-[600px] isolate flex flex-col justify-end overflow-hidden">
                <img src={banner} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 flex items-center px-6">
                    <div className="text-white max-w-xl md:ml-20 lg:ml-40">

                        <BlurText
                            text="Welcome to Grand Re-Union 2025"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className=" text-7xl mb-8"
                        />
                        <ShinyText text="Enquire Now" disabled={false} speed={2} className='custom-class' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner