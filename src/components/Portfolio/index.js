import React from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getDocs, collection } from "firebase/firestore/lite";
import { db } from "../../myFirebase";

const MyPorfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    // console.log(portfolioData);

    // Récupération des données du portfolio à partir du db
    const [portfolio, setPortfolio] = useState([]);

    // implémentation de l'effet au survolement des lettres du titre
    useEffect(() => {
        const minuteur = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000); //3s
        return () => {
            clearTimeout(minuteur);
        }
    });

    // Appel de la methode getPortfolio
    useEffect(() => {
        getPortfolio();
    }, []);
    const getPortfolio = async () => {
        const requetePortfolio = await getDocs(collection(db, 'portfolio'));
        // request type : querySnapshot ***
        // console.log(requetePortfolio);
        setPortfolio(requetePortfolio.docs.map((doc) => doc.data()));
    }

    // Test de fonctionnement
    // console.log(portfolio);

    const genererPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((portfolioObject, index) => {
                        return (
                            <div className="image-box" key={index}>
                                <img src={portfolioObject.image}
                                className="portfolio-image"
                                alt="Projet" />
                                <div className="contenu">
                                    <h2 className="titre">{portfolioObject.titre}</h2>
                                    <p className="description">{portfolioObject.description}</p>
                                    <h4 className="technologie">Technologies : {portfolioObject.technoligies}</h4> 
                                    {/* erreur de frappe : technoligies => technologies */}
                                    <a className="lien-gitHub" href={portfolioObject.gitHubLink} target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <button className="btn" onClick={() => window.open(portfolioObject.websiteLink)}>Voir</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    } 
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")} //construction du tableau
                        index={15}
                    />
                </h1>
                <div>{genererPortfolio(portfolio)}</div>
            </div>
            <Loader type='pacman'></Loader>
        </>
    );

}

export default MyPorfolio;