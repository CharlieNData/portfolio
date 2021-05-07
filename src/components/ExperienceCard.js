import React, { Component } from 'react'

export default class ExperienceCard extends Component {
    constructor() {
        super();
        this.state = {
            hideCover: false
        };

        this.handleHideCover = this.handleHideCover.bind(this);
    }

    handleHideCover() {
        this.setState({
            hideCover: !this.state.hideCover
        });
    }

    render() {

        let titleText = this.props.titleText;
        let imgSrc = this.props.imgSrc;
        let duration = this.props.duration

        let description = this.props.description;
        let skills = this.props.skills;
        let skillsList = skills.map((skill) => 
        <li key={skill}>
            <p>{skill}</p>
        </li>);

        return (
            <div className="experience-card">
                <div className="experience-card-content" onClick={this.handleHideCover}>
                    <div className="experience-card-content-text">
                        <p>{description}</p>
                        <ul className="experience-card-content-skills">
                            <p>Key Skills:</p>
                            {skillsList}
                        </ul>
                    </div>
                </div>
                <div className={`experience-card-cover ${this.state.hideCover ? 'cover-hidden' : ''}`} onClick={this.handleHideCover}>
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
