
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyA_jAVVuK-Gxyn9cG20oNpo7dqA2zlstlk",
  authDomain: "tiktok---jornada-8de09.firebaseapp.com",
  projectId: "tiktok---jornada-8de09",
  storageBucket: "tiktok---jornada-8de09.appspot.com",
  messagingSenderId: "1033901579298",
  appId: "1:1033901579298:web:1f957dfa2a62e8424a7e7b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;