import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState()
    const [loading ,setLoading] = useState(true)
    const [reviewRefresh,setReviewRefresh] = useState(true)
    const [myReviewRefresh,setMyReviewRefresh] = useState(true)
    const googleProvider = new GoogleAuthProvider()

        // sign with google
        const signWithGoogle = ()=>{
            setLoading(true)
            return signInWithPopup(auth,googleProvider)
        }
    
        // create user
        const createUser=(email,password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
        }
    
        // update user profile
        const updateUserProfile=(profile)=>{
            setLoading(true)
            return updateProfile(auth.currentUser,profile)
        }
    
        // logout
        const logOut=()=>{
            setLoading(true)
            localStorage.removeItem('HomemadeCrunch-Token')
            return signOut(auth)
        }
    
        // user signin
        const userSignIn=(email,password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }
    
        // get user
        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                setLoading(false)
                return
            })
            return ()=>unsubscribe()
        },[])
        const value = {
            user,
            createUser,
            updateUserProfile,
            logOut,
            userSignIn,
            signWithGoogle,
            reviewRefresh,setReviewRefresh,
            myReviewRefresh,setMyReviewRefresh,
            loading,setLoading,
        }
    return (
        <div>
            <AuthContext.Provider value = {value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;