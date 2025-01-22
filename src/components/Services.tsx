const Services = () => {
    return (
        <section className="py-16 px-6" id="services">
            <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:px-10">
                {[
                    {
                        title: "Memberships",
                        image:
                            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
                    },
                    {
                        title: "News & Events",
                        image:
                            "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
                    },
                    {
                        title: "Alumni Meets",
                        image:
                            "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
                    },
                    {
                        title: "Community",
                        image:
                            "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
                    },
                ].map((service, index) => (
                    <div
                        key={index}
                        className="bg-white isolate flex flex-col justify-end relative shadow-lg overflow-hidden rounded-2xl px-8 pb-8 pt-40 cursor-pointer group"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                            {service.title}
                        </h3>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                            Supporting text for {service.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
