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
                        The Cumilla Modern High School Alumni Association is a community organization comprising former students of Cumilla Modern High School. Its purpose is to foster connections among alumni, support the school's development, and organize events and initiatives that benefit both current students and the broader alumni network. The association often engages in activities such as reunions, mentorship programs, and charity projects, aiming to maintain a strong bond among members while contributing positively to the school and society.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About