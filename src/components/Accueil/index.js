import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o', 'u', 'l', 'e', 'y', 'm', 'a', 'n', 'e', ','];
    const jobArray = [' ',' ',' ','J', 'e', ' ', 's', 'u', 'i', 's', ' ', 'd', 'e', 
                                    'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', '.'];
    const helloArray = ['o', 'n', 'j', 'o', 'u', 'r', ','];
    const introArray = ['  ',' ','j', 'e', ' ', 'm\'', 'a', 'p', 'p', 'e', 'l', 'l', 'e'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return (
        <>
            <div className="container home-page">
                <div className='text-zone'>
                    <h1>
                        {/* Bonjour, <br />
                        je m'appelle<br /> */}
                        <span className={letterClass}>B</span>
                        <AnimatedLetters letterClass={letterClass} strArray={helloArray} index={15} /><br />
                        <AnimatedLetters letterClass={letterClass} strArray={introArray} index={15} /><br />
                        <img src={LogoTitle} alt='S' />
                        <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        index={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        index={15} />
                        <br />
                    </h1>
                    <h2>Developpeur Frontend / Developpeur Logiciel / Administrateur des Bases de Données</h2>
                    <Link to='/contact' className='flat-button'>ME CONTACTER</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman'></Loader>
        </>
    )
}

export default Home;