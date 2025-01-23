import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/FirebaseApp";

export interface EventsProps {
    id: string;
    title: string;
    schedule: string;
    description: string | null;
    commitedTo: string | null;
}

export const useEvents = () => {
    const [allEvent, setAllEvent] = useState<EventsProps[]>([])

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
    }, [])


    const createEvent = async (
        title: string,
        schedule: string,
        description: string | null,
        commitedTo: string | null
    ): Promise<EventsProps | null> => {
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
            setAllEvent((prev) => [...prev, newEvent]);
            return newEvent;
        } catch (error) {
            console.error("Error While creating Events:", error);
            return null;
        }
    };


    return {
        allEvent,
        createEvent
    }
}


