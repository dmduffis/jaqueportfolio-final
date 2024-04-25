import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../images/logo_icon_white.png'
import instagramIcon from '../images/instagram_icon.png';
import whatsAppIcon from '../images/whatsapp_icon.png';

export default function Footer() {
    return (
        <footer className='footer'>
    
    {/* LOGO */ }

        <div class="brand_footer">
            <Link className='logo_link' to="/"><img className="logo_footer" src={mainLogo} alt="logo" /></ Link>
            <p className='copyright'>Jaqueline Lima | Copyright © {new Date().getFullYear()}</p>
            {/* <Link className='logo_link' to="/"><h1 className='logo_title'>jaqueline lima</h1></ Link> */}
            
        </div>

    {/* NAV MENU */}

        <div className="footer_nav">
            <ul>
     {/* SOCIAL ICONS */}
                <li class="social_footer"><a className="copyright" href="https://www.instagram.com/jaquelinearquiteta/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /> jaquelinearquiteta</a></li>
                <li class="social_footer"><a className="copyright" href="https://wa.me/5511965801375" target="_blank" rel="noopener noreferrer"><img src={whatsAppIcon} alt="WhatsApp" /> +55 11 96580-1375</a></li>

            </ul>
        </div>
    </footer>
    )
}