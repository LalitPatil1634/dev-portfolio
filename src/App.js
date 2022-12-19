import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Navbar } from './components/Navbar/Navbar';
import { Portfolio } from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
