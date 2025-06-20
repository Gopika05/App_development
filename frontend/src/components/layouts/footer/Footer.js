import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <strong>BOOK HUNT</strong>
        </div>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a> |
          <a href="/terms-of-service" className="footer-link">Terms of Service</a> |
          <a href="/ontact" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-social">
          <p>Follow us:</p>
          <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer" className='socialLinkStyle'>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer" className='socialLinkStyle'>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer" className='socialLinkStyle'>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/devam_krish?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D" target="_blank" rel="noopener noreferrer" className='socialLinkStyle'>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-app-links">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="app-store-badge.png" alt="Download on the App Store" />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="google-play-badge.png" alt="Get it on Google Play" />
          </a>
        </div>
        <p></p>
        <div className="footer-subscription">
          <p>Subscribe to our newsletter:</p>
          <form className="subscription-form">
            <input type="email" placeholder="Enter your email" className="subscription-input" />
            <button type="submit" className="subscription-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 BOOK HUNT. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
