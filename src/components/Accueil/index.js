import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    Bonjour, <br />
                    je m'appelle<br />
                    <img src={LogoTitle} alt='S' />
                    ouleymane,
                    <br />
                    Je suis developpeur !
                    <br />
                </h1>
                <h2>Developpeur Frontend / Developpeur Logiciel / Administrateur des Bases de Données</h2>
                <Link to='/contact' className='flat-button'>ME CONTACTER</Link>
            </div>
        </div>
    )
}

export default Home;