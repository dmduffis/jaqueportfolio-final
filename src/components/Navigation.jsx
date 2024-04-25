import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import mainLogo from '../images/logo_icon_white.png'
import instagramIcon from '../images/instagram_icon.png';
import whatsAppIcon from '../images/whatsapp_icon.png';
import linkedInIcon from '../images/linkedin_icon.png';

export default function Navigation() {
    return (
        <header>
    <div className="inner-wrapper-nav">
    {/* LOGO */ }

        <div class="brand">
            <Link className='logo_link' to="/"><img className="logo" src={mainLogo} alt="logo" /></ Link>
            <Link className='logo_link' to="/"><h1 className='logo_title'>jaqueline lima</h1></ Link>
            
        </div>

    {/* NAV MENU */}

        <nav>
            <ul>
                <li className='first'>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'nav_link_active' : 'nav_link'}>
                        Home
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => isActive ? 'nav_link_active' : 'nav_link'}>
                        Projects
                    </NavLink>
                </li>
                
                <li className='last_word'>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'nav_link_active' : 'nav_link'}>
                        Contact
                    </NavLink>
                </li>

     {/* SOCIAL ICONS */}
                <li class="social"><a href="https://www.instagram.com/jaquelinearquiteta/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a></li>
                <li class="social"><a href="https://wa.me/5511965801375" target="_blank" rel="noopener noreferrer"><img src={whatsAppIcon} alt="WhatsApp" /></a></li>
                <li class="social last"><a href="https://www.linkedin.com/in/jaquelineolima/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="LinkedIn" /></a></li>

            </ul>
        </nav>
        </div>
    </header>
    )
}