import React, {useEffect, useRef, useState } from "react";
import projectsData from "../projectsData";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import leftButton from "../images/button_left.png";
import rightButton from "../images/button_right.png";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function ProjectSingleTheme() {

  useEffect(() => {
    AOS.init({duration: 1000});
  },);

  const ref = useRef(null);

  
  const resetScroll = () => {
    ref.current.scrollTo({
      left: 0,
      behavior: "instant"
      });
    
    setVisibilityClass("hidden");

    window.scrollTo(0, 0);
  }

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const params = useParams();
  const { ProjectId } = params;

  const [visibilityClass, setVisibilityClass] = useState("hidden");

  const handleScroll = () => {
    setVisibilityClass("btn_left");
  } 

  return (
    <>
    <Navigation />

    <div className="project_album_wrapper" id='wrapper'>
              
    <img src={leftButton} className={visibilityClass} onClick={() => scroll(-300)} alt="left-scroll button"/>
      
        <div id="project_album" className="project_details_album" ref={ref} onScroll={handleScroll}>
          <ul>
          {projectsData[ProjectId].album.map((photo) => {
            return (<li data-aos="fade-left"><img src={photo} alt="" /></li>)
          })}
          </ul>
        </div>
          
      <img src={rightButton} className="btn_right" onClick={() => scroll(300)} alt="right-scroll button"/>
      
      </div>

       <div className="project_details_wrapper">
        <div className="project_details_description">
          <h2 className="project_details_title">{projectsData[ProjectId].title}</h2>
          <h4 className="project_details_text">Location: {projectsData[ProjectId].location}</h4>
          <h4 className="project_details_text">Render: {projectsData[ProjectId].render}</h4>
          <h4 className="project_details_text">Year: {projectsData[ProjectId].year}</h4>
        </div>
      </div>
    
      
       <div className="pagination">
        <Link
          id="pagination" className={Number(ProjectId) === 0 && "hidden"}
          to={`/single/${Number(ProjectId) - 1}`}
          onClick={resetScroll}
        >
         {`<`} Back
        </Link>
        <Link
          id="pagination" className={Number(ProjectId) === (projectsData.length - 1) && "hidden"}
          to={`/single/${Number(ProjectId) + 1}`}
          onClick={resetScroll}
        >
          Next {`>`}
        </Link>
      </div>

      <Footer />
    </>
  );
}
