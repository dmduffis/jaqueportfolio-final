import React, {useEffect} from 'react';
import Project from './Project';
import projectsData from '../projectsData';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function FeaturedProjects() {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, []);

    const featuredProjectslist = projectsData.filter((project) => {
        return project.featured === true;
    })

    return (
        <>
        
        <div className="projects">   
        <div className='projects-inner-wrapper'>
        <h1 className="section_title" data-aos="fade-up">Featured Work</h1>
        <h1 className="section_subtitle" data-aos="fade-up">Some of my latest projects</h1>
        
            <div className="project_wrapper">
                {
                featuredProjectslist.slice(0, 6).map((project) => {
                    return (
                        <Project
                            key={project.id}
                            title={project.title}
                            coverImage={project.coverImage}
                            index={projectsData.indexOf(project)}
                            />
                    )
                })
                }
            </div>
            </div>
        </div>
        </>
)
}
