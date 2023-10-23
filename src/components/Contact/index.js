import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const refForm = useRef();
    
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000) //animation 3s
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_3eo1z7y', //serviceId: gmail
                'template_bpte3ma', //templateID
                refForm.current,
                'UnKuxe4fz_4c-MyjD' //myUser token - public key
            )
            .then(
                () => {
                    // Nous notifions au client le resultat de l'envoi du message
                    alert('Message envoyé avec succès !');
                    // Ensuite nous rechargeons la page afin d'effacer le formulaire !
                    window.location.reload(false);
                },
                () => {
                    alert('Echec de l\'envoi du message, Veuillez Réessayer !')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'e', ' ', 'C', 'o', 'n', 't', 'a', 'c', 't', 'e', 'r']}
                        index={15}
                         />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis
                        expedita nostrum eaque, quaerat molestiae velit unde corporis facere, magni
                        officia saepe, consequatur atque voluptatibus. Blanditiis quis reiciendis 
                        quibusdam aliquid!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Votre Prénom & Nom' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Votre Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Sujet' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Votre message' required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type='submit' className='btn-envoyer' value='Envoyer' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;