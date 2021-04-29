import './App.css';
import Header from './components/Header';
import HomepageButton from './components/HomepageButton';
 

function App() {
  return (
    <div className="App">
      <section className="front-page">
        <Header/>
        <div className="main-section splash">
          <h1>
            Charlie<br></br>Jewers
          </h1>
          <h3>
            Web developer,<br></br>graphic designer.
          </h3>
        </div>
        <HomepageButton text="About Me" target="#about"/>
      </section>
      <section className="about" id="about">
        <div className="main-section about-me">
          <div className="text-section">
            <div className="about-title">
              <h1>About Me</h1>
            </div>
            <div className="about-text">
              <p>I am an Essex-based computer science graduate with commercial experience in front-end web development.</p>
              <p>I am currently looking for a role in the realm of web design, product design or graphic design to further boost my skills.</p>
            </div>
            <div className="socials">
              <a href="http://www.twitter.com/CharlieNData" target="_blank">
                <i class="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/charles-jewers" target="_blank">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="http://www.github.com/CharlieNData" target="_blank">
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="profile-img">
            <img src='./images/profile-pic.png'></img>
          </div>
        </div>
        <HomepageButton text="Projects" target="#projects"/>
      </section>
      <section className="projects" id="projects">
      </section>
    </div>
  );
}

export default App;
