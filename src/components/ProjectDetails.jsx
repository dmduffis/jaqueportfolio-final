import React from "react";
import Navigation from "./Navigation";
import ProjectSingleTheme from "./ProjectSingleTheme";

export default function ProjectDetails({
  coverImage,
  title,
  location,
  render,
  year,
  album,
}) {
  return (
    <>

    <Navigation />

    <div className="project_details_wrapper">
      <div className="project_details_description">
        <h2 className="project_details_title">{title}</h2>
        <h4 className="project_details_text">Location: {location}</h4>
        <h4 className="project_details_text">Render: {render}</h4>
        <h4 className="project_details_text">Year: {year}</h4>
      </div>
    </div>

    <div>
      <ul className="project_details_album">
      {album.map((photo) => {
        return (<li><img src={photo} /></li>)
      })}
      </ul>
    </div>
    </>
  );
}
