import React, { useState, useEffect } from 'react';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ResearchAchievements } from './components/ResearchAchievements';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'research', 'certifications', 'education', 'resume', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the sweet spot of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* Background Interactive Network Effect */}
      <BackgroundEffect />

      {/* Cybernetic Floating Scanline Overlay */}
      <div className="scanline" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main style={{ width: '100%' }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResearchAchievements />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
      </main>
    </>
  );
};

export default App;
