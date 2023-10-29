/* 
    Utilisation de la configuration du firebase 
*/

// Importation des fonctions que nous avons besoin depuis les SDKs
// SDK ~ Software Development Kits | Kits de Developpement de Logiciel
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
// Pour ce faire, nous ajoutons les SDKs pour les produits Firebase que nous souhaitons  utiliser
// # Lien
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuration de notre application Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCoTJ-Zoy00XIPDDVIAp2vYZJdcue1JxWc",
  authDomain: "my-react-portfolio-database.firebaseapp.com",
  projectId: "my-react-portfolio-database",
  storageBucket: "my-react-portfolio-database.appspot.com",
  messagingSenderId: "78015925177",
  appId: "1:78015925177:web:6e8893000e06e23547c468"
};

// Initialisation du Firebase
const app = initializeApp(firebaseConfig);

// Création de la méthode de Connexion
export const auth = getAuth(); //Fourniseur d'authentification
const provider = new GoogleAuthProvider();
// Création de notre base de données qui contiendra toutes nos collections de données
export const db = getFirestore(app);
// Créons un espace de stockage pour les images de nos projets
export const stockage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);