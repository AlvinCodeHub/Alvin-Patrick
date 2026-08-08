import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  summary: string;
  theme: 'primary' | 'secondary';
}

export const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'Python for Data Science',
      issuer: 'NPTEL',
      summary: 'Covered computational scientific programming (Pandas, NumPy) and core classification/regression algorithms.',
      theme: 'primary',
    },
    {
      title: 'Power BI Course',
      issuer: 'Office Master',
      summary: 'Learned schema designing, DAX expression writing, and interactive corporate dashboard structuring.',
      theme: 'secondary',
    },
    {
      title: 'AI Tools Course',
      issuer: 'Be10X',
      summary: 'Explored prompt tuning patterns and generative automation workflows for workplace operations.',
      theme: 'primary',
    },
    {
      title: 'Digital Marketing with AI',
      issuer: 'IIDE',
      summary: 'Studied search index optimization algorithms, AI copywriting tools, and analytical campaign graphs.',
      theme: 'secondary',
    },
    {
      title: 'Web Development Training',
      issuer: 'Zeno Technologies',
      summary: 'Full-stack engineering in frontend layout structures, DOM events, and client router integrations.',
      theme: 'primary',
    },
  ];

  return (
    <section id="certifications" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">Certifications & Training</h2>

        <div
          className="certifications-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '1.25rem',
            marginTop: '2rem',
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`glass-card ${cert.theme === 'secondary' ? 'purple-theme' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.5rem',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  background: cert.theme === 'primary' ? '#eff6ff' : '#f5f3ff',
                  border: `1px solid ${cert.theme === 'primary' ? '#dbeafe' : '#e0e7ff'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Award style={{ width: 18, height: 18, color: cert.theme === 'primary' ? 'var(--primary)' : 'var(--secondary)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {cert.title}
                </h3>
                
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <CheckCircle2 style={{ width: 12, height: 12, color: cert.theme === 'primary' ? 'var(--primary)' : 'var(--secondary)' }} />
                  <span>{cert.issuer}</span>
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4,
                    margin: 0,
                    marginTop: '0.25rem',
                  }}
                >
                  {cert.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .certifications-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 650px) {
          .certifications-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
