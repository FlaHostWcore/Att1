import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Projects onSelectProject={setSelectedProject} />
      <About />
      <Contact />
      <ContactForm selectedProject={selectedProject} />
      <Footer />
    </div>
  );
}

export default App;
