import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/FirebaseApp";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    User,
    onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface AuthContextProps {
    name: string | null;
    user: User | null;
    role: number | null;
    loading: boolean;
    signInWithEmail: (email: string, password: string) => Promise<void>;
    registerWithEmail: (name: string, email: string, password: string, role: number) => Promise<void>;
    logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState<number | null>(null); // Store user role
    const [name, setName] = useState<string | null>(null); // Store user role
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                // Fetch user role from Firestore
                const userDoc = await getDoc(doc(db, "users", currentUser.uid));
                if (userDoc.exists()) {
                    setName(userDoc.data().name)
                    setRole(userDoc.data().role);
                } else {
                    setName(null);
                    setRole(null);
                }
            } else {
                setName(null);
                setUser(null);
                setRole(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const signInWithEmail = async (email: string, password: string) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);

            const userDoc = await getDoc(doc(db, "users", result.user.uid));
            if (userDoc.exists()) {
                setRole(userDoc.data().role);
            }
        } catch (error) {
            console.error("Sign-in error:", error);
        }
    };

    const registerWithEmail = async (name: string, email: string, password: string, role: number) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);

            await setDoc(doc(db, "users", result.user.uid), {
                name: name,
                email: result.user.email,
                role: role
            });
            setUser(result.user);
            setRole(role);
            setName(name)
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            setName(null)
            setUser(null);
            setRole(null);
        } catch (error) {
            console.error("Sign-out error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{
            name,
            user,
            role,
            loading,
            signInWithEmail,
            registerWithEmail,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
