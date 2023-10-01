import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
 
import auth from '../../firebase/firebase.init';
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()



const AuthProvider = ({children}) => {
    // google login
    const googleLogin = () =>{
        return  signInWithPopup(auth, googleProvider)
      }
       
    // create with email and password
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    } 
const user = "kodom ali"
      const authentication = {
        googleLogin,
        createUser,
        user
     
      }
    return (
        <AuthContext.Provider value={authentication} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;