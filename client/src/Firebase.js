import { initializeApp } from 'firebase/app';
import { getStorage, collection, getDocs } from 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy9fJaBd4owzjDpSJf_PXCWLDJySmCSOs",
    authDomain: "portfolio-6858a.firebaseapp.com",
    projectId: "portfolio-6858a",
    storageBucket: "portfolio-6858a.appspot.com",
    messagingSenderId: "161683807067",
    appId: "1:161683807067:web:a2571a8e04ce0e030b987e"
    };

const app = initializeApp(firebaseConfig);
export const db = getStorage(app);
