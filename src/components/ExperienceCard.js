import React, { Component } from 'react'

export default class ExperienceCard extends Component {
    render() {

        let titleText = this.props.titleText;
        let bodyText = this.props.bodyText;
        let style = this.props.style;

        return (
            <div className="experience-card">
              <div className="experience-card-front">
                <div className="experience-card-text">
                   <p>{titleText}</p>
                      <p>{bodyText}</p>
                </div>
              </div>

              
            </div>
        )
    }
}
