import React, { useRef } from 'react';
import './contact.styles.css';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/layouts/navbar/Navbar';

const Footer = () => {
    const form = useRef();
    const serviceId = "service_44botzw";
    const templateId = "template_mz08lnq";
    const publicKey = "uCrsPEyakNRLUAnci";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
            console.log(response.text);
        })
        .catch((error) => {
            console.log(error.text);
        })

        e.target.reset();
    }

    return (
        <section>
            <Navbar darkTheme={ true } />

        <section className="footer-container">
            <div className="container">
                <h2>If you have any queries feel free to ask here.</h2>

                <form onSubmit={handleSubmit} ref={form} className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" name="user_name" id="name" className="form-input" placeholder='Enter your name'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" name="user_email" id="email" className="form-input" placeholder="Enter your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query:</label>
                        <textarea className="form-input" name="message" id="query" placeholder='Type your Query'></textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="form-submit" />
                    </div>
                </form>

                <p>&copy; 2023 BookWorm. All Rights Reserved.</p>
            </div>
        </section>
        </section>
    )
}

export default Footer;