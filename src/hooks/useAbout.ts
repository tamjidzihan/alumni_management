import { useState, useEffect } from 'react';
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/FirebaseApp';

export interface AboutProps {
    id: string;
    aboutUs: string;
}

export const useAbout = () => {
    const [aboutUs, setAboutUs] = useState<AboutProps | null>(null);
    const { user } = useAuth();
    const collectionName = 'about';

    // Fetch the "about us" data
    useEffect(() => {
        const getAbout = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, collectionName));
                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0]; // Assuming you only want the first document
                    const aboutData = doc.data() as Omit<AboutProps, 'id'>;
                    setAboutUs({ id: doc.id, ...aboutData });
                }
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };
        if (user?.uid) {
            getAbout();
        }
    }, [user?.uid]);

    // Update or create "about us" data
    const saveAbout = async (newAbout: Omit<AboutProps, 'id'>) => {
        try {
            if (aboutUs?.id && user?.uid) {
                // Update existing document
                const docRef = doc(db, collectionName, aboutUs.id);
                await updateDoc(docRef, newAbout);
                setAboutUs({ id: aboutUs.id, ...newAbout });
            } else {
                // Create a new document with a fixed ID (e.g., 'about-us')
                const fixedDocId = 'about-us';
                const docRef = doc(db, collectionName, fixedDocId);
                await setDoc(docRef, newAbout);
                setAboutUs({ id: fixedDocId, ...newAbout });
            }
        } catch (error) {
            console.error('Error saving about data:', error);
        }
    };

    // Delete "about us" data
    const deleteAbout = async () => {
        if (!aboutUs?.id) {
            console.error('No about data to delete');
            return;
        }
        try {
            const docRef = doc(db, collectionName, aboutUs.id);
            await deleteDoc(docRef);
            setAboutUs(null); // Clear local state
        } catch (error) {
            console.error('Error deleting about data:', error);
        }
    };

    return { aboutUs, saveAbout, deleteAbout };
};
