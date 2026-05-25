import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#services' },
  { label: 'Médicos', href: '#doctors' },
  { label: 'Agendar', href: '#appointment' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'var(--clinic-surface)' : 'transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--clinic-accent), var(--clinic-accent-dark))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Heart size={20} color="white" fill="white" />
            </div>
            <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--clinic-text-1)' }}>
              Saúde <span style={{ color: 'var(--clinic-accent)' }}>Plena</span>
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden-mobile">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                textDecoration: 'none', color: 'var(--clinic-text-2)',
                fontSize: '15px', fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--clinic-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--clinic-text-2)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={toggleTheme}
              style={{
                background: 'var(--clinic-surface-2)', border: '1px solid var(--clinic-border)',
                borderRadius: '10px', padding: '8px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--clinic-text-2)',
                transition: 'all 0.2s',
              }}
              title="Alternar tema"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#appointment" style={{
              background: 'var(--clinic-accent)', color: 'white',
              padding: '10px 20px', borderRadius: '10px', textDecoration: 'none',
              fontSize: '14px', fontWeight: 600, transition: 'opacity 0.2s',
            }}
            className="hidden-mobile"
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Agendar Consulta
            </a>
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--clinic-text-1)', display: 'none',
              }}
              className="show-mobile"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            paddingBottom: '20px', borderTop: '1px solid var(--clinic-border)',
            display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '16px',
          }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                textDecoration: 'none', color: 'var(--clinic-text-2)',
                fontSize: '16px', fontWeight: 500,
              }}>
                {l.label}
              </a>
            ))}
            <a href="#appointment" onClick={() => setOpen(false)} style={{
              background: 'var(--clinic-accent)', color: 'white',
              padding: '12px 20px', borderRadius: '10px', textDecoration: 'none',
              fontSize: '15px', fontWeight: 600, textAlign: 'center',
            }}>
              Agendar Consulta
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
