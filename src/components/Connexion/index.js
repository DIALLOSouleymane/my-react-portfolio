import Loader from "react-loaders";
import { signInWithGoogle } from "../../myFirebase";

const Connexion = () => {
    return (
        <div className="container-connexion">
            <h1>Ajouter de nouveau(x) projet(s) à votre portfolio</h1>
            <button className="btn-connexion" onClick={signInWithGoogle}>
                Se connecter avec google
            </button>
            <Loader type="pacman" />
        </div>
    );
}

export default Connexion;