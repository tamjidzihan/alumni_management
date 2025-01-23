import React, { useState } from 'react';
import { useEvents } from '../../../hooks/useEvents';

const CreateEventModal = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
    const { createEvent } = useEvents(); // Access the createEvent function from the hook

    const [title, setTitle] = useState('');
    const [schedule, setSchedule] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newEvent = {
            title,
            schedule,
            description: description || null,
            commitedTo: null, // Add if needed or make it dynamic
        };

        const createdEvent = await createEvent(
            newEvent.title,
            newEvent.schedule,
            newEvent.description,
            newEvent.commitedTo
        );

        if (createdEvent) {
            console.log('Event Created');
        } else {
            console.error('Failed to create the event');
        }

        closeModal(); // Close the modal after submission
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h3 className="text-xl font-semibold mb-4">Create New Event</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Event Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Schedule</label>
                        <input
                            type="datetime-local"
                            value={schedule}
                            onChange={(e) => setSchedule(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            rows={3}
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-400 text-white rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary text-white rounded-md"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEventModal;
