import React from 'react'

const About = () => {
    return (
        <section className="py-16 px-6 bg-gray-50" id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    alt="About Us"
                    className="rounded-lg shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We Excel Alumni Association at Malad West, Mumbai, Maharashtra are
                        an official and well focused on building a vibrant ecosystem of
                        key stakeholders including educators and alumni. We seek to
                        support the students interest.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About