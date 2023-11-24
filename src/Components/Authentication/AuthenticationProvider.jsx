import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase.config';
export let AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, updateProfile, signOut, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthenticationProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [loggedInUser, setLoggedInUser] = useState(null);

    let signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    let logOut = () => {
        return signOut(auth)
    }
    let profileUpdate = (fullName,photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: photoUrl
        })
    }
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedInUser(user);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])



    let authentication = {
        signUp,
        signIn,
        loggedInUser,
        googleLogin,
        logOut,
        loading,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationProvider;