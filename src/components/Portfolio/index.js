import React from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import portfolioData from '../../data/portfolio.json';
import { useEffect } from "react";

const MyPorfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    // console.log(portfolioData);

    // implémentation de l'effet au survolement des lettres du titre
    useEffect(() => {
        const minuteur = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000); //3s
        return () => {
            clearTimeout(minuteur);
        }
    });

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
                                    <h4 className="technologie">Technologies : {portfolioObject.technologies}</h4>
                                    <button className="btn" onClick={() => window.open(portfolioObject.url)}>Voir</button>
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
                <div>{genererPortfolio(portfolioData.myPortfolio)}</div>
            </div>
            <Loader type='pacman'></Loader>
        </>
    );

}

export default MyPorfolio;