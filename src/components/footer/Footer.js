import React from "react";
import "./Footer.css"

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="social-icons">
                <img alt='Facebook' src={require('../../icons/facebook.png')} />
                <img alt='Twitter' src={require('../../icons/twitter.png')} />
                <img alt='Instagram' src={require('../../icons/instagram.png')} />
            </div>
                
            <div className="footer-menu">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
                
            <div className="footer-menu">
                <p>Need Help?</p>
                <p>FAQs</p>
            </div>

            <div className="footer-menu">
                <p>About</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}