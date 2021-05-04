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
                  titleText="Software Engineer, Netcompany"
                  imgSrc='./images/wrench-solid.svg'
                  description="Web design and development on a number of high-profile projects, such as the Ministry of Defence and NHS."
                  skills={["React.js", "GitHub", "Jira"]}
                />
                <ExperienceCard 
                  titleText="Web Developer, IDS Ltd"
                  imgSrc='./images/laptop-code-solid.svg'
                  skills={[]}
                  />
                <ExperienceCard 
                  titleText="MComp Computer Science, University of Sheffield"
                  imgSrc='./images/university-solid.svg'
                  skills={[]}
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
