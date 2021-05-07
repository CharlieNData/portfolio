import React, { Component } from 'react'
import flux from "../src-images/flux-iphone-mockup.jpg"

export default class ProjectCard extends Component {

    render() {

        let title = this.props.title;

        return (
            <div className="project-card" style={{backgroundImage: `url(${flux})`}}>
                <div className="project-card-title">
                    <h3>{title}</h3>
                </div>
            </div>
        )
    }
}
