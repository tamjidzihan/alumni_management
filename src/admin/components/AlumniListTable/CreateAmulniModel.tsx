type CreateAmulniModelProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const CreateAmulniModel = ({ isOpen, closeModal }: CreateAmulniModelProps) => {


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h3 className="text-xl font-semibold mb-4">Create New Event</h3>
                <form >
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Event Title</label>
                        <input
                            type="text"

                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Schedule</label>
                        <input
                            type="datetime-local"

                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea

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

export default CreateAmulniModel;
