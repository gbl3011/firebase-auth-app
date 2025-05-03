import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJSVZIhTcSBcHFRJKsOFILGfHUbA_zrc0",
  authDomain: "fir-auth-app-c6e2b.firebaseapp.com",
  projectId: "fir-auth-app-c6e2b",
  storageBucket: "fir-auth-app-c6e2b.firebasestorage.app",
  messagingSenderId: "1024163489053",
  appId: "1:1024163489053:web:d0ae4c471d814a9b98adf4"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a autenticação e o Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
