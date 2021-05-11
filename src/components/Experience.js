import React, { Component } from 'react'
import ExperienceCard from './ExperienceCard';
import coding from "../assets/videos/coding.mp4";
import graphics from "../assets/videos/graphics.mp4";
import discussion from "../assets/videos/discussion.mp4";


export default class Experience extends Component {
    render() {
        return (
            <div className="experience-section">
                <div className="main-section experience">
                    <div className="experience-card-section">
                        <ExperienceCard 
                        titleText="Software Engineer, Netcompany"
                        imgSrc='./images/wrench-solid.svg'
                        duration = 'Sept 2020 - Mar 2021'
                        description="Web design and development on a number of high-profile projects, such as the Ministry of Defence and NHS."
                        skills={["React.js", "GitHub", "Jira"]}
                        vidSrc={discussion}
                        />
                        <ExperienceCard 
                        titleText="Freelance Graphic Designer"
                        imgSrc='./images/university-solid.svg'
                        duration='March 2021 - present'
                        description='Creating logos, brand identity and product designs for several local businesses in Essex.'
                        skills={["Photoshop", "Illustrator", "InDesign"]}
                        vidSrc={graphics}
                        />
                        <ExperienceCard 
                        titleText="Web Developer, IDS Ltd"
                        imgSrc='./images/laptop-code-solid.svg'
                        duration = 'June 2018 - Sept 2018'
                        description="Developing WordPress sites for a number clients in both the United Kingdom and the Netherlands."
                        skills={['WordPress', 'HTML', 'CSS']}
                        vidSrc={coding}
                        />
                    </div>
                </div>    
            </div>
        )
    }
}
