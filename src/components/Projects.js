import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import malluable from "../assets/malluable-bc-mockup.jpg";
import oj from "../assets/oj-van-mockup.jpg";
import ainsley from "../assets/ainsley-assets-mockup.jpg";
import bubbles from "../assets/bubbles-stats-thumbnail.jpg";
import insightz from "../assets/insightz.jpg";

import flux from "../assets/flux-iphone-mockup.jpg";
import fluxMockup from "../assets/projects/flux-ipad-mockup.jpg";

export default class Projects extends Component {

    componentDidMount() {
        var modal = document.getElementById("modal");
        var body = document.getElementsByTagName("body")[0];

        console.log(modal);
        window.onclick = function(event) {
            if (event.target === modal) {
              modal.style.display = "none";
              body.style.overflow = "visible"
            }
        }
    }

    render() {

        
        return (
            <div className="projects-wrapper">
                <section className="projects" id="projects">
                    <div className="main-section">
                        <div className="projects-title">
                            <h2>Projects</h2>
                        </div>
                        <div className="project-card-section" >
                            <ProjectCard title="Video Flux App" imgUrl={flux} />
                            <ProjectCard title="Malluable" imgUrl={malluable} />
                            <ProjectCard title="OJ Electrical" imgUrl={oj} />
                            <ProjectCard title="Ainsley Assets" imgUrl={ainsley} />
                            <ProjectCard title="Bubbles Stats" imgUrl={bubbles} />
                            <ProjectCard title="IDS Web Design" imgUrl={insightz} centre={true}/>
                        </div>
                    </div>
                </section>
                <div className="project-modal" id="modal">
                    <div className="modal-content">
                        <div className="modal-photo-section">
                            <div className="modal-photo lg" style={{backgroundImage: `url(${fluxMockup})`}}>
                            </div>
                            <div className="modal-photo sm" id="1" style={{backgroundImage: `url(${flux})`}}>
                            </div>
                            <div className="modal-photo sm" id="2"></div>
                        </div>
                    </div>
                </div> 
            </div>

        )
    }
}
