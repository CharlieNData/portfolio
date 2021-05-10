import React, { Component } from 'react'

export default class ProjectCard extends Component {

    render() {

        let title = this.props.title;
        let imgUrl = this.props.imgUrl;
        let centre = this.props.centre

        return (
            <div className="project-card" >
                <div className="project-card-image-holder" style={{backgroundImage: `url(${imgUrl})`, backgroundPosition: centre ? "center" : null}}>
                </div>
                <div className="project-card-title">
                    <h3>{title}</h3>
                </div>
            </div>
        )
    }
}
