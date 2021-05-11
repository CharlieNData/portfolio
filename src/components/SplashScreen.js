import React, { Component } from 'react'
import Header from './Header'
import HomepageButton from './HomepageButton'

export default class SplashScreen extends Component {
    render() {
        return (
            <div>
                <section className="front-page">
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                    <Header/>
                    <div className="main-section">
                    <div className="splash">
                        <h1>
                        Charlie<br></br>Jewers
                        </h1>
                        <h3>
                        Web developer,<br></br>graphic designer.
                        </h3>
                    </div>
                    <div className="react-info-text">
                            <p>
                            I developed this website from scratch using HTML, CSS and JavaScript within the the <span style={{color: "red"}}>React.js</span> framework.
                            </p>
                    </div>
                    </div>
                    <HomepageButton text="About Me" target="#about"/>
                </section>
            </div>
        )
    }
}
