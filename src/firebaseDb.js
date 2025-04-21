// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAQxwqMQFBJaMLt-k2z_dkUvJBvQTJYqI",
    authDomain: "quasartodolist-95fcb.firebaseapp.com",
    projectId: "quasartodolist-95fcb",
    storageBucket: "quasartodolist-95fcb.firebasestorage.app",
    messagingSenderId: "508045340559",
    appId: "1:508045340559:web:7058f484df8aa9855425fa",
    measurementId: "G-HZCQXLFL6B"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;
