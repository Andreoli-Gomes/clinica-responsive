import { Star, Award, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const doctors = [
  {
    name: 'Dra. Ana Carvalho',
    specialty: 'Cardiologista',
    crm: 'CRM 12345-SP',
    experience: '15 anos',
    rating: 4.9,
    reviews: 312,
    education: 'USP — Faculdade de Medicina',
    avatar: 'AC',
    color: '#ef4444',
  },
  {
    name: 'Dr. Rafael Mendes',
    specialty: 'Neurologista',
    crm: 'CRM 23456-SP',
    experience: '12 anos',
    rating: 4.8,
    reviews: 287,
    education: 'UNICAMP — Medicina',
    avatar: 'RM',
    color: '#8b5cf6',
  },
  {
    name: 'Dra. Juliana Lima',
    specialty: 'Pediatra',
    crm: 'CRM 34567-SP',
    experience: '10 anos',
    rating: 5.0,
    reviews: 456,
    education: 'UNIFESP — Medicina',
    avatar: 'JL',
    color: '#10b981',
  },
  {
    name: 'Dr. Carlos Santos',
    specialty: 'Ortopedista',
    crm: 'CRM 45678-SP',
    experience: '18 anos',
    rating: 4.9,
    reviews: 198,
    education: 'USP — Medicina',
    avatar: 'CS',
    color: '#f59e0b',
  },
];

export function Doctors() {
  const ref = useScrollAnimation();

  return (
    <section id="doctors" style={{ padding: '100px 24px', background: 'var(--clinic-bg)' }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'var(--clinic-accent)', textTransform: 'uppercase' }}>
            Nossa Equipe
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginTop: '12px', color: 'var(--clinic-text-1)' }}>
            Médicos Especialistas
          </h2>
          <p style={{ marginTop: '16px', fontSize: '17px', color: 'var(--clinic-text-2)', maxWidth: '500px', margin: '16px auto 0' }}>
            Profissionais altamente qualificados comprometidos com o seu bem-estar.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
          {doctors.map(doc => (
            <div key={doc.name} style={{
              background: 'var(--clinic-surface)',
              border: '1px solid var(--clinic-border)',
              borderRadius: '24px', overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Top color bar */}
              <div style={{ height: '6px', background: `linear-gradient(90deg, ${doc.color}, ${doc.color}88)` }} />

              <div style={{ padding: '32px 28px' }}>
                {/* Avatar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '20px',
                    background: `${doc.color}20`, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', fontWeight: 800, color: doc.color,
                    flexShrink: 0,
                  }}>
                    {doc.avatar}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--clinic-text-1)', marginBottom: '4px' }}>
                      {doc.name}
                    </h3>
                    <span style={{
                      fontSize: '13px', fontWeight: 600,
                      color: doc.color, background: `${doc.color}15`,
                      padding: '3px 10px', borderRadius: '100px',
                    }}>
                      {doc.specialty}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ fontWeight: 700, color: 'var(--clinic-text-1)', fontSize: '15px' }}>{doc.rating}</span>
                  <span style={{ color: 'var(--clinic-text-2)', fontSize: '13px' }}>({doc.reviews} avaliações)</span>
                </div>

                {/* Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Award size={15} color="var(--clinic-text-2)" />
                    <span style={{ fontSize: '13px', color: 'var(--clinic-text-2)' }}>{doc.experience} de experiência</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <GraduationCap size={15} color="var(--clinic-text-2)" />
                    <span style={{ fontSize: '13px', color: 'var(--clinic-text-2)' }}>{doc.education}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--clinic-text-2)', marginTop: '2px' }}>
                    {doc.crm}
                  </div>
                </div>

                <a href="#appointment" style={{
                  display: 'block', marginTop: '24px',
                  background: `${doc.color}18`, color: doc.color,
                  border: `1px solid ${doc.color}30`,
                  borderRadius: '10px', padding: '12px',
                  textAlign: 'center', textDecoration: 'none',
                  fontSize: '14px', fontWeight: 600,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = `${doc.color}28`)}
                onMouseLeave={e => (e.currentTarget.style.background = `${doc.color}18`)}
                >
                  Agendar com {doc.name.split(' ')[1]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
