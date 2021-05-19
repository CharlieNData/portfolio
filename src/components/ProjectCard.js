import React, { Component } from 'react'

export default class ProjectCard extends Component {

    handleModal = () => {
        // pass card info back to modal
        let img1Key = Object.keys(this.props.modalInfo.img1)[0];
        let img2Key = Object.keys(this.props.modalInfo.img2)[0];

        var info = {
            title: this.props.modalInfo.title,
            description: this.props.modalInfo.description,
            img1: this.props.modalInfo.img1[img1Key],
            img2: this.props.modalInfo.img2[img2Key]
        };

        this.props.onModalInfo(info);

        // show modal
        var modal = document.getElementById("modal");
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    }

    render() {

        let title = this.props.title;
        let imgUrl = this.props.imgUrl;
        let centre = this.props.centre;

        return (
            <div>
                <div className="project-card" onClick={this.handleModal}>
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
