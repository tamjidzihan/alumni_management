import React, { useState, useEffect } from "react";
import { useContact } from "../../../hooks/useContact";

const ContactUs = () => {
    const { contact, saveContact, deleteContact } = useContact();

    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (contact) {
            setAddress(contact.address || "");
            setEmail(contact.email || "");
            setPhone(contact.phone || "");
        }
    }, [contact]);


    const handleSave = async () => {
        const newContact = { address, email, phone };
        await saveContact(newContact);
        alert("Contact information saved successfully!");
    };

    const handleDelete = async () => {
        await deleteContact();
        setAddress("");
        setEmail("");
        setPhone("");
        alert("Contact information deleted successfully!");
    };

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-6.5">
            <h3 className="font-medium text-black dark:text-white mb-5">
                Update Contact Us
            </h3>
            <div className="flex flex-col gap-4">
                <div>
                    <label className="mb-2 block text-black dark:text-white">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    />
                </div>
                <div>
                    <label className="mb-2 block text-black dark:text-white">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    />
                </div>
                <div>
                    <label className="mb-2 block text-black dark:text-white">Phone</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                    />
                </div>
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={handleSave}
                        className="rounded bg-primary px-4 py-2 text-white hover:bg-opacity-90"
                    >
                        Save
                    </button>
                    <button
                        onClick={handleDelete}
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-opacity-90"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
