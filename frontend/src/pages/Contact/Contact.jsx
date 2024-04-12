import React, {useState} from 'react';

import './Contact.scss';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Données du formulaire:", formData);
        // Ici, intégrez votre logique d'envoi à votre API ou service d'email
    
        // Afficher un message ou effectuer une action sur succès de l'envoi
        alert('Message envoyé avec succès!');
      };

    return (
        <div className='contact'>
            <h2>CONTACT</h2>

            
            <form onSubmit={handleSubmit} className='contact__form'>
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <div className="form__action">
                    <button type="submit" className="form__submit" >Envoyer</button>
                </div>
            </form>

        </div>
    )
}

export default Contact;
