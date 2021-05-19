import React, { Component } from 'react'

export default class ProjectModal extends Component {

    render() {

        let title = this.props.title;
        let description = this.props.description;

        let img1 = this.props.img1;
        let img2 = this.props.img2;

        return (
            <div className="project-modal" id="modal">
                <div className="modal-content">
                    <div className="modal-photo-section">
                        <div className="modal-photo lg" style={{backgroundImage: `url(${img1})`}}>
                        </div>
                        <div className="modal-photo sm" id="1" style={{backgroundImage: `url(${img2})`}}>
                        </div>
                        <div className="modal-photo sm" id="2"></div>
                    </div>
                    <div className="modal-text-section">
                        <div className="modal-title">
                            <h1>{title}</h1>
                        </div>
                        <div className="modal-text">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
