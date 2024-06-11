// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCRdydB_Ob3uybA14z4ICT8va0PLvdnyYw",
    authDomain: "landing-page-a43dd.firebaseapp.com",
    projectId: "landing-page-a43dd",
    storageBucket: "landing-page-a43dd.appspot.com",
    messagingSenderId: "1012304986153",
    appId: "1:1012304986153:web:b6481509bcef2d8f5cdc38",
    measurementId: "G-5FFTVN3RCG"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
