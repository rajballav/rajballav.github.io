import React from "react";
import usercontext from "./context";
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { database } from '../firebase'
import { ref, set, get, child } from 'firebase/database'

const Userstate = (props) => {
    const [islogin, setislogin] = useState(false)
    const [uid, setuid] = useState()

   
    const [note, setnote] = useState([])
        useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const useruid = user.uid;
              setuid(useruid)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });


    }, [])





    const sendUserdata = (allnote) => {
        set(ref(database, `user/${uid}`), allnote)

    }






    const dbRef = ref(database);
    const renderdata =  () => {
        get(child(dbRef, `user/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setnote(snapshot.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });


    }

    console.log(uid)



    const signinuser = async (email, password) => {
        try {
            const person = await createUserWithEmailAndPassword(auth, email, password)
            console.log(person)
            setislogin(true)

        } catch (error) {
            console.log(error.message)
        }

    }
    const loginuser = async (email, password) => {
        try {
            const person = await signInWithEmailAndPassword(auth, email, password)
            console.log(person)
            setislogin(true)


        } catch (error) {

            const errorMessage = error.message;
            console.log(errorMessage)
        }
    }
    const logoutuser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setislogin(false)
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <usercontext.Provider value={{ signinuser,  loginuser, logoutuser, uid, islogin, note, setnote, sendUserdata, renderdata }}>
            {props.children}
        </usercontext.Provider>
    )
}
export default Userstate
