import { useRef } from "react";
import { auth, db, stockage } from "../../myFirebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore/lite";


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

        // console.log(titre, description, technoligies, websiteLink, gitHubLink, image);
        // créons maintenant une référence à notre espace de stockage
        const stockageRef = ref(stockage, `portfolio/${image.name}`);

        /* 
             Nous envoyons à présent notre image au serveur;
            Pour cela, nous utilisons la méthode uploadBytes fourni par le firebase
         */
        uploadBytes(stockageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        titre,
                        description,
                        technoligies,
                        websiteLink,
                        gitHubLink,
                        image: downloadUrl
                    })
                }, () => {
                    /* 
                        Dans le cas où le téléchargement de l'image à partir du serveur échoue,
                        dans ce cas, l'image ne sera affichée
                    */
                    savePortfolio({
                        titre,
                        description,
                        technoligies,
                        websiteLink,
                        gitHubLink,
                        image: null
                    })
                })
            }, () => {
                /* 
                    Dans le cas où une image n'a pas été choisi pour le projet,
                    nous enregistrons ce dernier quand-même
                */
                savePortfolio({
                    titre,
                    description,
                    technoligies,
                    websiteLink,
                    gitHubLink,
                    image: null  // Là, nous pouvons bien choisir une image par défaut
                })
            }
        )
    }

    // Méthode de sauvegarde de notre portfolio
    const savePortfolio = async (portfolio) => {
        // console.log(portfolio);
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            // Nous rechargeons maintenant la page afin que les données saisies disparaissent
            window.location.reload(false);
        } catch (error) {
            alert("L'ajout du nouveau projet a échoué, veuillez réessayer !")
        }
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