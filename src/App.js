import './App.css';
import ExperienceCard from './components/ExperienceCard';
import Header from './components/Header';
import HomepageButton from './components/HomepageButton';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
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
                  I developed this website from scratch using HTML, CSS and JavaScript within the the <span style={{color: "black"}}>React.js</span> framework.
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
              <p>I recently graduated from the University of Sheffield with a Masters degree in Computer Science.</p>
              <p>I am currently looking for a role in the realm of web design, product design or graphic design to further boost my skills.</p>
            </div>
          </div>
          <div className="profile-img">
            <img src='./images/profile-pic.png' alt="Profile"></img>
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
                  duration = 'Sept 2020 - Mar 2021'
                  description="Web design and development on a number of high-profile projects, such as the Ministry of Defence and NHS."
                  skills={["React.js", "GitHub", "Jira"]}
                />
                <ExperienceCard 
                  titleText="Freelance Graphic Designer"
                  imgSrc='./images/university-solid.svg'
                  duration='March 2021 - present'
                  description='Creating logos, brand identity and product designs for several local businesses in Essex.'
                  skills={["Photoshop", "Illustrator", "InDesign"]}
                />
                <ExperienceCard 
                  titleText="Web Developer, IDS Ltd"
                  imgSrc='./images/laptop-code-solid.svg'
                  duration = 'June 2018 - Sept 2018'
                  description="Developing WordPress sites for a number clients in both the United Kingdom and the Netherlands."
                  skills={['WordPress', 'HTML', 'CSS']}
                  />
            </div>
          </div>    
        <div className="spacer">
          <HomepageButton text="Projects" target="#projects"/>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="main-section">
          <h2>Projects</h2>
          <div className="project-card-section">
              <ProjectCard title="Video Flux App" />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
          </div>
        </div> 
      </section>
    </div>
  );
}

export default App;
