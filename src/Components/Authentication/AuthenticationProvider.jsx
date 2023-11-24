import React, { createContext, useState } from 'react';
import { app } from './firebase.config';
export let AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
const auth = getAuth(app);

const AuthenticationProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);

    let signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }




    let authentication = {
        signUp,
        signIn
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationProvider;