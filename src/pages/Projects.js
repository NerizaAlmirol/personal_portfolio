import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Project.css";


function Projects() {
  return (
    <div className='projects'>
        <h1>My Personal Projects</h1>
        <div className='projectList'>
            {ProjectList.map((project) => {
                return <ProjectItem />
            })}
        </div>
    </div>
  )
}

export default Projects