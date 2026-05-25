import { ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { icon: Users, value: '15.000+', label: 'Pacientes atendidos' },
  { icon: Award, value: '98%', label: 'Satisfação' },
  { icon: Clock, value: '24h', label: 'Atendimento' },
  { icon: Shield, value: '20+', label: 'Anos de excelência' },
];

export function Hero() {
  const ref = useScrollAnimation();

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '120px 24px 80px',
      background: 'linear-gradient(135deg, var(--clinic-bg) 0%, var(--clinic-surface) 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background decorations */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} className="section-fade" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)',
          borderRadius: '100px', padding: '6px 16px', marginBottom: '28px',
        }}>
          <Shield size={14} color="var(--clinic-accent)" />
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-accent)', letterSpacing: '0.5px' }}>
            CERTIFICADA PELA CFM
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 800, lineHeight: 1.1,
          color: 'var(--clinic-text-1)',
          marginBottom: '24px', maxWidth: '750px',
        }}>
          Cuidando da sua{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--clinic-accent), var(--clinic-success))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            saúde
          </span>{' '}
          com excelência
        </h1>

        <p style={{
          fontSize: '18px', color: 'var(--clinic-text-2)',
          lineHeight: 1.7, maxWidth: '560px', marginBottom: '40px',
        }}>
          Medicina de qualidade, humanizada e acessível. Agende sua consulta com nossos especialistas e cuide do que mais importa — a sua saúde.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '72px' }}>
          <a href="#appointment" style={{
            background: 'var(--clinic-accent)', color: 'white',
            padding: '16px 32px', borderRadius: '12px', textDecoration: 'none',
            fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px',
            boxShadow: '0 4px 20px rgba(14,165,233,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(14,165,233,0.45)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.35)'; }}
          >
            Agendar Consulta <ArrowRight size={18} />
          </a>
          <a href="#doctors" style={{
            background: 'var(--clinic-surface-2)', color: 'var(--clinic-text-1)',
            padding: '16px 32px', borderRadius: '12px', textDecoration: 'none',
            fontSize: '16px', fontWeight: 600, border: '1px solid var(--clinic-border)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--clinic-border)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--clinic-surface-2)')}
          >
            Conhecer Médicos
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '24px',
        }}>
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} style={{
              background: 'var(--clinic-surface)',
              border: '1px solid var(--clinic-border)',
              borderRadius: '16px', padding: '24px',
              display: 'flex', flexDirection: 'column', gap: '8px',
            }}>
              <Icon size={24} color="var(--clinic-accent)" />
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--clinic-text-1)' }}>{value}</div>
              <div style={{ fontSize: '14px', color: 'var(--clinic-text-2)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
