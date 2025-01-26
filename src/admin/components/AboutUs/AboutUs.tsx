import React, { useEffect, useState } from 'react';
import { useAbout } from '../../../hooks/useAbout';

const AboutUs = () => {
    const { aboutUs, saveAbout, deleteAbout } = useAbout();
    const [text, setText] = useState(aboutUs?.aboutUs || ''); // Local state for textarea

    // Update the `text` state when `aboutUs` is fetched
    useEffect(() => {
        if (aboutUs?.aboutUs) {
            setText(aboutUs.aboutUs);
        }
    }, [aboutUs]);

    const handleSave = async () => {
        if (text.trim() === '') {
            alert('Text cannot be empty.');
            return;
        }
        await saveAbout({ aboutUs: text });
        alert('About Us updated successfully!');
    };

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete the "About Us" information?')) {
            await deleteAbout();
            setText(''); // Clear local state
            alert('"About Us" deleted successfully!');
        }
    };

    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Update About Us
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                        <textarea
                            rows={10}
                            placeholder="Enter about us text here..."
                            value={text}
                            autoFocus
                            onChange={(e) => setText(e.target.value)}
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

export default AboutUs;
