// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADLg_jdUfPIRniXM5kDluPcqLHBNNb-Is",
  authDomain: "persona-5-habit-tracker.firebaseapp.com",
  projectId: "persona-5-habit-tracker",
  storageBucket: "persona-5-habit-tracker.firebasestorage.app",
  messagingSenderId: "99135996087",
  appId: "1:99135996087:web:60380dcdfdc9bf0c328d32",
  measurementId: "G-S5HGJD0GZV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
