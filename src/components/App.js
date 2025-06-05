import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Abstract from './Abstract/Abstract';
import MotivationAndBackground from './Motivation/Motivation';
import Methodology from './Methodology/Methodology';
import Experiment from './Experiments/Experiment';
import Footer from './Footer/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('abstract');

  useEffect(() => {
    const sectionIds = ['abstract', 'motivation', 'methodology', 'experiment'];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header currentSection={currentSection} />
      <Hero />
      <section id="abstract" className="scroll-mt-20"><Abstract /></section>
      <section id="motivation" className="scroll-mt-20"><MotivationAndBackground /></section>
      <section id="methodology" className="scroll-mt-20"><Methodology /></section>
      <section id="experiment" className="scroll-mt-20"><Experiment /></section>
      <Footer />
    </div>
  );
}

export default App;
