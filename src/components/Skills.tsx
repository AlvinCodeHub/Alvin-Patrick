import React, { useState } from 'react';
import { Code, Brain, Database, Globe, Cpu, Wrench, BarChart2 } from 'lucide-react';

interface Skill {
  name: string;
  summary: string;
  projects: string[];
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('aiml');

  const skillCategories: SkillCategory[] = [
    {
      id: 'aiml',
      name: 'AI & Machine Learning',
      icon: <Brain style={{ width: 16, height: 16 }} />,
      skills: [
        {
          name: 'Machine Learning & NLP',
          summary: 'Developing classifiers, regression models, and text processing pipelines using scikit-learn and NLTK/spaCy.',
          projects: ['Fake News Detection', 'Development Request Dashboard'],
        },
        {
          name: 'Generative AI & LLMs',
          summary: 'Integrating foundation models (Gemini, Llama) using multi-provider AI SDKs for structured generation.',
          projects: ['Lead Qualification AI', 'AI Graph Generator'],
        },
        {
          name: 'Computer Vision',
          summary: 'Object detection models, annotation mapping, and visual dataset preparation using Roboflow.',
          projects: ['YOLOv8 Object Detection'],
        },
      ],
    },
    {
      id: 'programming',
      name: 'Languages',
      icon: <Code style={{ width: 16, height: 16 }} />,
      skills: [
        {
          name: 'Python',
          summary: 'Backend APIs, data analysis notebooks, scraping scripts, and scientific computing.',
          projects: ['Fake News Detection', 'Zoho Projects Dashboard', 'Wipro Intern Task'],
        },
        {
          name: 'JavaScript',
          summary: 'Front-end client interaction, DOM manipulation, asynchronous fetching, and state management.',
          projects: ['WebDOCAI', 'EduVerse AI', 'AI Graph Generator'],
        },
        {
          name: 'SQL',
          summary: 'Relational database schema designing, raw SQL query optimization, and connection pools.',
          projects: ['WebDOCAI', 'EduVerse AI', 'Development Request Dashboard'],
        },
        {
          name: 'HTML5 & CSS3',
          summary: 'Responsive document structures, custom typography, animations, and CSS custom properties.',
          projects: ['WebDOCAI', 'EduVerse AI', 'Personal Portfolio'],
        },
      ],
    },
    {
      id: 'webdev',
      name: 'Web Frameworks',
      icon: <Globe style={{ width: 16, height: 16 }} />,
      skills: [
        {
          name: 'React & Vite',
          summary: 'Building fast client application interfaces with component routers and custom state lifecycles.',
          projects: ['AI Graph Generator', 'In-House Application Platform', 'Personal Portfolio'],
        },
        {
          name: 'FastAPI & Flask',
          summary: 'Developing RESTful APIs, routing middleware, and server microservices with lightweight engines.',
          projects: ['Development Request Dashboard (FastAPI)', 'Fake News Detection (Flask)'],
        },
        {
          name: 'Streamlit',
          summary: 'Quick prototyping of dashboard frontends, chart visualization panels, and database integrations.',
          projects: ['Zoho Projects Analytics Dashboard'],
        },
        {
          name: 'TanStack Start',
          summary: 'Next-generation React server frameworks with structural routing and server function controls.',
          projects: ['In-House Application Platform'],
        },
      ],
    },
    {
      id: 'datasci',
      name: 'Data Science',
      icon: <BarChart2 style={{ width: 16, height: 16 }} />,
      skills: [
        {
          name: 'Pandas & NumPy',
          summary: 'Large-scale file data manipulation, structural indexing, array math, and data cleansing.',
          projects: ['Wipro Intern Task', 'Zoho Projects Analytics Dashboard'],
        },
        {
          name: 'Power BI & BI Analytics',
          summary: 'Constructing interactive database reporting charts, data models, and entity connections.',
          projects: ['AI-Powered Power BI Dashboard'],
        },
      ],
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: <Database style={{ width: 16, height: 16 }} />,
      skills: [
        {
          name: 'PostgreSQL & MySQL',
          summary: 'Designing tables, keys, triggers, and optimizing relational schemas for high concurrency.',
          projects: ['Development Request Dashboard (Postgres)', 'WebDOCAI (MySQL)', 'EduVerse AI (MySQL)'],
        },
        {
          name: 'MongoDB',
          summary: 'Working with NoSQL collections, JSON schemas, document queries, and document updates.',
          projects: ['WebDOCAI'],
        },
        {
          name: 'JSON Database Storage',
          summary: 'Flat-file JSON serialization structures for lightweight static datasets and testing environments.',
          projects: ['In-House Application Platform'],
        },
      ],
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: <Cpu style={{ width: 16, height: 16 }} />,
      skills: [
        {
          name: 'n8n Workflow Automation',
          summary: 'Configuring node pipelines, HTTP endpoints, webhooks, and AI-agent nodes for data flows.',
          projects: ['Lead Qualification AI', 'N8N Workflow Automation'],
        },
        {
          name: 'Ollama & Local LLMs',
          summary: 'Hosting open models locally (Llama 3.2) for secure, offline natural language processing.',
          projects: ['Development Request Dashboard'],
        },
        {
          name: 'Model Context Protocol (MCP)',
          summary: 'Building standard gateways that bridge generative models with enterprise database architectures.',
          projects: ['AI-Powered Power BI Dashboard'],
        },
      ],
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: <Wrench style={{ width: 16, height: 16 }} />,
      skills: [
        {
          name: 'Git & GitHub',
          summary: 'Version tracking, feature branching, pull requests, merge conflicts, and repository control.',
          projects: ['All Academic & Professional Repositories'],
        },
        {
          name: 'VS Code & IDEs',
          summary: 'IDE environment settings, debugger configs, lint rules, and key extension setups.',
          projects: ['Primary development environment for all projects'],
        },
      ],
    },
  ];

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                }}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem',
            transition: 'all 0.3s ease',
            minHeight: '180px',
          }}
        >
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '1.5rem',
                textAlign: 'left',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {skill.name}
              </h4>
              
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                  margin: 0,
                  marginBottom: '1rem',
                  flexGrow: 1,
                }}
              >
                {skill.summary}
              </p>

              {/* Projects Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', width: '100%' }}>
                {skill.projects.map((proj, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      background: '#eff6ff',
                      color: 'var(--primary)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      fontWeight: 600,
                      border: '1px solid rgba(37, 99, 235, 0.08)',
                    }}
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
