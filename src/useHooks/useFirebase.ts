import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { sign } from 'crypto';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    appId: process.env.NEXT_PUBLIC_appId
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const googleProvider = new firebase.auth.GoogleAuthProvider();



export default function useFirebase(){
    const initialUser = { email: "", displayName: "" };
    const [currentUser, setCurrentUser] = React.useState(initialUser);
    auth.onAuthStateChanged(function (user) {
        if(user && currentUser.email !== user.email){
            setCurrentUser({
                email: user.email!,
                displayName: user.displayName!
            });
        } else if(!user && currentUser.email){
            setCurrentUser(initialUser);
        }
    });

    return {
        currentUser,
        async loginUser(){
            await auth.signInWithPopup(googleProvider);
        },
        async logoutUser(){
            await auth.signOut();
            return {};
        }
    };
}