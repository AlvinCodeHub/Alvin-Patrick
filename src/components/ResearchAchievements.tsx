import React from 'react';
import { Trophy, Award, BookOpen, Sparkles } from 'lucide-react';

export const ResearchAchievements: React.FC = () => {
  return (
    <section id="research" className="section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">Research & Achievements</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="research-grid"
        >
          {/* Left Column: Paper Details */}
          <div style={{ textAlign: 'left' }}>
            <div
              className="badge"
              style={{
                marginBottom: '1rem',
                gap: '0.4rem',
                color: 'var(--primary)',
                background: '#eff6ff',
                borderColor: '#dbeafe',
                fontWeight: 600,
              }}
            >
              <BookOpen style={{ width: 13, height: 13 }} />
              <span>NLP & MACHINE LEARNING RESEARCH</span>
            </div>

            <h3
              style={{
                fontSize: '1.85rem',
                lineHeight: 1.25,
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Web-Based Fake News Detection Using NLP
            </h3>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              An automated media veracity classifier using Natural Language Processing (NLP) preprocessing pipelines, TF-IDF vectorization, and supervised machine learning algorithms. The final deployment provides a web-based client interface for instantaneous classification feedback.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: '#f8fafc',
                  border: '1px solid var(--border-color)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '6px',
                }}
              >
                <Award style={{ color: 'var(--primary)', width: 22, height: 22, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Methodology Comparison</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    Evaluated SVM, Naive Bayes, and Passive Aggressive Classifier architectures for classification boundaries.
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: '#f8fafc',
                  border: '1px solid var(--border-color)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '6px',
                }}
              >
                <Sparkles style={{ color: 'var(--primary)', width: 22, height: 22, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Preprocessing Rigor</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    Employed spaCy/NLTK for tokenization, stop-word cleanups, and lemmatization parameters.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Award Badges */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Award 1 */}
            <div
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                borderLeft: '4px solid var(--primary)',
                background: '#ffffff',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#eff6ff',
                  border: '1px solid #dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Trophy style={{ width: 20, height: 20, color: 'var(--primary)' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.15rem',
                    fontWeight: 700,
                  }}
                >
                  Best Paper Award
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                  International Conference on AI & NLP Systems
                </p>
              </div>
            </div>

            {/* Award 2 */}
            <div
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                borderLeft: '4px solid var(--secondary)',
                background: '#ffffff',
                padding: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#f5f3ff',
                  border: '1px solid #e0e7ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Trophy style={{ width: 20, height: 20, color: 'var(--secondary)' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.15rem',
                    fontWeight: 700,
                  }}
                >
                  Best Paper Award
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                  National Conference on Computational Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .research-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
