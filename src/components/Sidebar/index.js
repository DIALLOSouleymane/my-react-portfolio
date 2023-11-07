import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/my-name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faStudiovinari } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    // Navigation bar sur les petites tailles d'écran
    const [showNav, setShowNav] = useState(false);
    // false car nous ne voulons que la barre de navigation soit affichée au chargement de la page
    
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='Souleymane' />
            </Link>
            {/* 
                A présent, nous utilisons une classe pour l'affichage de la barre
                de navigation sur les petits écrans
            */}
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/"
                    // Nous fermons la barre de navigation
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="activities-link" to="/activities"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faStudiovinari} color='#4d4d4e' />
                </NavLink>
                {/* 
                    Mise en place d'une icone de fermeture du menu, une fois ouvert
                */}
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color='#ffd700'
                    size='3x'
                    className='close-mobile-navBar'
                />
            </nav>

            <ul>
                <li>
                    <a 
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/souleymane-diallo-17591422a/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a 
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/DIALLOSouleymane'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
            {/* Gestion de la responsivité : mise en place d'un menu hamburger */}
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#ffd700'
                className='hamburger-icon'
                size='3x'
            />
        </div>
    );
}

export default Sidebar;