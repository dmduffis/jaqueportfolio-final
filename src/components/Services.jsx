import React from 'react';
import { useEffect } from 'react';
import profileImgServices from '../images/jaque_contact_profile.png';
import listIcon from '../images/arrow_links.png';
import autoCAD from '../images/AutoCAD-logo.png';
import SketchUp from '../images/sketchup.png'
import VRay from '../images/v-ray.png';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Services() {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, []);

    return (
        
        <div class="services-section">
            <div className='services-section-inner-wrapper'>

        {/* PROFILE PHOTO */}
        <div className="services-profile" data-aos="fade-right">
            <img src={profileImgServices} alt= "headshot of architect Jaqueline Lima" />
        </div>

        {/* SERVICES DESCRIPTION */}
            <div className="services-description" data-aos="fade-left">
                <h1 data-aos="fade-left">Services</h1>
                <h3>I'm ready to partner with you 🫱🏻‍🫲🏼</h3>
                
                <div style={{display: "flex", marginTop: "30px", gap: "20px", flexWrap: "wrap"}}>
                <ul> 
                    <li><img src={listIcon} alt=""/>3D Design</li>
                    <li><img src={listIcon} alt=""/>Architecture</li>
                    <li><img src={listIcon} alt=""/>Landscape Design</li>
                    <li><img src={listIcon} alt=""/>Interior Design</li>
                </ul>

                <ul>
                    <li><img src={autoCAD} alt=""/>AutoCAD</li>
                    <li><img src={SketchUp} alt=""/>SketchUp</li>
                    <li><img src={VRay} alt=""/>V-Ray</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}