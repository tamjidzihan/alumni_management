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
                            text="Providing Great Platforms for Alumni"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className=" text-7xl mb-8"
                        />
                        <ShinyText text="Enquire Now" disabled={false} speed={2} className='custom-class' />
                    </div>
                </div>
            </section>

            {/* <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
            </article> */}

        </>
    )
}

export default Banner