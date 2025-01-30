import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/FirebaseApp";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export interface GalleryProps {
    id: string;
    url: string;
    imageContext: string;
    uploadedAt: string;
}


export const useGallery = () => {
    const [allImage, setAllImage] = useState<GalleryProps[]>([])
    const { user } = useAuth()

    useEffect(() => {
        const getImage = async () => {
            const querySnapshot = await getDocs(collection(db, 'gallery'))
            const postGalleryItem: GalleryProps[] = [];
            querySnapshot.forEach((doc) => {
                const postGalleryData = doc.data() as Omit<GalleryProps, 'id'>
                postGalleryItem.push({ id: 'id', ...postGalleryData })
            })
            setAllImage(postGalleryItem)
        }
        getImage()
    }, [user?.uid])


    const saveImage = async (
        url: string,
        imageContext: string | null,
    ): Promise<void> => {
        if (user?.uid && url) {
            try {
                const imagesCollection = collection(db, "gallery");
                await addDoc(imagesCollection, {
                    url: url,
                    imageContext: imageContext,
                    uploadedAt: new Date(),
                });
                console.log("Image URL saved successfully!");
            } catch (error) {
                console.error("Error saving image URL to Firestore:", error);
                throw error;
            }

        };
    }




    return {
        allImage,
        setAllImage,
        saveImage
    };
};
