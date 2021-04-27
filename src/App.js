import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <section className="front-page">
        <Header/>
        <div className="splash">
          <h1>
            Charlie<br></br>Jewers
          </h1>
          <h3>
            Web developer,<br></br>graphic designer.
          </h3>
        </div>
        <div className='scroll-link'>
          <a href='#about'>About Me</a>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-text">
          <h1>About Charlie</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
