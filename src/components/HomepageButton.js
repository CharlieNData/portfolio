import React, { Component } from 'react'

export default class HomepageButton extends Component {
    render() {

        let target = this.props.target;
        let buttonText = this.props.text;

        return (
            <div className='scroll-link'>
                <a href={target}>{buttonText}</a>
            </div>
        )
    }
}

