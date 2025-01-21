import { Menu, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-16 px-6" id="contact">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="mb-8">
                        <h3 className="font-bold mb-4">Our Office Address</h3>
                        <p className="text-gray-600">
                            Room Excel Wing Pl, 1st SR, GR Floor New Link Road, Besides
                            Goregaon Sports Complex, Malad West, Maharashtra 400064
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Mail className="mr-2" />
                            <span>websupport@alumni.com</span>
                        </div>
                        <div className="flex items-center">
                            <Phone className="mr-2" />
                            <span>+91-9999999999</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="mr-2" />
                            <span>Mon - Sun: 10:00 AM - 07:00 PM</span>
                        </div>
                    </div>
                </div>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="YOUR NAME"
                        className="w-full p-3 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="YOUR EMAIL"
                        className="w-full p-3 border rounded"
                    />
                    <input
                        type="tel"
                        placeholder="YOUR CONTACT NO"
                        className="w-full p-3 border rounded"
                    />
                    <textarea
                        placeholder="YOUR MESSAGE"
                        className="w-full p-3 border rounded h-32"
                    />
                    <button className="bg-blue-500 text-white px-6 py-3 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact