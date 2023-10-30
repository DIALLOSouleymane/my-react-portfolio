import Loader from "react-loaders";
import { signInWithGoogle } from "../../myFirebase";
import { useState } from "react";
import { useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Connexion = () => {
    
    // Animation du titre :
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000) //animation 3s
    }, [])


    return (
        <div className="container-connexion">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Ajouter de nouveau(x) projet(s) à votre portfolio".split("")}
                    index={0}
                 />
            </h1>
            {/* <h1>Ajouter de nouveau(x) projet(s) à votre portfolio</h1> */}
            <button className="btn-connexion" onClick={signInWithGoogle}>
                Se connecter avec google
            </button>
            <Loader type="pacman" />
        </div>
    );
}

export default Connexion;