import React, { useState } from 'react';
import { EventsProps } from '../../../hooks/useEvents';

type CreateEventModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    addNewEvent: (newEvent: EventsProps) => void;
    createEvent: (
        title: string,
        schedule: string,
        description: string | null,
        commitedTo: null
    ) => Promise<EventsProps | null>;
};

const CreateEventModal = ({ isOpen, closeModal, createEvent, addNewEvent }: CreateEventModalProps) => {
    const [title, setTitle] = useState('');
    const [schedule, setSchedule] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !schedule) {
            alert('Title and Schedule are required.');
            return;
        }
        const newEvent = await createEvent(title, schedule, description, null);
        if (newEvent) {
            addNewEvent(newEvent)
        }
        closeModal();
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
