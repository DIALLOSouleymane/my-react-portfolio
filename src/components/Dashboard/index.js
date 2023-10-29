import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import Connexion from "../Connexion";
import Home from "./accueil";

const Dashboard = () => {

    // Authentification de l'utilisateur
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    });

    return (
        <div>
            {user ? <Home /> : <Connexion />}
        </div>
    );
}

export default Dashboard;