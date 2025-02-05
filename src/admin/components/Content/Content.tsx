import React, { useEffect, useState } from 'react';
import { useAbout } from '../../../hooks/useAbout';

const Content = () => {
    const { aboutUs, saveAbout, deleteAbout } = useAbout();

    const [siteName, setSiteName] = useState(aboutUs?.siteName || '');
    const [headings, setHeadings] = useState(aboutUs?.heading || '');
    const [about, setAbout] = useState(aboutUs?.aboutUs || '');

    // Update the `about` state when `aboutUs` is fetched
    useEffect(() => {
        if (aboutUs) {
            setAbout(aboutUs.aboutUs || "");
            setHeadings(aboutUs.heading || "");
            setSiteName(aboutUs.siteName || "");
        }
    }, [aboutUs]);

    const handleSave = async () => {
        if (about.trim() === '') {
            alert('about cannot be empty.');
            return;
        }
        if (headings.trim() === '') {
            alert('Headings cannot be empty.');
            return;
        }
        if (siteName.trim() === '') {
            alert('Site Name cannot be empty.');
            return;
        }
        await saveAbout({ aboutUs: about, heading: headings, siteName: siteName });
        alert('Website information is updated successfully!');
    };

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete the "About Us" information?')) {
            await deleteAbout();
            setAbout(''); // Clear local state
            alert('"Website Information" deleted successfully!');
        }
    };

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className=" font-bold text-black dark:text-white">
                        Update Website Information Here
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                        <label className="mb-2 block text-black dark:text-white">Web-Site Name</label>
                        <input
                            type="text"
                            value={siteName}
                            onChange={(e) => setSiteName(e.target.value)}
                            placeholder="Enter WebSite Name"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-black dark:text-white">Headings</label>
                        <input
                            type="text"
                            value={headings}
                            onChange={(e) => setHeadings(e.target.value)}
                            placeholder="Enter Headings"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            About Us Text
                        </label>
                        <textarea
                            rows={10}
                            placeholder="Enter about us text here..."
                            value={about}
                            autoFocus
                            onChange={(e) => setAbout(e.target.value)}
                            className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                        />
                    </div>
                    <div className="flex gap-3">
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
        </>
    );
};

export default Content;
