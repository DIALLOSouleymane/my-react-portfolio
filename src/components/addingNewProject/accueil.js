import { useRef } from "react";
import { auth, db, stockage } from "../../myFirebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore/lite";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "react-loaders";


const Home = () => {
    // Nous créons maintenant une référence au formulaire
    const fromulaire = useRef();

    // Animation du titre :
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000) //animation 3s
    }, [])

    const soumissionPortfolio = (e) => {
        e.preventDefault();
        const titre = fromulaire.current[0]?.value;
        const description = fromulaire.current[1]?.value;
        const technoligies = fromulaire.current[2]?.value;
        const websiteLink = fromulaire.current[3]?.value;
        const gitHubLink = fromulaire.current[4]?.value;
        const image = fromulaire.current[5]?.files[0];
        // Nous récupérons le premier fichier attaché

        /* 
        if (fromulaire.current[5]?.files[0]){
              
                // Nous prenons garde dans le cas où image n'est pas renseignée ;
                // Dans ce cas précis, nous utiliserons une image par défaut !
             
            const image = fromulaire.current[5]?.files[0];
        }else {
            const image = 'https://jenesuispasparfaiteetalors.files.wordpress.com/2018/01/projet-de-loi-el-khomri-et-si-les-cles-de-la-gestion-de-projet-et-de-la-conduite-du-changement-en-entreprise-avaient-ete-utilisees.jpg?w=764' ;
        } 
        */

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
        <div className="design-form">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Ajout de nouveau projet ".split("")}
                    index={15}
                 />
            </h1>
            {/* <h1>Ajout de nouveau projet</h1> */}
            <form ref={fromulaire}>
                <p><input type="text" placeholder="Titre du projet : " /></p>
                <p><textarea placeholder="Description du Projet : " /></p>
                <p><input type="text" placeholder="Technologies utilisées : " /></p>
                <p><input type="text" placeholder="Lien vers le site : " /></p>
                <p><input type="text" placeholder="Lien du code source (GitHub) : " /></p>
                <p>
                    <label htmlFor="fichier">Choisir une image : </label>
                    <input id="fichier" type="file" />
                </p>
                <button className="btn-right" type="submit" onClick={soumissionPortfolio}>Ajouter le projet</button>
                <button className="btn-left" onClick={() => auth.signOut()}>Se Déconnecter</button>
            </form>
            <Loader type="pacman"/>
        </div>
    );
}

export default Home;