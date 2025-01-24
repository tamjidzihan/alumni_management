import { X } from 'lucide-react';
import React from 'react'


type EventModelProps = {
    isOpen: boolean;
    onClose: () => void;
    event: {
        title: string;
        schedule: string;
        description: string | null,
        // location?: string;
        // agenda?: string[];
    };
};

const EventModel = ({ isOpen, onClose, event }: EventModelProps) => {
    const hangleClose = () => {
        onClose()
    }
    if (!isOpen) return null;
    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
                onClick={onClose}
            />
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {event.title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="font-semibold text-purple-600">
                                    {event.schedule}
                                </div>
                                <div className="text-gray-600">{event.schedule}</div>
                                {/* {event.location && (
                                    <div className="text-gray-600 mt-1">
                                        {event.location}
                                    </div>
                                )} */}
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">
                                    Event Description
                                </h3>
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                            {/* {event.agenda && (
                            //     <div>
                            //         <h3 className="font-semibold text-lg mb-2">Event Agenda</h3>
                            //         <ul className="list-disc list-inside space-y-2">
                            //             {event.agenda.map((item, index) => (
                            //                 <li key={index} className="text-gray-600">
                            //                     {item}
                            //                 </li>
                            //             ))}
                            //         </ul>
                            //     </div>
                            // )} */}
                            <div className="mt-6">
                                <button
                                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                                    onClick={() => {
                                        /* Add registration logic */
                                    }}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventModel