import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [showAbout, setShowAbout] = useState(true);

  return (
    <div>
      <Header />

      <button onClick={() => setShowAbout(!showAbout)}>
        {showAbout ? "Hide About" : "Show About"}
      </button>

      {showAbout && <About />}

      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;