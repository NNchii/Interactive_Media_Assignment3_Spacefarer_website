import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            </div>
            <div className="footer-info">
                <p>Founder: Lucien Zhang</p>
            </div>
            <div className="footer-contact">
                <p>Phone: +123 456 7890</p>
                <p>Email: lucien@example.com</p>
            </div>
        </footer>
    );
};

export default Footer;
