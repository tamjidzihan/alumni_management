import { useState } from 'react';
import { EventsProps, useEvents } from '../hooks/useEvents';
import { Calendar } from 'lucide-react';
import EventModel from './EventModel';

const formatDateTime = (isoDate: string, type: 'date' | 'time' | 'datetime' = 'datetime') => {
    const date = new Date(isoDate);

    if (type === 'date') {
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(date);
    } else if (type === 'time') {
        return new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(date);
    } else {
        // For both date and time
        return `${new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        }).format(date)}, ${new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(date)}`;
    }
};


const Events = () => {
    const { allEvent } = useEvents();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <>
            <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Upcoming Events
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {allEvent.map((event: EventsProps, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                                        <div className="text-sm text-purple-600 font-semibold">
                                            {formatDateTime(event.schedule, 'date')}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {event.title}
                                    </h3>
                                    <div className="text-sm text-gray-500 mb-3">
                                        {formatDateTime(event.schedule, 'time')}
                                    </div>
                                    <p className="text-gray-600 text-wrap line-clamp-3">
                                        {event.description}
                                    </p>
                                    <button
                                        onClick={openModal}
                                        className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300">
                                        Learn More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <EventModel isOpen={isModalOpen} onClose={closeModal} event={allEvent[0]} />
        </>
    );
};

export default Events;
