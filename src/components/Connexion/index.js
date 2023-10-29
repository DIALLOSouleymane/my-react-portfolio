import { signInWithGoogle } from "../../myFirebase";

const Connexion = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithGoogle}>
                Se connecter avec google
            </button>
        </div>
    );
}

export default Connexion;