import React, { Component } from 'react'

export default class ExperienceCard extends Component {
    render() {

        let titleText = this.props.titleText;
        let imgSrc = this.props.imgSrc;

        return (
            <div className="experience-card">
                <div className="experience-card-img">
                    <img src={imgSrc}></img>
                </div>
                <div className="experience-card-text">
                   <p>{titleText}</p>
                </div>
            </div>
        )
    }
}
