import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/FirebaseApp";
import { useAuth } from "../context/AuthContext";

export interface EventsProps {
    id: string;
    title: string;
    schedule: string;
    description: string | null;
    commitedTo: string | null;
}

export const useEvents = () => {
    const [allEvent, setAllEvent] = useState<EventsProps[]>([])
    const { user } = useAuth()

    useEffect(() => {
        const getEvent = async () => {
            const querySnapshot = await getDocs(collection(db, 'events'))
            const postEventItem: EventsProps[] = [];
            querySnapshot.forEach((doc) => {
                const postEventData = doc.data() as Omit<EventsProps, 'id'>;
                postEventItem.push({ id: doc.id, ...postEventData })
            });
            setAllEvent(postEventItem)
        }
        getEvent()
    }, [user?.uid])


    const createEvent = async (
        title: string,
        schedule: string,
        description: string | null,
        commitedTo: string | null
    ): Promise<EventsProps | null> => {
        if (user?.uid && title) {
            try {
                const docRef = await addDoc(collection(db, 'events'), {
                    title: title,
                    schedule: schedule,
                    description: description,
                    commitedTo: commitedTo
                });
                const newEvent = {
                    id: docRef.id,
                    title: title,
                    schedule: schedule,
                    description: description,
                    commitedTo: commitedTo
                };
                setAllEvent((prev) => [newEvent, ...prev]);
                return newEvent;
            } catch (error) {
                console.error("Error While creating Events:", error);
                return null;
            }
        } else {
            console.error("User is not authenticated ");
            return null;
        }
    };

    const updateEvent = async (id: string, updatedData: Partial<EventsProps>) => {
        if (user?.uid && id) {
            try {
                await updateDoc(doc(db, 'events', id), updatedData);
                setAllEvent((prev) =>
                    prev.map((event) => (event.id === id ? { ...event, ...updatedData } : event))
                );
            } catch (error) {
                console.error("Error updating event:", error);
            }
        } else {
            console.error("User is not authenticated ");
            return null;
        }

    };

    const deleteEvent = async (id: string) => {
        if (user?.uid && id) {
            try {
                await deleteDoc(doc(db, 'events', id));
                setAllEvent((prev) => prev.filter((event) => event.id !== id));
            } catch (error) {
                console.error("Error deleting event:", error);
            }
        } else {
            console.error("User is not authenticated ");
            return null;
        }
    };

    return {
        allEvent,
        setAllEvent,
        createEvent,
        updateEvent,
        deleteEvent
    }
}


