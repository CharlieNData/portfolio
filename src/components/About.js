import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="about-section" id="about">
                <div className="main-section about-me">
                    <div className="text-section">
                        <div className="about-title">
                        <h2>About Me</h2>
                        </div>
                        <div className="about-text">
                        <p>I recently graduated from the University of Sheffield with a Masters degree in Computer Science.</p>
                        <p>I am currently looking for a role in the realm of web design, product design or graphic design to further boost my skills.</p>
                        </div>
                    </div>
                    <div className="profile-img">
                        <img src='./images/profile-pic.png' alt="Profile"></img>
                    </div>
                    </div>
            </div>
        )
    }
}
