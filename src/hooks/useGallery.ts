import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseApp";


export const useGallery = () => {
    const saveImageUrl = async (imageUrl: string): Promise<void> => {
        try {
            const imagesCollection = collection(db, "images"); // Replace "images" with your desired Firestore collection name
            await addDoc(imagesCollection, {
                url: imageUrl,
                uploadedAt: new Date(), // Optional: Add a timestamp
            });
            console.log("Image URL saved successfully!");
        } catch (error) {
            console.error("Error saving image URL to Firestore:", error);
            throw error;
        }
    };

    return { saveImageUrl };
};
