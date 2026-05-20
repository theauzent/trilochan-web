// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyBgKbi7U1F_wMflgf8-SiX97X_f06hB6Io",
    authDomain: "mylinkhub-ea198.firebaseapp.com", 
    projectId: "mylinkhub-ea198", 
    storageBucket: "mylinkhub-ea198.firebasestorage.app", 
    messagingSenderId: "127986959992",
    appId: "1:127986959992:web:60b3d604c0187211264f8d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, doc, setDoc, getDoc, collection, query, where, getDocs };