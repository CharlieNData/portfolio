import './App.css';
import ExperienceCard from './components/ExperienceCard';
import Header from './components/Header';
import HomepageButton from './components/HomepageButton';
import SocialBar from './components/SocialBar';
 

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
              <h2>About Me</h2>
            </div>
            <div className="about-text">
              <p>I am an Essex-based computer science graduate with commercial experience in front-end web development.</p>
              <p>I am currently looking for a role in the realm of web design, product design or graphic design to further boost my skills.</p>
            </div>
          </div>
          <div className="profile-img">
            <img src='./images/profile-pic.png'></img>
            <SocialBar />
          </div>
        </div>
        <div className="main-section experience">
            <div className="experience-title">
              <h2>Experience</h2>
            </div>
            <div className="experience-card-section">
                <ExperienceCard 
                  titleText="Freelance Brand Designer"
                />
                <ExperienceCard 
                  titleText="Software Engineer at Netcompany"
                />
                <ExperienceCard 
                  titleText="Web Developer at IDS Ltd"
                  />
            </div>
          </div>    
        <div className="spacer">
          <HomepageButton text="Projects" target="#projects"/>
        </div>
      </section>
      <section className="projects" id="projects">
      </section>
    </div>
  );
}

export default App;
