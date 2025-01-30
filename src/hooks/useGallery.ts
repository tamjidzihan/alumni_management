import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/FirebaseApp";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export interface GalleryProps {
    id: string;
    url: string;
    imageContext: string | null;
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
                postGalleryItem.push({ id: doc.id, ...postGalleryData })
            })
            setAllImage(postGalleryItem)
        }
        getImage()
    }, [user?.uid])


    const saveImage = async (
        url: string,
        imageContext: string | null,
        uploadedAt: string
    ): Promise<GalleryProps | null> => {
        if (user?.uid && url) {
            try {
                const docRef = await addDoc(collection(db, 'gallery'), {
                    url: url,
                    imageContext: imageContext,
                    uploadedAt: uploadedAt,
                });
                const newImage = {
                    id: docRef.id,
                    url: url,
                    imageContext: imageContext,
                    uploadedAt: uploadedAt,
                };
                setAllImage((prev) => [newImage, ...prev])
                console.log("Image saved successfully!");
                return newImage
            } catch (error) {
                console.error("Error saving image URL to Firestore:", error);
                throw error;
            }

        } else {
            console.error("User is not authenticated ");
            return null;;
        }
    }


    const deleteImage = async (id: string) => {
        if (user?.uid && id) {
            try {
                await deleteDoc(doc(db, 'gallery', id));
                setAllImage((prev) => prev.filter((image) => image.id !== id))

            } catch (error) {
                console.error("Error deleting Image:", error);
            }
        } else {
            console.error("User is not authenticated ");
            return null;
        }
    }


    return {
        allImage,
        setAllImage,
        saveImage,
        deleteImage
    };
};

