import React, { Component } from 'react'
import ProjectCard from './ProjectCard';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="projects" id="projects">
                    <div className="main-section">
                    <h2>Projects</h2>
                    <div className="project-card-section">
                        <ProjectCard title="Video Flux App" />
                        <ProjectCard title="Ainsley Assets" />
                        <ProjectCard title="OJ Electrical" />
                        <ProjectCard title="Malluable" />
                        <ProjectCard title="Bubbles Stats" />
                        <ProjectCard title="Web Design" />
                    </div>
                    </div> 
                </section>
            </div>
        )
    }
}
