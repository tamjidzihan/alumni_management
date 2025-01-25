import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/FirebaseApp";

export interface AboutProps {
    id: string;
    aboutUs: string;
}


export const useAbout = () => {
    const [aboutUs, setAboutUs] = useState<AboutProps>()
    const { user } = useAuth()

    useEffect(() => {
        const getAbout = async () => {
            const querySnapshot = await getDocs(collection(db, 'about'))
            const postAboutItem = '';
            querySnapshot.forEach((doc) => {
                const postAboutData = doc.data() as Omit<AboutProps, 'id'>

            })
        }
    })
}