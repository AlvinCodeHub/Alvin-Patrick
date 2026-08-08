import React from 'react';
import { MapPin, GraduationCap, Award, ChevronRight } from 'lucide-react';
import alvinAboutImg from '../assets/alvin_2.jpg';

export const About: React.FC = () => {
  const domains = [
    'Artificial Intelligence & Machine Learning',
    'Natural Language Processing (NLP)',
    'Generative AI & LLMs (Gemini, Llama)',
    'AI & Intelligent Workflow Automation (n8n)',
    'Full-stack Web Applications (React, FastAPI, Flask)',
    'Data Science & Analytics (Pandas, Power BI)',
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Summary */}
          <div style={{ textAlign: 'left' }}>
            <h3
              style={{
                fontSize: '1.6rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
              }}
            >
              Developing Practical Machine Learning Solutions
            </h3>
            
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                color: 'var(--text-secondary)',
              }}
            >
              I am an <strong>Artificial Intelligence and Data Science student</strong> at Loyola Institute of Technology, focused on connecting advanced AI pipelines to user-facing dashboards and back-office automations.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                marginBottom: '2rem',
                color: 'var(--text-secondary)',
              }}
            >
              My professional interests focus on building robust full-stack web platforms, orchestrating automated CRM workflows, and building data visualizations that extract business value from large datasets.
            </p>

            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                color: 'var(--primary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Core Areas of Focus:
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.65rem',
              }}
            >
              {domains.map((domain, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <ChevronRight style={{ width: 16, height: 16, color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{domain}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Credentials Card */}
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: 'var(--shadow-glass)',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
              <img 
                src={alvinAboutImg} 
                alt="Alvin Patrick V" 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  objectFit: 'cover',
                  border: '1.5px solid var(--primary)',
                }} 
              />
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Alvin Patrick V</h4>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.15rem' }}>Developer and ML Engineer</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin style={{ width: 18, height: 18, color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>Location</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Chennai, Tamil Nadu, India</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <GraduationCap style={{ width: 18, height: 18, color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>Education</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                    B.Tech in Artificial Intelligence & Data Science
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Loyola Institute of Technology (2023 - 2027)</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Award style={{ width: 18, height: 18, color: 'var(--primary)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>Academic Rating</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Cumulative CGPA: <strong style={{ color: 'var(--primary)' }}>8.9 / 10</strong>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--border-color)',
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              <div>ACADEMIC: ENROLLED</div>
              <div>LANGS: EN, TA</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
