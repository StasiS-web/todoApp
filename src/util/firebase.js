import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBz5gxSKMvY5qXy3XqamGkksB04WzbiOA8",
    authDomain: "todoapp-456300.firebaseapp.com",
    projectId: "todoapp-456300",
    storageBucket: "todoapp-456300.firebasestorage.app",
    messagingSenderId: "366807831830",
    appId: "1:366807831830:web:8cc7d743c63125cd36ac37",
    measurementId: "G-4Z7B3X7QC6"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseDb = getFirestore(app);

export default firebaseDb;