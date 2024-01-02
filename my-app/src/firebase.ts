import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: "skilled-hands.firebaseapp.com",
    // projectId: "skilled-hands",
    // storageBucket: "skilled-hands.appspot.com",
    // messagingSenderId: "205319091757",
    // appId: "1:205319091757:web:0145338e835e755861eaa4",
    // measurementId: "G-71368X17PR"
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "skilled-hands-b66ed.firebaseapp.com",
    projectId: "skilled-hands-b66ed",
    storageBucket: "skilled-hands-b66ed.appspot.com",
    messagingSenderId: "769469495259",
    appId: "1:769469495259:web:2a50729384734a699699fe",
    measurementId: "G-CGE8LEWTQX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);