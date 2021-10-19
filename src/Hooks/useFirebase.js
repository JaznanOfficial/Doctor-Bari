import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import initializeConfig from '../Firebase/Firebase.init';

initializeConfig()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = (e) => {
        e.preventDefault()
        signInWithPopup(auth, googleProvider)
            .then(result => {
            console.log(result.user);
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
        setUser({})
        })
        .catch((error) => {
       
      });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user)
             
            } 
          });
          
    },[])
    return {
        user,
        signInUsingGoogle,
        logOut,
    };
};

export default useFirebase;