import React, { Component } from 'react'

export default class ProjectCard extends Component {

    render() {

        let title = this.props.title;
        let imgUrl = this.props.imgUrl;
        let centre = this.props.centre;

        function openModal() {
            var modal = document.getElementById("modal");
            var body = document.getElementsByTagName("body")[0];

            console.log(modal);
            modal.style.display = "block";
            body.style.overflow = "hidden";
        }


        return (
            <div>
                <div className="project-card" onClick={openModal}>
                    <div className="project-card-image-holder" style={{backgroundImage: `url(${imgUrl})`, backgroundPosition: centre ? "center" : null}}>
                    </div>
                    <div className="project-card-hover-gradient">
                    </div>
                    <div className="project-card-title">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>

        )
    }
}
