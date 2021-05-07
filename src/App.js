import './App.css';
import HomepageButton from './components/HomepageButton';
import SplashScreen from './components/SplashScreen';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';


function App() {
  
  return (
    <div className="App">
      <SplashScreen />
      <section className="about" id="about">
        <About />
        <Experience />
        <div className="spacer">
          <HomepageButton text="Projects" target="#projects"/>
        </div>
      </section>
      <Projects />
    </div>
  );
}

export default App;
