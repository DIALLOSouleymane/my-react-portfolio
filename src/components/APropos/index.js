import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import monCV from '../../assets/docs/_CV_fr_SouleymaneDiallo_November2023.pdf';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000) //animation 3s
    }, [])

    return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', ' ', 'P', 'r', 'o', 'p', 'o', 's', ' ', 'd', 'e', ' ', 'm', 'o', 'i']}
                    index={15}
                    />
                </h1>
                <p>
                    Curieux, Dynamique et Autonome, je suis un développeur dévoué et très ambitieux.
                    Passionné d'informatique depuis tout petit, l'enseignement supérieur m'a permis 
                    de m'orienter dans ce vaste domaine plein d'opportunités, d'innovations et 
                    de solutions prometteuses.
                </p>
                <p>
                    Après trois semestres de classe préparatoire avec une solide base en algorithmique,
                    Je me suis très vite tourné vers le développement.<br />
                    J'utilise des technologies telles que <span className='technologies'>HTML5</span>, 
                    <span className='technologies'> CSS3</span>, <span className='technologies'>JavaScript</span>,
                    <span className='technologies'> React JS</span>, <span className='technologies'> Angular</span>, 
                    <span className='technologies'> TypeScript</span>, <span className='technologies'> Bootstrap</span>, 
                    <span className='technologies'> SQL</span>, <span className='technologies'>Java</span>, <span className='technologies'> Python</span>, 
                    <span className='technologies'> Git</span>, etc.
                </p>
                <p>
                    Vous pouvez consulter mon profile  
                    <a href='https://www.linkedin.com/in/souleymane-diallo-17591422a/'
                        target='_blank'
                        rel='noreferrer'
                    >LinkedIn</a> 
                    <a href='https://www.linkedin.com/in/souleymane-diallo-17591422a/'
                        target='_blank'
                        rel='noreferrer'
                    >ici</a>. 
                    Vous pouvez également consulter mon CV à partir de ce 
                    <a href={monCV}
                        target='_blank'
                        rel='noreferrer'
                    >lien</a>.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>

        </div>
        <Loader type='pacman' />
    </>
    )
}

export default About;
