import { initializeApp } from "firebase/app";
import {User, getAuth, onAuthStateChanged} from "firebase/auth";
import React, { useEffect } from "react";


const firebaseConfig = {

apiKey: "AIzaSyCbxvJdN8xgsuhktTdqP_xfuvyCpjSg7fA",

authDomain: "gps-painting.firebaseapp.com",

projectId: "gps-painting",

storageBucket: "gps-painting.appspot.com",

messagingSenderId: "543661782383",

appId: "1:543661782383:web:b2396df03e52dc045b249a",

measurementId: "G-N82GP7JQ1F"

};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export function useAuth() {
    const [user, setUser] = React.useState<User>();
  
    useEffect(() => {
      const unsubscribeFromAuthStateChanged = onAuthStateChanged(FIREBASE_AUTH, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(undefined);
        }
      });
      return unsubscribeFromAuthStateChanged;
    }, []);
  
    return {
      user,
    };
  }