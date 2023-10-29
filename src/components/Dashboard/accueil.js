import { useRef } from "react";
import { auth } from "../../myFirebase";

const Home = () => {
    // Nous créons maintenant une référence au formulaire
    const fromulaire = useRef();

    const soumissionPortfolio = (e) => {
        e.preventDefault();
        const titre = fromulaire.current[0]?.value;
        const description = fromulaire.current[1]?.value;
        const technoligies = fromulaire.current[2]?.value;
        const websiteLink = fromulaire.current[3]?.value;
        const gitHubLink = fromulaire.current[4]?.value;
        const image = fromulaire.current[5]?.files[0];
        // Nous récupérons le premier fichier attaché

        console.log(titre, description, technoligies, websiteLink, gitHubLink, image);
    }
    return (
        <div className="dashboard">
            <form ref={fromulaire} onSubmit={soumissionPortfolio}>
                <p><input type="text" placeholder="Titre du projet : " /></p>
                <p><textarea placeholder="Description du Projet : " /></p>
                <p><input type="text" placeholder="Technologies utilisées : " /></p>
                <p><input type="text" placeholder="Lien vers le site : " /></p>
                <p><input type="text" placeholder="Lien du code source (GitHub) : " /></p>
                <p><input type="file" placeholder="Image (aperçu) du projet" /></p>
                <button type="submit">Ajouter le projet</button>
                <button onClick={() => auth.signOut()}>Se Déconnecter</button>
            </form>
        </div>
    );
}

export default Home;