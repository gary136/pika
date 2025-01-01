import React from 'react';
import './ContactUsPage.css';

const ContactUsPage = () => {
    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <p>If you have any questions or need support, feel free to reach out to us!</p>

            <div className="contact-details">
                <p><strong>Email:</strong> support@example.com</p>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            </div>

            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUsPage;
