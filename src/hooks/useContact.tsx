import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseApp";

export interface ContactProps {
    id: string;
    address: string | null;
    email: string | null;
    phone: string | null;
}

export const useContact = () => {
    const [contact, setContact] = useState<ContactProps | null>(null);
    const { user } = useAuth();
    const collectionName = 'contact'

    useEffect(() => {
        const getContact = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, collectionName));
                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0]
                    const contectData = doc.data() as Omit<ContactProps, 'id'>;
                    setContact({ id: doc.id, ...contectData })
                }
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };
        if (user?.uid) {
            getContact();
        }
    }, [user?.uid])

    const saveContact = async (newContact: Omit<ContactProps, 'id'>) => {
        try {
            if (contact?.id && user?.uid) {
                const docRef = doc(db, collectionName, contact.id);
                await updateDoc(docRef, newContact);
                setContact({ id: docRef.id, ...newContact });
            } else {
                const fixedDocId = 'contact-us';
                const docRef = doc(db, collectionName, fixedDocId);
                await setDoc(docRef, newContact)
            }
        } catch (error) {
            console.error('Error saving about data:', error);
        }
    };

    const deleteContact = async () => {
        if (!contact?.id) {
            console.error('No about data to delete');
            return;
        }

        try {
            const docRef = doc(db, collectionName, contact.id);
            await deleteDoc(docRef);
            setContact(null); // Clear local state
        } catch (error) {
            console.error('Error deleting about data:', error);
        }
    }

    return { contact, saveContact, deleteContact }

}