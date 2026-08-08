import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Research', target: 'research' },
    { label: 'Certifications', target: 'certifications' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const offset = 80; // height of navbar
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
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all var(--transition-normal)',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(248, 250, 252, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border-color)',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        boxShadow: isScrolled ? '0 1px 3px 0 rgba(0, 0, 0, 0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '0.95rem',
            letterSpacing: '0',
            color: 'var(--text-primary)',
          }}
        >
          <span>
            Life is <span style={{ color: 'var(--primary)' }}>Hard</span>, But Not <span style={{ color: 'var(--primary)' }}>Impossible</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-only">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.01em',
                cursor: 'pointer',
                color: activeSection === link.target ? 'var(--primary)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
                position: 'relative',
                padding: '0.25rem 0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.target) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {link.label}
              {activeSection === link.target && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--primary)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-only"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '0.25rem',
          }}
        >
          {isOpen ? <X style={{ width: 22, height: 22 }} /> : <Menu style={{ width: 22, height: 22 }} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            animation: 'fadeIn 0.15s ease',
          }}
          className="mobile-only"
        >
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'left',
                color: activeSection === link.target ? 'var(--primary)' : 'var(--text-secondary)',
                padding: '0.4rem 0',
                borderBottom: '1px solid #f1f5f9',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* Responsive Inline CSS Helper */}
      <style>{`
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};
