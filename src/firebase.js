import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8XsNYyoCZdQBetB0lzZrO9w40GJ41fTI",
  authDomain: "loginlogout-3ae55.firebaseapp.com",
  projectId: "loginlogout-3ae55",
  storageBucket: "loginlogout-3ae55.appspot.com",
  messagingSenderId: "250173300745",
  appId: "1:250173300745:web:5ce3d4983ba4b5408518d8",
  measurementId: "G-51M25ZT2TH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//this is for manual login logout function 

// export const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider).then((result) => {
//     const name = result.user.displayName;
//     const profilePic = result.user.photoURL;

//     localStorage.setItem("name", name)
//     localStorage.setItem("profilePic", profilePic)
//   }).catch((error) => {
//     console.log(error);
//   });
// };