import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZ5vpk3NY_8INTelxKHhkwQVgFIk4bZg",
  authDomain: "note-app-development-fa36f.firebaseapp.com",
  projectId: "note-app-development-fa36f",
  storageBucket: "note-app-development-fa36f.appspot.com",
  messagingSenderId: "709866879450",
  appId: "1:709866879450:web:d2550d9330308535c6e8e3",
  databaseURL: "https://note-app-development-fa36f-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const database = getDatabase(app);
export const auth=getAuth(app)



   