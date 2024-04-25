import React, {useEffect} from "react";
import Project from "./Project";
import projectsData from "../projectsData";
import { useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function AllProjects() {
  
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const [data, setData] = useState(projectsData);
  const [tag, setTag] = useState("all_projects");

  function loadAllProjects() {
    setData(projectsData);
    setTag("all_projects");
  }

  function filterCommercial() {
    let filteredData = projectsData.filter(
      (project) => project.tag === "commercial"
    );
    setData(filteredData);
    setTag("commercial");
  }

  function returnCommercialQuantity() {
    let filteredData = projectsData.filter(
      (project) => project.tag === "commercial"
    );
    let CommercialQuantity = filteredData.length
    return CommercialQuantity
  }

  function filterHealthCare() {
    let filteredData = projectsData.filter(
      (project) => project.tag === "healthcare"
    );
    setData(filteredData);
    setTag("healthcare");
  }

  function returnHealthCareQuantity() {
    let filteredData = projectsData.filter(
      (project) => project.tag === "healthcare"
    );
    let HealthCareQuantity = filteredData.length
    return HealthCareQuantity
  }


  function filterResidential() {
    let filteredData = projectsData.filter(
      (project) => project.tag === "residential"
    );
    setData(filteredData);
    setTag("residential");
  }

  function returnResidentialQuantity() {
    let filteredData = projectsData.filter(
      (project) => project.tag === "residential"
    );
    let ResidentialQuantity = filteredData.length
    return ResidentialQuantity
  }

  return (
    <>
      <div className="projects">
        <h1 className="section_title" data-aos="fade-up">Projects</h1>

        <ul className="tags_list" data-aos="fade-up">
          <li
            className={tag === "all_projects" ? "tag_selected" : "tag_item"}
            onClick={loadAllProjects}
          >
            All Projects <span className="amount">{`(${projectsData.length})`}</span>
          </li>
          <li
            className={tag === "commercial" ? "tag_selected" : "tag_item"}
            onClick={filterCommercial}
          >
            Commercial <span className="amount">{`(${returnCommercialQuantity()})`}</span>
          </li>
          <li
            className={tag === "healthcare" ? "tag_selected" : "tag_item"}
            onClick={filterHealthCare}
          >
            Healthcare <span className="amount">{`(${returnHealthCareQuantity()})`}</span>
          </li>
          <li
            className={tag === "residential" ? "tag_selected" : "tag_item"}
            onClick={filterResidential}
          >
            Residential <span className="amount">{`(${returnResidentialQuantity()})`}</span>
          </li>
        </ul>

        <div className="project_wrapper">
          {data.map((project) => {
            return (
              <Project
                key={project.id}
                title={project.title}
                coverImage={project.coverImage}
                index={projectsData.indexOf(project)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}