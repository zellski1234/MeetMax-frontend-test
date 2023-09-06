import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in est at elit blandit.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
