import React from 'react';
import { Calendar, Briefcase, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import imageGrafixLogo from '../assets/imagegrafix_logo.png';
import wiproLogo from '../assets/wipro_logo.png';

interface ExperienceItem {
  company: string;
  role: string;
  department: string;
  period: string;
  location: string;
  logo: string;
  responsibilities: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'ImageGrafix Enterprises Solutions Pvt. Ltd.',
      role: 'Developer & ML Engineer Intern',
      department: 'Custom Development Department',
      period: '18 Jun 2026 — 17 Jul 2026',
      location: 'Chennai, India',
      logo: imageGrafixLogo,
      responsibilities: [
        'Automated company lead evaluation workflows using n8n, Google Gemini AI, and custom web scraping scripts.',
        'Developed a Streamlit-based project analytics dashboard with secure OAuth 2.0 integration for Zoho Projects.',
        'Built an NLP-based AI Graph Generator using React and Vite, integrating multi-provider AI SDKs to render graphs dynamically from user queries.',
        'Collaborated in the Custom Development Department to develop in-house enterprise web applications and platform tools.',
        'Designed natural-language interfaces for Microsoft Power BI models using Model Context Protocol (MCP) services.',
      ],
    },
    {
      company: 'Wipro Infrastructure and Technology',
      role: 'Data Entry Intern',
      department: 'Data Operations Division',
      period: '01 Feb 2025 — 31 Mar 2025',
      location: 'Chennai, India (Remote)',
      logo: wiproLogo,
      responsibilities: [
        'Accurately entered and updated corporate database records, ensuring high data fidelity.',
        'Verified information accuracy by comparing digital input logs with raw source documents.',
        'Organized, sorted, and cataloged digital records for efficient cross-department retrieval.',
        'Maintained strict compliance with company data security and confidentiality standards.',
      ],
    },
  ];

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
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
    <section id="experience" className="section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card purple-theme" style={{ padding: '2.25rem', textAlign: 'left' }}>
              {/* Header info */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '1.25rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-heading)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.25rem',
                      fontWeight: 700,
                    }}
                  >
                    <Briefcase style={{ color: 'var(--secondary)', width: 22, height: 22 }} />
                    <span>{exp.role}</span>
                  </h3>
                  
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                    }}
                  >
                    <Building style={{ width: 15, height: 15 }} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Logo & Duration */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.5rem',
                  }}
                >
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} Logo`} 
                    style={{ 
                      height: '52px', 
                      maxWidth: '160px',
                      objectFit: 'contain',
                      background: '#ffffff',
                      padding: '2px',
                      borderRadius: '4px'
                    }} 
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '0.15rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <Calendar style={{ width: 14, height: 14 }} />
                      <span>{exp.period}</span>
                    </span>
                    <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Department info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  background: '#f8fafc',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  width: 'fit-content',
                }}
              >
                <ShieldCheck style={{ width: 15, height: 15, color: 'var(--secondary)' }} />
                <span>Department: {exp.department}</span>
              </div>

              {/* Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        marginTop: '9px',
                        flexShrink: 0,
                      }}
                    />
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {resp}
                    </p>
                  </div>
                ))}
              </div>

              {/* View Projects button linking to projects section (rendered on last item) */}
              {index === 0 && (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={handleScrollToProjects}
                    className="btn btn-secondary"
                    style={{
                      color: 'var(--secondary)',
                      borderColor: 'var(--secondary)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(79, 70, 229, 0.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span>View Professional Projects</span>
                    <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
