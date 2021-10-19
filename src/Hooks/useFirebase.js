import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword    } from "firebase/auth";
import initializeConfig from '../Firebase/Firebase.init';

initializeConfig()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const signInUsingGoogle = () => {
        
        signInWithPopup(auth, googleProvider)
            .then(result => {
            console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
        })
    }

    
    

    

    
    const handleEmail = e => {
        e.preventDefault();
        setEmail(e.target.value);
}
    const handlePassword = e => {
        e.preventDefault();
    setPassword(e.target.value);
}

const handleRegistration = e => {
    e.preventDefault()
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   setUser(userCredential.user);
  })
}

    const handlePasswordSignIn = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential);
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
        handleRegistration,
        handleEmail,
        handlePassword,
        error,
        handlePasswordSignIn,
    };
};

export default useFirebase;