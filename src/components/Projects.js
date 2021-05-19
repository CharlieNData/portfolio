import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import malluable from "../assets/malluable-bc-mockup.jpg";
import oj from "../assets/oj-van-mockup.jpg";
import ainsley from "../assets/ainsley-assets-mockup.jpg";
import bubbles from "../assets/bubbles-stats-thumbnail.jpg";
import insightz from "../assets/insightz.jpg";

import flux from "../assets/flux-iphone-mockup.jpg";
import fluxMockup from "../assets/projects/flux-ipad-mockup.jpg";
import ProjectModal from './ProjectModal';

export default class Projects extends Component {

    state = { 
        modalInfo: '' 
    }

    componentDidMount() {
        var modal = document.getElementsByClassName("project-modal")[0];
        var body = document.getElementsByTagName("body")[0];

        window.onclick = function(event) {
            if (event.target === modal) {
              modal.style.visibility = "hidden";
              modal.style.opacity = "0";
              body.style.overflow = "visible";
            }
        }
    }

    handleModalInfo = (cardInfo) => {
        this.setState({
            modalInfo: cardInfo
        });
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
                            <ProjectCard 
                                title="Video Flux App" 
                                imgUrl={flux} 
                                modalInfo={{
                                    title: "Video Flux",
                                    description: "I developed branding for Video Flux app.",
                                    img1: {fluxMockup},
                                    img2: {flux}
                                }}
                                onModalInfo={this.handleModalInfo} 
                            />
                            <ProjectCard 
                                title="Malluable" 
                                imgUrl={malluable}
                                modalInfo={{
                                    title: "Malluable Life Coaching",
                                    description: "I developed branding for Malluable.",
                                    img1: {malluable},
                                    img2: {malluable}
                                }} 
                                onModalInfo={this.handleModalInfo}
                            />
                            <ProjectCard 
                                title="OJ Electrical" 
                                imgUrl={oj}
                                modalInfo={{
                                    title: "OJ Electrical",
                                    description: "I developed branding for OJ Electrical.",
                                    img1: {oj},
                                    img2: {oj}
                                }}  
                                onModalInfo={this.handleModalInfo} 
                            />
                            <ProjectCard title="Ainsley Assets" imgUrl={ainsley} onModalInfo={this.handleModalInfo} />
                            <ProjectCard title="Bubbles Stats" imgUrl={bubbles} onModalInfo={this.handleModalInfo} />
                            <ProjectCard title="IDS Web Design" imgUrl={insightz} centre={true} onModalInfo={this.handleModalInfo} />
                        </div>
                    </div>
                </section>
                <ProjectModal
                    title={this.state.modalInfo.title} 
                    description={this.state.modalInfo.description}
                    img1={this.state.modalInfo.img1} 
                    img2={this.state.modalInfo.img2} 
                />
            </div>

        )
    }
}
