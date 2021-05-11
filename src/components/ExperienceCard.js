import React, { Component } from 'react'

export default class ExperienceCard extends Component {

    render() {

        let titleText = this.props.titleText;
        let imgSrc = this.props.imgSrc;
        let duration = this.props.duration;
        let vidSrc = this.props.vidSrc;

        let description = this.props.description;
        let skills = this.props.skills;
        let skillsList = skills.map((skill) => 
        <li key={skill}>
            <p>{skill}</p>
        </li>);

        return (
            <div className="experience-card">
                <video autoPlay muted loop>
                        <source src={vidSrc} type="video/mp4" ></source>
                    </video>
                <div className="experience-card-content">
                    <div className="experience-card-content-text">
                        <p>{description}</p>
                        <ul className="experience-card-content-skills">
                            <p>Key Skills:</p>
                            {skillsList}
                        </ul>
                    </div>
                </div>
                <div className={`experience-card-cover`}>
                    <div className="experience-card-img">
                        <img src={imgSrc} alt="Experience Logo"></img>
                    </div>
                    <div className="experience-card-text">
                        <p>{titleText}</p>
                        <p>{duration}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}
