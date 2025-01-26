import { Mail, Phone, Clock } from "lucide-react";
import { useContact } from "../hooks/useContact";

const Contact = () => {
    const { contact } = useContact()

    return (
        <section className="py-16 px-6" id="contact">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="mb-8">
                        <h3 className="font-bold mb-4">Our Address</h3>
                        <p className="text-gray-600">
                            {contact?.address}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Mail className="mr-2" />
                            <span>{contact?.email}</span>
                        </div>
                        <div className="flex items-center">
                            <Phone className="mr-2" />
                            <span>{contact?.phone}</span>
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