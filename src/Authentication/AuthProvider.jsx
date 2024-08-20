import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../fairbase.config";
import { useEffect } from "react";


export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current User", currentUser);
            setLoading(false)
        });

        return () => {
            return unSubscribe()
        };
    }, [])

    const useInfo = {
        user,
        loading,
        createUser,
    }
    return (
        <AuthContext.Provider value={useInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;