import React from 'react';
import './Footer.css'; // Ensure you create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <div className="policies">
                <a href="/terms-conditions">Terms & Conditions</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/refund-return-policy">Refund & Return Policy</a>
            </div>
            <div className="credits">
                © 2024 D’Organics | Developed By <a href="https://www.tsoftware.com" target="_blank" rel="noopener noreferrer">T Software</a>
            </div>
        </footer>
    );
};

export default Footer;
