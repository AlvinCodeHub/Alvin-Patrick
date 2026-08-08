import React, { useState } from 'react';
import { Layers, X, CheckCircle, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  type: 'Professional' | 'Academic';
  source: string;
  tags: string[];
  summary: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  contribution: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const projectsData: Project[] = [
    {
      id: 'lead-qual',
      title: 'Lead Qualification AI',
      category: 'AI / Automation',
      type: 'Professional',
      source: 'ImageGrafix Enterprises Solutions',
      tags: ['n8n', 'Gemini AI', 'Web Scraping', 'Automation'],
      summary: 'AI-powered B2B lead scoring workflow designed to automate prospect grading.',
      description: 'An automated cognitive pipeline that triggers on new lead ingestion, extracts company website contents using advanced scikit scrapers, evaluates them against vendor parameters with Gemini 1.5 Pro models, and syncs graded profiles with the CRM.',
      problem: 'Sales departments wasted dozens of weekly hours manually evaluating target lead URLs and grading them, leading to delayed follow-ups and inconsistent qualification parameters.',
      solution: 'Constructed an automated n8n workflow that triggers upon lead ingestion, crawls prospect domains, extracts clean structural textual assets, and passes them to LLMs for grading reviews.',
      features: [
        'Multi-stage scraping loops with Puppeteer cookie handles',
        'Structured Google Gemini JSON schemas mapping compatibility ratings',
        'Lead scoring matrices based on customer criteria',
        'Real-time CRM database synchronization and Discord notifications',
      ],
      contribution: 'Designed and deployed the scraping nodes, prompt structured schemas, scoring logic, and CRM connection modules in n8n.',
      technologies: ['n8n', 'Google Gemini 1.5 Pro', 'Puppeteer', 'REST APIs', 'JSON Schema'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'zoho-dashboard',
      title: 'Zoho Projects Analytics Dashboard',
      category: 'Data Analytics',
      type: 'Professional',
      source: 'ImageGrafix Enterprises Solutions',
      tags: ['Streamlit', 'OAuth 2.0', 'Zoho API', 'Python'],
      summary: 'Interactive analytical platform offering real-time progress metrics and Zoho project data.',
      description: 'A data dashboard pulling live progress metrics, milestone delivery charts, and developer task metrics directly from Zoho Projects using secure OAuth 2.0 validation.',
      problem: 'Management lacked project visualization and developer velocity trends, relying on manual data extractions from the default Zoho Projects UI.',
      solution: 'Built a Python Streamlit application utilizing Zoho Projects REST APIs. Configured standard OAuth 2.0 authorization flows to secure data access and refresh tokens.',
      features: [
        'Secure OAuth 2.0 token handshakes with automated refresh loops',
        'Interactive project milestone trackers and Gantt charts using Plotly',
        'Developer task-completion velocity and statistics reporting',
        'Pandas caching modules to optimize Zoho API request limits',
      ],
      contribution: 'Implemented the OAuth 2.0 token handshake and refresh routines, designed the visual dashboard components in Streamlit, and mapped the API JSON responses into Pandas DataFrames.',
      technologies: ['Streamlit', 'Python', 'Zoho Projects API', 'OAuth 2.0', 'Pandas', 'Plotly'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'graph-gen',
      title: 'AI-Powered Graph Generator',
      category: 'Generative AI',
      type: 'Professional',
      source: 'ImageGrafix Enterprises Solutions',
      tags: ['React', 'Vite', 'Multi-AI SDK', 'Data Viz'],
      summary: 'NLP-based web app generating interactive data visualizations from simple natural language prompts.',
      description: 'A modern React interface where users input natural language queries (e.g. "plot sales over the last quarter by region") and receive responsive charts.',
      problem: 'Business users without SQL or Charting library experience struggled to create custom visual charts on the fly.',
      solution: 'Constructed a Vite + React application that routes user text inputs to multi-provider AI models (Gemini, Llama) via backend APIs. The models write clean configurations, which the frontend renders.',
      features: [
        'Text-to-chart generation for multiple chart types (Bar, Line, Pie, Scatter)',
        'Supports multi-provider AI configurations for model fallback and cost optimization',
        'Interactive charts with tooltips, legend toggle, and export capability',
        'Responsive sidebar history and prompt suggestion templates',
      ],
      contribution: 'Built the frontend React interface, chart rendering logic, prompt templates to output reliable chart objects, and model router SDK controls.',
      technologies: ['React', 'Vite', 'TypeScript', 'Recharts', 'Multi-Provider AI SDKs', 'CSS Grid'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'mcp-powerbi',
      title: 'AI-Powered Power BI Dashboard',
      category: 'Power BI',
      type: 'Professional',
      source: 'ImageGrafix Enterprises Solutions',
      tags: ['Power BI', 'MCP Server', 'Generative AI', 'BI'],
      summary: 'Conversational natural-language interface for queries and analytics over Power BI models.',
      description: 'An AI chatbot assistant connected to Power BI semantic models through a Model Context Protocol (MCP) server, allowing users to ask database questions in plain English.',
      problem: 'Executive teams found navigating multiple Power BI dashboards complex and wanted an easy chat-like lookup method.',
      solution: 'Configured a custom Model Context Protocol (MCP) server that links an LLM to Power BI tables, relationships, and queries. The chatbot interprets queries, executes Dax queries, and shows charts.',
      features: [
        'Power BI connection using semantic models and query engines',
        'MCP tool definitions mapping natural language questions to database queries',
        'Conversation memory retaining contextual dashboards',
        'Dynamic table rendering and natural language analytics summarization',
      ],
      contribution: 'Developed the MCP tool definitions for DAX queries, structured the semantic metadata mappings, and built the chat interface.',
      technologies: ['Power BI Desktop', 'Model Context Protocol (MCP)', 'Python', 'FastAPI', 'Llama 3'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'n8n-automation',
      title: 'N8N Workflow Automation Engine',
      category: 'Automation',
      type: 'Professional',
      source: 'ImageGrafix Enterprises Solutions',
      tags: ['n8n', 'Webhooks', 'REST APIs', 'HTML Scraping'],
      summary: 'Custom backend automation pipeline connecting scrapers, webhooks, and AI analysis models.',
      description: 'An automated backend engine processing webhooks, parsing HTML payloads, scraping customer web pages, and piping data into AI agents.',
      problem: 'Connecting discrete customer touchpoints, web scrapers, and local LLMs required complex, brittle custom scripts.',
      solution: 'Designed and deployed n8n workflow systems. Workflows listen to webhooks, scrape company URLs, extract clean HTML contents, perform local LLM analysis, and dispatch email alerts.',
      features: [
        'Webhook listeners for zero-latency automation triggers',
        'Clean text extraction from complex, script-heavy web pages',
        'Error handling and retry nodes to prevent pipeline failure',
        'Automated notifications via Slack, email, and discord channels',
      ],
      contribution: 'Configured the webhook configurations, HTML extraction loops, and API payloads for local Llama endpoints.',
      technologies: ['n8n', 'REST Webhooks', 'HTML Extraction', 'HTTP Nodes', 'RegEx'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'inhouse-platform',
      title: 'In-House Application Platform',
      category: 'Web Development',
      type: 'Professional',
      source: 'ImageGrafix Enterprises Solutions',
      tags: ['React', 'TanStack Start', 'JSON Storage', 'TypeScript'],
      summary: 'Internal enterprise dashboard hosting organizational productivity apps and tools.',
      description: 'A modular, high-speed corporate portal developed with React and TanStack Start, featuring JSON-based local filesystems to serve utility modules.',
      problem: 'Company employees needed a unified, high-performance portal to access localized tools without database overhead.',
      solution: 'Created an internal application platform utilizing React + TanStack Start. Employed lightweight JSON-based filesystems for high-performance reading and writing of tool configs.',
      features: [
        'TanStack Start SSR rendering for instant loading speeds',
        'JSON storage model for configurations and utility access states',
        'Modular architecture allowing sub-developers to plug in micro-apps',
        'High-contrast glassmorphic design system to fit modern workspaces',
      ],
      contribution: 'Co-developed the routing architecture, built the JSON local storage APIs, and implemented the responsive dashboard panel UI.',
      technologies: ['React', 'TanStack Start', 'TypeScript', 'JSON FS API', 'Vite'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'dev-request-db',
      title: 'Development Request Dashboard',
      category: 'Full Stack',
      type: 'Professional',
      source: 'ImageGrafix Enterprises Solutions (Associated Workstream)',
      tags: ['FastAPI', 'PostgreSQL', 'React', 'Ollama', 'Llama 3.2'],
      summary: 'Full-stack platform tracking request backlogs, drawing graphs, and showing local AI summaries.',
      description: 'A development management dashboard that records request logs in PostgreSQL, generates metrics reports with Recharts, and produces summaries via local Ollama Llama 3.2 models.',
      problem: 'Lack of tracking for developmental feature requests, with no quick way to summarize request queues or review trends.',
      solution: 'Engineered a full-stack platform. The Python FastAPI backend handles CRUD database queries, while a React frontend displays requests and renders Recharts graph reports. A local Llama 3.2 model provides summaries.',
      features: [
        'FastAPI REST endpoints with PostgreSQL databases using SQLAlchemy',
        'Local Ollama Llama 3.2 integration for on-premise AI request grouping and summarization',
        'Interactive Recharts dashboard charts',
        'Full CRUD operations for feature request tickets',
      ],
      contribution: 'Wrote the FastAPI endpoints, SQLAlchemy schemas, Ollama model prompts, and the Recharts layout component.',
      technologies: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'React', 'Ollama', 'Llama 3.2 (3B)', 'Recharts'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'fake-news',
      title: 'Web Fake News Detection NLP',
      category: 'AI & ML',
      type: 'Academic',
      source: 'Research & Paper (Award Winner)',
      tags: ['Python', 'scikit-learn', 'TF-IDF', 'NLP', 'Flask'],
      summary: 'Machine learning NLP classifier detecting fake news articles with a Flask web portal.',
      description: 'An academic research project implementing machine learning models to classify news articles based on text analysis, deploying the final model as a Flask web tool.',
      problem: 'Proliferation of false online media articles requires automated classifiers capable of analyzing textual veracity without heavy database query lookups.',
      solution: 'Used NLP tokenization, stop-word filtering, and TF-IDF vectorization to convert news texts. Trained and compared Naive Bayes, Passive Aggressive, and SVM classifiers to achieve optimum accuracy.',
      features: [
        'Best Paper Award winner at both International and National conferences',
        'TF-IDF text vectorization pipeline using NLTK and spaCy',
        'Real-time prediction web app built in Flask',
        'Comparative analytics charts evaluating model accuracies',
      ],
      contribution: 'Performed full dataset preprocessing, model training, evaluation metrics, and wrote the Flask frontend interface.',
      technologies: ['Python', 'scikit-learn', 'TF-IDF', 'NLTK', 'spaCy', 'Flask', 'Pandas'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'webdocai',
      title: 'WebDOCAI Healthcare Platform',
      category: 'AI & ML',
      type: 'Academic',
      source: 'Academic Project',
      tags: ['Python', 'MySQL', 'MongoDB', 'JavaScript', 'HTML/CSS'],
      summary: 'AI healthcare and wellness platform featuring symptom guidance and health tracking.',
      description: 'A healthcare portal matching patient symptoms with AI recommendation tables, backed by relational SQL and document-based MongoDB storage.',
      problem: 'Patients need quick, non-diagnostic symptom explanations and health logging without scrolling through generic web searches.',
      solution: 'Designed a healthcare console matching user inputs against a database of symptoms and doctor mappings, with interactive health metrics tracking pages.',
      features: [
        'AI symptom classification engine',
        'Dual-database setup (MySQL for patients, MongoDB for unstructured logs)',
        'Sleek wellness-tracking analytics panel',
        'User dashboard for health profile maintenance',
      ],
      contribution: 'Designed the MySQL/MongoDB databases, developed the symptom classification backend in Python, and styled the wellness charts.',
      technologies: ['Python', 'MySQL', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
    {
      id: 'eduverse',
      title: 'EduVerse AI Immersive Learning',
      category: 'AI & ML',
      type: 'Academic',
      source: 'Academic Project',
      tags: ['Python', 'JavaScript', 'MySQL', 'EdTech'],
      summary: 'Interactive learning platform using AI content recommendations and personalized study tools.',
      description: 'An educational application mapping student study history and suggesting personalized curriculum tracks and quiz sessions.',
      problem: 'Standard e-learning platforms use static syllabi, neglecting individual learning speeds and weak topics.',
      solution: 'Developed an e-learning platform that scores student quiz performances and recommends revision topics based on historical logs.',
      features: [
        'Student profile logs tracking study hours and quiz scores',
        'AI content recommendations matching weak areas',
        'Interactive testing panels and study metrics dashboards',
        'Responsive layout for classroom tablet use',
      ],
      contribution: 'Programmed the recommendation engine, built the database schemas, and structured the web dashboard templates.',
      technologies: ['Python', 'JavaScript', 'HTML5/CSS3', 'MySQL'],
      githubUrl: 'https://github.com/AlvinCodeHub',
    },
  ];

  const filterCategories = [
    'All',
    'Professional',
    'Academic',
    'AI & ML',
    'Generative AI',
    'Automation',
    'Data Analytics',
    'Web Development',
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Professional') return p.type === 'Professional';
    if (filter === 'Academic') return p.type === 'Academic';
    if (filter === 'AI & ML') return p.category.includes('AI & ML') || p.tags.includes('Machine Learning');
    if (filter === 'Generative AI') return p.category.includes('Generative AI') || p.tags.includes('Gemini AI') || p.tags.includes('Ollama');
    if (filter === 'Automation') return p.category.includes('Automation') || p.tags.includes('Automation') || p.tags.includes('n8n');
    if (filter === 'Data Analytics') return p.category.includes('Data Analytics') || p.category.includes('Power BI') || p.tags.includes('Data Viz');
    if (filter === 'Web Development') return p.category.includes('Web Development') || p.category.includes('Full Stack') || p.tags.includes('React');
    return true;
  });

  return (
    <section id="projects" className="section" style={{ position: 'relative', backgroundColor: '#f8fafc' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
          }}
        >
          {filterCategories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                onMouseEnter={() => setHoveredTab(cat)}
                onMouseLeave={() => setHoveredTab(null)}
                className="btn"
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.8rem',
                  borderRadius: '6px',
                  background: isActive ? 'var(--primary)' : hoveredTab === cat ? '#eff6ff' : '#ffffff',
                  color: isActive ? '#ffffff' : hoveredTab === cat ? 'var(--primary)' : 'var(--text-secondary)',
                  border: `1px solid ${isActive ? 'var(--primary)' : hoveredTab === cat ? 'var(--primary)' : 'var(--border-color)'}`,
                  boxShadow: 'var(--shadow-glass)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '1.5rem',
            transition: 'all 0.3s ease',
          }}
        >
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredCardIndex === index;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  padding: '1.75rem',
                  textAlign: 'left',
                  background: '#ffffff',
                  border: isHovered 
                    ? `1px solid ${project.type === 'Professional' ? 'var(--secondary)' : 'var(--primary)'}` 
                    : '1px solid var(--border-color)',
                  borderRadius: '12px',
                  boxShadow: isHovered 
                    ? `0 12px 24px -5px ${project.type === 'Professional' ? 'rgba(79, 70, 229, 0.08)' : 'rgba(37, 99, 235, 0.08)'}` 
                    : 'var(--shadow-glass)',
                  transform: isHovered ? 'translateY(-6px)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
              >
                {/* Category & Type */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: project.type === 'Professional' ? 'var(--secondary)' : 'var(--primary)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {project.type} // {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {project.title}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: '1.25rem',
                    flexGrow: 1,
                  }}
                >
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`badge ${project.type === 'Professional' ? 'purple' : ''}`} 
                      style={{ 
                        fontSize: '0.65rem',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', alignSelf: 'center', fontFamily: 'var(--font-mono)' }}>
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    borderColor: isHovered 
                      ? project.type === 'Professional' ? 'var(--secondary)' : 'var(--primary)'
                      : 'var(--border-color)',
                    color: isHovered 
                      ? project.type === 'Professional' ? 'var(--secondary)' : 'var(--primary)'
                      : 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span>View Case Study</span>
                  <Layers style={{ width: 14, height: 14 }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1100,
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={() => setActiveProject(null)}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '780px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.25rem',
              textAlign: 'left',
              position: 'relative',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              background: '#ffffff',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveProject(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#f8fafc',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                padding: '0.35rem',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            >
              <X style={{ width: 16, height: 16 }} />
            </button>

            {/* Modal Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: activeProject.type === 'Professional' ? 'var(--secondary)' : 'var(--primary)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {activeProject.type} Project // {activeProject.source}
                </span>
                <h3
                  style={{
                    fontSize: '1.85rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    marginTop: '0.25rem',
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {activeProject.title}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {activeProject.technologies.map((tech, idx) => (
                    <span key={idx} className={`badge ${activeProject.type === 'Professional' ? 'purple' : ''}`} style={{ fontSize: '0.65rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.4rem', fontSize: '1.05rem', fontWeight: 700 }}>Project Overview</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{activeProject.description}</p>
              </div>

              {/* Problem / Solution Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="modal-subgrid">
                <div
                  style={{
                    background: '#fcf8f8',
                    border: '1px solid #f5e2e2',
                    borderRadius: '6px',
                    padding: '1.15rem',
                  }}
                >
                  <h5 style={{ color: '#b91c1c', marginBottom: '0.4rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                    <X style={{ width: 14, height: 14 }} />
                    <span>The Challenge</span>
                  </h5>
                  <p style={{ fontSize: '0.85rem', color: '#7f1d1d', margin: 0, lineHeight: 1.4 }}>{activeProject.problem}</p>
                </div>

                <div
                  style={{
                    background: '#f6fdf8',
                    border: '1px solid #e1f5e7',
                    borderRadius: '6px',
                    padding: '1.15rem',
                  }}
                >
                  <h5 style={{ color: '#15803d', marginBottom: '0.4rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                    <CheckCircle style={{ width: 14, height: 14 }} />
                    <span>The Solution</span>
                  </h5>
                  <p style={{ fontSize: '0.85rem', color: '#14532d', margin: 0, lineHeight: 1.4 }}>{activeProject.solution}</p>
                </div>
              </div>

              {/* Key Features & Contribution */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.25rem' }} className="modal-subgrid">
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.05rem', fontWeight: 700 }}>Key Features</h4>
                  <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {activeProject.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.05rem', fontWeight: 700 }}>My Contribution</h4>
                  <div
                    style={{
                      background: '#f8fafc',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      padding: '0.85rem 1rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                    }}
                  >
                    {activeProject.contribution}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '1.25rem',
                  marginTop: '0.5rem',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '0.75rem',
                }}
              >
                {activeProject.githubUrl && (
                  <a 
                    href={activeProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline" 
                    style={{ 
                      padding: '0.45rem 1rem', 
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                    <span>View Source Code</span>
                    <ArrowUpRight style={{ width: 12, height: 12 }} />
                  </a>
                )}
                <button
                  onClick={() => setActiveProject(null)}
                  className="btn btn-primary"
                  style={{ padding: '0.45rem 1.25rem', fontSize: '0.8rem' }}
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 650px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .modal-subgrid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};
