import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseApp";


export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authState = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser); // Set the authenticated user
            } else {
                setUser(null); // No user logged in
            }
            setLoading(false);
        });

        return () => authState();
    }, []);

    const signInWithEmail = async (email: string, password: string) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user); // Set the user after successful login
        } catch (error) {
            console.error("Sign-in error:", error);
        }
    };

    const registerWithEmail = async (email: string, password: string) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            setUser(result.user); // Set the user after successful registration
            console.log("User registered successfully:", result.user);
        } catch (error: any) {
            if (error.code === "auth/email-already-in-use") {
                console.error("This email is already registered.");
                alert("This email is already registered. Please log in or use a different email.");
            } else {
                console.error("Registration error:", error.message);
                alert("An error occurred during registration: " + error.message);
            }
        }
    };


    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null); // Clear the user state on logout
            console.log("User signed out.");
        } catch (error) {
            console.error("Sign-out error:", error);
        }
    };

    return { user, loading, signInWithEmail, registerWithEmail, logOut };
};
