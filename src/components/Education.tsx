import React from 'react';
import { GraduationCap, Calendar, Award, Languages } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">Education & Profile</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
          className="edu-grid"
        >
          {/* Academic Card */}
          <div className="glass-card" style={{ padding: '2.25rem', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '6px',
                  background: '#eff6ff',
                  border: '1px solid #dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GraduationCap style={{ width: 22, height: 22, color: 'var(--primary)' }} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.15rem' }}>
                  B.Tech — Artificial Intelligence and Data Science
                </h3>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', fontWeight: 600 }}>
                  Loyola Institute of Technology
                </h4>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}>
                <Calendar style={{ width: 14, height: 14, color: 'var(--primary)' }} />
                <span>2023 – 2027</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}>
                <Award style={{ width: 14, height: 14, color: 'var(--primary)' }} />
                <span>CGPA: 8.9 / 10</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.92rem', margin: 0 }}>
              Undergoing rigorous academic and practical training in algorithmic designs, probabilistic models, database schema configurations, machine learning theory, and statistical analytics. Project works focus on applying AI pipelines to automation, natural language processing, and clinical health tracking systems.
            </p>
          </div>

          {/* Languages Card */}
          <div
            className="glass-card purple-theme"
            style={{
              padding: '2.25rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '6px',
                  background: '#f5f3ff',
                  border: '1px solid #e0e7ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Languages style={{ width: 20, height: 20, color: 'var(--secondary)' }} />
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '0.15rem' }}>
                  Communication Languages
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LANG_CODE_HANDSHAKE</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>English</span>
                  <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Professional Fluency</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: '#f1f5f9', borderRadius: '100px' }}>
                  <div style={{ width: '90%', height: '100%', background: 'var(--secondary)', borderRadius: '100px' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Tamil</span>
                  <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Native / Bilingual</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: '#f1f5f9', borderRadius: '100px' }}>
                  <div style={{ width: '100%', height: '100%', background: 'var(--secondary)', borderRadius: '100px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
