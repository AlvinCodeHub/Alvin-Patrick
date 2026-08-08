import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import alvin1 from '../assets/alvin_1.jpg';
import alvin2 from '../assets/alvin_2.jpg';
import alvin3 from '../assets/alvin_3.jpg';

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [alvin1, alvin2, alvin3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '90px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3.5rem',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Content */}
        <div className="hero-content" style={{ textAlign: 'left' }}>

          <h1
            className="hero-title animate-fade-in-up delay-100"
            style={{
              lineHeight: 1.15,
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Alvin Patrick <span style={{ color: 'var(--primary)' }}>V</span>
          </h1>

          <h2
            className="hero-subtitle animate-fade-in-up delay-200"
            style={{
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Aspiring AI & Machine Learning Engineer
          </h2>

          <p
            className="hero-description animate-fade-in-up delay-300"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '580px',
              lineHeight: 1.6,
            }}
          >
            Building intelligent applications through AI, machine learning, automation, data, and modern web technologies.
          </p>

          <div
            className="hero-buttons animate-fade-in-up delay-400"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              <span>Explore Projects</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="btn btn-outline"
            >
              <FileText style={{ width: 16, height: 16 }} />
              <span>View Resume</span>
            </button>
            <a
              href="https://github.com/AlvinCodeHub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: '#f3f4f6',
                color: '#24292e',
                border: '1px solid #d1d5db',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0.55rem 1.25rem',
                borderRadius: '6px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e5e7eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f3f4f6';
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/alvin-patrick-v-b568792a1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: '#eff6ff',
                color: '#0a66c2',
                border: '1px solid #bfdbfe',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0.55rem 1.25rem',
                borderRadius: '6px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#dbeafe';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#eff6ff';
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Professional Portrait Slideshow */}
        <div className="flex-center hero-slideshow-wrapper" style={{ width: '100%' }}>
          <div
            className="hero-slideshow animate-fade-in-scale delay-200"
            style={{
              width: '340px',
              maxWidth: '100%',
              borderRadius: '12px',
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              padding: '10px',
              boxShadow: 'var(--shadow-glass)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Alvin Patrick V - Portrait ${idx + 1}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: idx === currentImageIndex ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    borderRadius: '8px',
                  }}
                />
              ))}
            </div>

            {/* Navigation Indicators */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.5rem',
                zIndex: 10,
              }}
            >
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    background: idx === currentImageIndex ? 'var(--primary)' : 'rgba(15, 23, 42, 0.3)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-title {
          font-size: 3.75rem;
        }
        .hero-subtitle {
          font-size: 1.8rem;
        }
        .hero-description {
          font-size: 1.1rem;
        }
        .hero-slideshow {
          height: 400px;
        }
        @media (max-width: 992px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            text-align: center !important;
          }
          #hero .hero-content {
            order: 2 !important;
          }
          #hero .hero-slideshow-wrapper {
            order: 1 !important;
          }
          #hero div {
            text-align: center !important;
            margin-left: auto;
            margin-right: auto;
          }
          #hero .btn {
            margin: 0.25rem auto;
          }
          #hero .hero-buttons {
            justify-content: center !important;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem !important;
          }
          .hero-subtitle {
            font-size: 1.35rem !important;
          }
          .hero-description {
            font-size: 0.95rem !important;
            margin-bottom: 1.5rem !important;
          }
          .hero-slideshow {
            height: 240px !important;
            width: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};
