import React from 'react';
import { useEffect } from 'react';
import profileImage from '../images/jaque_header_profile_no_bg.png';
import resumeCV from '../documents/jaqueline_lima_cv.pdf'
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Header() {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, []);

    return (
        
        <div class="intro-space">
            <div className='intro-space-inner-wrapper'>
        {/* INTRO DESCRIPTION */}
            <div className="intro" data-aos="fade-right">
                <h1>Olá! I am Jaque.</h1> <h2>I am an <span>architect</span> and <span>interior designer</span> based in São Paulo, Brazil.</h2>
               
                <div className="intro_buttons" data-aos="fade-right">
                    <a className="hireme" href="/contact">Get in touch »</a>
                    <a className="cv" href={resumeCV} target="_blank" rel="noreferrer">Download CV »</a>
                </div>
            </div>

        {/* PROFILE PHOTO */}
            <div className="profile" data-aos="fade-left">
                <img src={profileImage} alt= "headshot of architect Jaqueline Lima" />
            </div>
            </div>
        </div> 
    )
}