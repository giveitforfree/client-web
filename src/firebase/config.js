import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDU5g2tw3Sh_8hmKrH9xLU3SMoCYROx304",
    authDomain: "donation-app-371c4.firebaseapp.com",
    projectId: "donation-app-371c4",
    storageBucket: "donation-app-371c4.appspot.com",
    messagingSenderId: "186669387922",
    appId: "1:186669387922:web:77f669823876d6c2f4964b"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const store = getStorage(app);

export { db, store, };
