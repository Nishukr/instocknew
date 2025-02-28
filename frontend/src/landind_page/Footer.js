import React from 'react';
import './Footer.css';

function Footer() {
    return ( 
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column footer-logo">
                    <img src="media/images/instock1.jpg" alt="Instock Logo"/>
                    <p className="footer-text">
                        &copy; 2025 Instock Technologies Pvt. Ltd. All rights reserved.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Company</h3>
                    <a href="">About</a>
                    <a href="">Products</a>
                    <a href="">Pricing</a>
                    <a href="">Referral Program</a>
                    <a href="">Careers</a>
                    <a href="">Instock.tech</a>
                    <a href="">Open Source</a>
                    <a href="">Press & Media</a>
                    <a href="">Instock Cares (CSR)</a>
                </div>

                <div className="footer-column">
                    <h3>Support</h3>
                    <a href="">Contact Us</a>
                    <a href="">Help Center</a>
                    <a href="">Instock Blog</a>
                    <a href="">List of Charges</a>
                    <a href="">Downloads & Resources</a>
                    <a href="">Video Tutorials</a>
                    <a href="">Market Insights</a>
                    <a href="">File a Complaint</a>
                    <a href="">Complaint Status</a>
                </div>

                <div className="footer-column">
                    <h3>Account</h3>
                    <a href="">Open an Account</a>
                    <a href="">Fund Transfer</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Investments in securities markets are subject to market risks; read all related documents carefully before investing.
                </p>
                <p>
                    "Prevent unauthorized transactions in your account. Update your mobile number/email with your stock broker. Receive information about your transactions directly from the Exchange on your mobile/email at the end of the day. Issued in the interest of investors."
                </p>
            </div>
        </footer>
    );
}

export default Footer;

