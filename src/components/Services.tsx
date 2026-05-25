import { Heart, Brain, Bone, Eye, Baby, Stethoscope, Activity, Microscope } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  { icon: Heart, title: 'Cardiologia', desc: 'Diagnóstico e tratamento de doenças cardíacas com equipamentos de última geração.', color: '#ef4444' },
  { icon: Brain, title: 'Neurologia', desc: 'Cuidado especializado para doenças do sistema nervoso central e periférico.', color: '#8b5cf6' },
  { icon: Bone, title: 'Ortopedia', desc: 'Tratamento de lesões e doenças do aparelho locomotor com técnicas modernas.', color: '#f59e0b' },
  { icon: Eye, title: 'Oftalmologia', desc: 'Exames completos e cirurgias oculares com precisão e segurança.', color: '#0ea5e9' },
  { icon: Baby, title: 'Pediatria', desc: 'Acompanhamento especializado para a saúde e desenvolvimento infantil.', color: '#10b981' },
  { icon: Stethoscope, title: 'Clínica Geral', desc: 'Consultas preventivas e tratamento de condições do dia a dia.', color: '#f97316' },
  { icon: Activity, title: 'Check-up Completo', desc: 'Avaliação preventiva completa com exames laboratoriais e de imagem.', color: '#ec4899' },
  { icon: Microscope, title: 'Laboratório', desc: 'Análises clínicas com resultados rápidos e alta precisão.', color: '#14b8a6' },
];

export function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" style={{
      padding: '100px 24px',
      background: 'var(--clinic-surface)',
    }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
            color: 'var(--clinic-accent)', textTransform: 'uppercase',
          }}>
            O que oferecemos
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginTop: '12px', color: 'var(--clinic-text-1)' }}>
            Especialidades Médicas
          </h2>
          <p style={{ marginTop: '16px', fontSize: '17px', color: 'var(--clinic-text-2)', maxWidth: '520px', margin: '16px auto 0' }}>
            Equipe multidisciplinar para cuidar de você e sua família com atenção integral.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {services.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} style={{
              background: 'var(--clinic-bg)',
              border: '1px solid var(--clinic-border)',
              borderRadius: '20px', padding: '32px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.1)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                width: '52px', height: '52px', borderRadius: '14px',
                background: `${color}18`, display: 'flex',
                alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
              }}>
                <Icon size={26} color={color} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--clinic-text-1)', marginBottom: '10px' }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--clinic-text-2)', lineHeight: 1.65 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
