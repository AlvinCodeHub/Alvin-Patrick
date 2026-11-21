import React, { useState } from 'react';
import { Trophy, Award, BookOpen, Sparkles, Sun, Moon } from 'lucide-react';
import { WarpCarousel, type WarpCard } from '@/components/ui/warp-carousel';
import bestPaperCert from '@/assets/achievements/best-paper-cert.jpg';
import hackathonCert from '@/assets/achievements/hackathon-cert.jpg';
import airIndiaCert from '@/assets/achievements/air-india-cert.jpg';
import reskillCert from '@/assets/achievements/reskill-cert.jpg';

interface AchievementCredential {
  title: string;
  organization: string;
  date: string;
  location: string;
  badge: string;
  description: string;
  color: string;
  card: WarpCard;
}

const ACHIEVEMENT_CREDENTIALS: AchievementCredential[] = [
  {
    title: 'Best Paper Award',
    organization: "ICSIDE'26 · St. Peter's College of Engineering and Technology",
    date: '10 Apr 2026',
    location: 'Chennai (Online Mode)',
    badge: '1st Place Research Excellence',
    description: 'Awarded for outstanding research presentation on "Web Based Fake News Detector Using NLP" evaluated against competing submissions across academia.',
    color: '#f59e0b',
    card: {
      title: 'Best Paper\nAward',
      value: '01',
      unit: 'st',
      footer: "ICSIDE'26 · St. Peter's College, Chennai",
      image: bestPaperCert,
      mesh: [
        '#422006', '#713f12', '#ca8a04', '#713f12', '#422006', '#291503',
        '#713f12', '#ca8a04', '#eab308', '#ca8a04', '#713f12', '#422006',
        '#a16207', '#eab308', '#fde047', '#facc15', '#a16207', '#713f12',
        '#ca8a04', '#fde047', '#fef08a', '#fde047', '#ca8a04', '#a16207',
        '#713f12', '#eab308', '#fde047', '#eab308', '#713f12', '#422006',
        '#422006', '#a16207', '#ca8a04', '#a16207', '#422006', '#291503',
        '#291503', '#422006', '#713f12', '#422006', '#291503', '#1c0d02',
      ],
      numeral: ['#ffffff', '#fef08a'],
      glow: '#ca8a04',
      detail: 'ring',
      accent: '#facc15',
    },
  },
  {
    title: 'National Hackathon — 3rd Place',
    organization: 'Xavier Institute for Research & Development',
    date: '18–19 Apr 2026',
    location: 'National Innovation Challenges',
    badge: 'National Innovation Podium',
    description: 'Secured 3rd place in a competitive national-level engineering hackathon building full-stack and AI solutions within an intense 36-hour sprint.',
    color: '#ef4444',
    card: {
      title: 'National Hackathon\nThird Place',
      value: '03',
      unit: 'rd',
      footer: "Innovation Challenges '26 · Xavier Inst.",
      image: hackathonCert,
      mesh: [
        '#450a0a', '#7f1d1d', '#991b1b', '#7f1d1d', '#450a0a', '#280505',
        '#7f1d1d', '#991b1b', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a',
        '#991b1b', '#dc2626', '#ef4444', '#dc2626', '#991b1b', '#7f1d1d',
        '#dc2626', '#f87171', '#fca5a5', '#f87171', '#dc2626', '#991b1b',
        '#7f1d1d', '#dc2626', '#ef4444', '#dc2626', '#7f1d1d', '#450a0a',
        '#450a0a', '#991b1b', '#b91c1c', '#991b1b', '#450a0a', '#280505',
        '#280505', '#450a0a', '#7f1d1d', '#450a0a', '#280505', '#170303',
      ],
      numeral: ['#ffffff', '#fee2e2'],
      glow: '#dc2626',
      detail: 'cross',
      accent: '#f87171',
      labels: ['XAVIER', '2026', 'INNOVATION'],
    },
  },
  {
    title: 'Campus Ambassador — Air India',
    organization: 'Air India × Internshala',
    date: '2025–2026',
    location: 'Campus Outreach Program',
    badge: 'Corporate Brand Ambassador',
    description: 'Selected as collegiate ambassador representing Air India in joint partnership with Internshala, driving youth aviation and career initiatives.',
    color: '#f43f5e',
    card: {
      title: 'Campus Ambassador\nAir India',
      value: 'AI',
      unit: '✈',
      footer: 'Air India × Internshala Collaboration',
      image: airIndiaCert,
      mesh: [
        '#4c0519', '#881337', '#be123c', '#881337', '#4c0519', '#2b030e',
        '#881337', '#be123c', '#e11d48', '#be123c', '#881337', '#4c0519',
        '#be123c', '#e11d48', '#f43f5e', '#e11d48', '#be123c', '#881337',
        '#e11d48', '#fb7185', '#fecdd3', '#fb7185', '#e11d48', '#be123c',
        '#881337', '#e11d48', '#f43f5e', '#e11d48', '#881337', '#4c0519',
        '#4c0519', '#be123c', '#e11d48', '#be123c', '#4c0519', '#2b030e',
        '#2b030e', '#4c0519', '#881337', '#4c0519', '#2b030e', '#190208',
      ],
      numeral: ['#ffffff', '#ffe4e6'],
      glow: '#e11d48',
      detail: 'slider',
      accent: '#fb7185',
      labels: ['AIR INDIA', 'INTERNSHALA'],
    },
  },
  {
    title: 'Ecosystem Ambassador — ReSkill',
    organization: "ReSkill · India's Leading Hackathon Network",
    date: '2025–2026',
    location: 'National Developer Community',
    badge: 'Community Developer Lead',
    description: "Championing developer hackathons, technical empowerment workshops, and student developer outreach across India's largest hackathon network.",
    color: '#3b82f6',
    card: {
      title: 'Ecosystem Ambassador\nReSkill Network',
      value: 'RS',
      unit: '⚡',
      footer: "India's Premier Hackathon Ecosystem",
      image: reskillCert,
      mesh: [
        '#0b1e3a', '#172554', '#1e40af', '#172554', '#0b1e3a', '#060f1d',
        '#172554', '#1e40af', '#1d4ed8', '#1e40af', '#172554', '#0b1e3a',
        '#1e40af', '#2563eb', '#3b82f6', '#2563eb', '#1e40af', '#172554',
        '#2563eb', '#60a5fa', '#bfdbfe', '#60a5fa', '#2563eb', '#1e40af',
        '#172554', '#2563eb', '#3b82f6', '#2563eb', '#172554', '#0b1e3a',
        '#0b1e3a', '#1e40af', '#2563eb', '#1e40af', '#0b1e3a', '#060f1d',
        '#060f1d', '#0b1e3a', '#172554', '#0b1e3a', '#060f1d', '#03080e',
      ],
      numeral: ['#ffffff', '#dbeafe'],
      glow: '#2563eb',
      detail: 'wave',
      accent: '#60a5fa',
    },
  },
];

const CARDS: WarpCard[] = ACHIEVEMENT_CREDENTIALS.map((c) => c.card);

export const ResearchAchievements: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const activeCred = ACHIEVEMENT_CREDENTIALS[activeIndex] || ACHIEVEMENT_CREDENTIALS[0];

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
                  ICSIDE’26 · St. Peter’s College of Engineering and Technology, 10 Apr 2026
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
                  Third Place — National Hackathon
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Innovation Challenges 2026 · Xavier Institute for Research and Development, 18–19 Apr 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Warp Carousel Achievements Showcase */}
        <div
          style={{
            marginTop: '3.5rem',
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: isDark ? '#080c14' : '#f8fafc',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
            boxShadow: isDark ? '0 25px 60px -15px rgba(0, 0, 0, 0.35)' : '0 20px 45px -10px rgba(0, 0, 0, 0.08)',
            transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* 3D Warp Carousel Stage */}
          <div
            style={{
              height: 'clamp(460px, 62vh, 580px)',
              width: '100%',
              position: 'relative',
            }}
          >
            <WarpCarousel
              cards={CARDS}
              index={activeIndex}
              onIndexChange={setActiveIndex}
              autoplay={true}
              interval={5.5}
              background={isDark ? '#080c14' : '#f1f5f9'}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Active Card Status Bar */}
          <div
            style={{
              padding: '1.25rem 1.75rem',
              borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
              background: isDark ? 'rgba(10, 15, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
          >
            {/* Active Details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: `${activeCred.color}18`,
                  border: `1px solid ${activeCred.color}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: activeCred.color,
                  fontWeight: 800,
                  fontSize: '0.95rem',
                }}
              >
                {activeCred.card.value}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <h4 style={{ color: isDark ? '#ffffff' : '#0f172a', fontSize: '1rem', fontWeight: 600, margin: 0 }}>
                    {activeCred.title}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                      backgroundColor: `${activeCred.color}22`,
                      color: activeCred.color,
                      border: `1px solid ${activeCred.color}44`,
                    }}
                  >
                    {activeCred.badge}
                  </span>
                </div>
                <p style={{ color: isDark ? 'rgba(255, 255, 255, 0.55)' : '#64748b', fontSize: '0.8rem', margin: '0.2rem 0 0 0' }}>
                  {activeCred.organization} • {activeCred.date}
                </p>
              </div>
            </div>

            {/* Quick Switch Buttons & Theme Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
              {ACHIEVEMENT_CREDENTIALS.map((cred, idx) => (
                <button
                  key={cred.title}
                  onClick={() => setActiveIndex(idx)}
                  title={cred.title}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: activeIndex === idx ? `${cred.color}28` : isDark ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9',
                    color: activeIndex === idx ? (isDark ? '#ffffff' : cred.color) : isDark ? 'rgba(255, 255, 255, 0.45)' : '#64748b',
                    border: activeIndex === idx ? `1px solid ${cred.color}88` : isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                  }}
                >
                  0{idx + 1}
                </button>
              ))}

              <button
                onClick={toggleTheme}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  marginLeft: '0.5rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#f1f5f9',
                  color: isDark ? '#ffffff' : '#0f172a',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #cbd5e1',
                }}
              >
                {isDark ? <Sun style={{ width: 13, height: 13, color: '#facc15' }} /> : <Moon style={{ width: 13, height: 13, color: '#6366f1' }} />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
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
