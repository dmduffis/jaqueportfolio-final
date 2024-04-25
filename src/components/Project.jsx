import React from "react";
import arrowIcon from "../images/arrow_links.png";
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Project({ title, coverImage, index}) {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="project" data-aos="fade-up" style={{ backgroundImage: "url(" + coverImage + ")" }}>
      <Link className="description" to={`/single/${index}`}>
        <h2>{title}</h2>
        <p className="view_project"><span><img src={arrowIcon} alt="click here to open project"/></span></p>
        </Link>
    </div>
  );
}
