import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import flux from "../assets/flux-iphone-mockup.jpg";
import malluable from "../assets/malluable-bc-mockup.jpg";
import oj from "../assets/oj-van-mockup.jpg";
import ainsley from "../assets/ainsley-assets-mockup.jpg";
import bubbles from "../assets/bubbles-stats-thumbnail.jpg";
import insightz from "../assets/insightz.jpg";

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="projects" id="projects">
                    <div className="main-section">
                    <h2>Projects</h2>
                    <div className="project-card-section">
                        <ProjectCard title="Video Flux App" imgUrl={flux} />
                        <ProjectCard title="Malluable" imgUrl={malluable} />
                        <ProjectCard title="OJ Electrical" imgUrl={oj} />
                        <ProjectCard title="Ainsley Assets" imgUrl={ainsley} />
                        <ProjectCard title="Bubbles Stats" imgUrl={bubbles} />
                        <ProjectCard title="Web Design" imgUrl={insightz} centre={true}/>
                    </div>
                    </div> 
                </section>
            </div>
        )
    }
}
