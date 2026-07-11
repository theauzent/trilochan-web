// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, initializeAuth, indexedDBLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// YAHAN MINE updateDoc ADD KIYA HAI 👇
import { getFirestore, doc, setDoc, updateDoc, getDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyBgKbi7U1F_wMflgf8-SiX97X_f06hB6Io",
    authDomain: "mylinkhub-ea198.firebaseapp.com", 
    projectId: "mylinkhub-ea198", 
    storageBucket: "mylinkhub-ea198.firebasestorage.app", 
    messagingSenderId: "127986959992",
    appId: "1:127986959992:web:60b3d604c0187211264f8d"
};

// Main App and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Secondary isolated App for Admin creating worker accounts without getting logged out
const secondaryApp = initializeApp(firebaseConfig, "SecondaryInstance");
const SecondaryAuth = initializeAuth(secondaryApp, {
    persistence: indexedDBLocalPersistence
});

// YAHAN BHI updateDoc EXPORT KIYA HAI 👇
export { auth, SecondaryAuth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, doc, setDoc, updateDoc, getDoc, collection, query, where, getDocs };