import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Maria Fernanda',
    role: 'Paciente — Cardiologia',
    rating: 5,
    text: 'Atendimento impecável desde a recepção até o consultório. A Dra. Ana é extraordinária, explica tudo com clareza e realmente se preocupa com o paciente.',
    avatar: 'MF',
    color: '#ef4444',
  },
  {
    name: 'João Paulo',
    role: 'Paciente — Ortopedia',
    rating: 5,
    text: 'Passei por cirurgia ortopédica aqui e o suporte foi completo: desde o diagnóstico até a recuperação. Equipe nota 10!',
    avatar: 'JP',
    color: '#f59e0b',
  },
  {
    name: 'Sandra Oliveira',
    role: 'Paciente — Pediatria',
    rating: 5,
    text: 'Meus filhos adoram a Dra. Juliana. Ela tem um jeito lindo de tratar as crianças. A clínica é limpa, organizada e o atendimento é rápido.',
    avatar: 'SO',
    color: '#10b981',
  },
  {
    name: 'Roberto Alves',
    role: 'Paciente — Clínica Geral',
    rating: 5,
    text: 'Fiz meu check-up completo aqui. Os resultados saíram rapidinho e o médico explicou tudo detalhadamente. Recomendo sem hesitar.',
    avatar: 'RA',
    color: '#0ea5e9',
  },
  {
    name: 'Camila Torres',
    role: 'Paciente — Neurologia',
    rating: 5,
    text: 'Após meses sofrendo com enxaqueca, o Dr. Rafael finalmente me ajudou a entender a causa e o tratamento. Mudou minha qualidade de vida!',
    avatar: 'CT',
    color: '#8b5cf6',
  },
  {
    name: 'Lucas Martins',
    role: 'Paciente — Oftalmologia',
    rating: 5,
    text: 'Estrutura moderna, equipamentos de ponta e atendimento humanizado. A melhor clínica que já fui. Já indiquei para toda a família.',
    avatar: 'LM',
    color: '#ec4899',
  },
];

export function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section id="testimonials" style={{ padding: '100px 24px', background: 'var(--clinic-surface)' }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'var(--clinic-accent)', textTransform: 'uppercase' }}>
            Depoimentos
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginTop: '12px', color: 'var(--clinic-text-1)' }}>
            O que nossos pacientes dizem
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {testimonials.map(t => (
            <div key={t.name} style={{
              background: 'var(--clinic-bg)',
              border: '1px solid var(--clinic-border)',
              borderRadius: '20px', padding: '32px',
              display: 'flex', flexDirection: 'column', gap: '20px',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Quote size={32} color={t.color} style={{ opacity: 0.5 }} />

              <p style={{ fontSize: '15px', color: 'var(--clinic-text-2)', lineHeight: 1.7, flex: 1 }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', gap: '4px', marginTop: '-8px' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--clinic-border)', paddingTop: '20px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '14px',
                  background: `${t.color}20`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 800, color: t.color, flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--clinic-text-1)', fontSize: '15px' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--clinic-text-2)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
