import React from 'react';
import { Eye, Terminal, Sparkles } from 'lucide-react';
import alvinResumeImg from '../assets/alvin_3.jpg';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="section" style={{ position: 'relative', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">Curriculum Vitae</h2>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {/* Interactive Viewer Panel */}
          <div
            className="glass-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              background: '#ffffff',
              border: '1px solid var(--border-color)',
            }}
          >
            {/* Control Bar */}
            <div
              style={{
                background: '#f8fafc',
                padding: '0.65rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Terminal style={{ width: 14, height: 14, color: 'var(--primary)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  alvin_patrick_v_resume.pdf (PREVIEW)
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#cbd5e1' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#cbd5e1' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#cbd5e1' }} />
              </div>
            </div>

            {/* Document Body Mockup */}
            <div
              style={{
                height: '400px',
                overflowY: 'auto',
                padding: '2.25rem',
                textAlign: 'left',
                background: '#ffffff',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                lineHeight: 1.5,
              }}
              className="resume-preview-body"
            >
              {/* Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                borderBottom: '1px solid var(--border-color)', 
                paddingBottom: '0.75rem', 
                marginBottom: '1.25rem' 
              }}>
                <div>
                  <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.2rem', color: 'var(--text-primary)' }}>ALVIN PATRICK V</h3>
                  <div style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem' }}>
                    Aspiring AI & Machine Learning Engineer
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '0.4rem' }}>
                    Chennai, Tamil Nadu, India | alvinpatrickofficial@gmail.com | github.com/AlvinCodeHub
                  </div>
                </div>
                <img 
                  src={alvinResumeImg} 
                  alt="Alvin Patrick V" 
                  style={{ 
                    width: '64px', 
                    height: '76px', 
                    borderRadius: '4px', 
                    objectFit: 'cover',
                    border: '1px solid var(--border-color)',
                    marginLeft: '1.5rem',
                  }} 
                />
              </div>

              {/* Summary */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ color: 'var(--primary)', borderBottom: '1px solid #dbeafe', paddingBottom: '0.2rem', marginBottom: '0.4rem', textTransform: 'uppercase', fontSize: '0.82rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  Professional Summary
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  Aspiring AI & Machine Learning Engineer with hands-on experience in full-stack development, AI automation, and intelligent workflow solutions using Python, FastAPI, and n8n. Passionate about building scalable AI-driven applications and leveraging Generative AI to solve real-world business challenges.
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ color: 'var(--primary)', borderBottom: '1px solid #dbeafe', paddingBottom: '0.2rem', marginBottom: '0.4rem', textTransform: 'uppercase', fontSize: '0.82rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  Education
                </h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '0.85rem' }}>
                  <div style={{ color: 'var(--text-primary)' }}>B.Tech in Artificial Intelligence & Data Science</div>
                  <div style={{ color: 'var(--text-muted)' }}>2023 – 2027</div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Loyola Institute of Technology | CGPA: 8.9 / 10
                </div>
              </div>

              {/* Experience */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ color: 'var(--primary)', borderBottom: '1px solid #dbeafe', paddingBottom: '0.2rem', marginBottom: '0.4rem', textTransform: 'uppercase', fontSize: '0.82rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  Experience
                </h4>
                
                {/* ImageGrafix */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '0.85rem' }}>
                    <div style={{ color: 'var(--text-primary)' }}>Developer & ML Engineer Intern</div>
                    <div style={{ color: 'var(--text-muted)' }}>Jun 2026 – Jul 2026</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                    ImageGrafix Enterprises Solutions Pvt. Ltd. | Custom Development Dept
                  </div>
                  <ul style={{ paddingLeft: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <li>Automated lead evaluation workflows using n8n and Google Gemini AI.</li>
                    <li>Developed project analytics dashboard with Zoho REST APIs and OAuth 2.0.</li>
                    <li>Built an NLP Graph Generator application using React and Vite.</li>
                  </ul>
                </div>

                {/* Wipro */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '0.85rem' }}>
                    <div style={{ color: 'var(--text-primary)' }}>Data Entry Intern</div>
                    <div style={{ color: 'var(--text-muted)' }}>Feb 2025 – Mar 2025</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                    Wipro Infrastructure and Technology | Data Operations Division
                  </div>
                  <ul style={{ paddingLeft: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <li>Entered and updated corporate database records, ensuring high data fidelity.</li>
                    <li>Compared digital system log inputs with raw source files for verification.</li>
                    <li>Organized, categorized, and cataloged digital sheets for efficient retrieval.</li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 style={{ color: 'var(--primary)', borderBottom: '1px solid #dbeafe', paddingBottom: '0.2rem', marginBottom: '0.4rem', textTransform: 'uppercase', fontSize: '0.82rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  Skills
                </h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  <strong>Languages:</strong> Python, JavaScript, HTML, CSS, SQL <br />
                  <strong>AI/ML:</strong> Machine Learning, scikit-learn, NLP, TF-IDF, YOLOv8, Generative AI <br />
                  <strong>Automation & BI:</strong> n8n, Power BI, MCP, Google Gemini SDK, Ollama, Llama
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div
              style={{
                background: '#f8fafc',
                padding: '1rem 1.75rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                borderTop: '1px solid var(--border-color)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.82rem',
                }}
              >
                <Sparkles style={{ width: 14, height: 14, color: 'var(--primary)' }} />
                <span>Need a physical copy? Access the official PDF document.</span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href="/Alvin_Patrick_V_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    padding: '0.45rem 1.25rem',
                    fontSize: '0.8rem',
                  }}
                >
                  <Eye style={{ width: 14, height: 14 }} />
                  <span>View PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
