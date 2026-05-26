import { Heart, Phone, Mail, MapPin, Share2, ThumbsUp, Briefcase } from 'lucide-react';
const Instagram = Share2;
const Facebook = ThumbsUp;
const Linkedin = Briefcase;

export function Footer() {
  return (
    <footer style={{
      background: 'var(--clinic-surface)',
      borderTop: '1px solid var(--clinic-border)',
      padding: '64px 24px 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '56px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--clinic-accent), var(--clinic-accent-dark))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Heart size={20} color="white" fill="white" />
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--clinic-text-1)' }}>
                Saúde <span style={{ color: 'var(--clinic-accent)' }}>Plena</span>
              </span>
            </div>
            <p style={{ color: 'var(--clinic-text-2)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              Cuidado médico de excelência com humanidade e tecnologia ao seu alcance.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'var(--clinic-surface-2)', border: '1px solid var(--clinic-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--clinic-text-2)', transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--clinic-accent)'; e.currentTarget.style.borderColor = 'var(--clinic-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--clinic-text-2)'; e.currentTarget.style.borderColor = 'var(--clinic-border)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--clinic-text-1)', marginBottom: '16px', fontSize: '15px' }}>Especialidades</h4>
            {['Cardiologia', 'Neurologia', 'Ortopedia', 'Pediatria', 'Oftalmologia', 'Clínica Geral'].map(s => (
              <a key={s} href="#services" style={{ display: 'block', color: 'var(--clinic-text-2)', textDecoration: 'none', fontSize: '14px', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--clinic-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--clinic-text-2)')}
              >{s}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--clinic-text-1)', marginBottom: '16px', fontSize: '15px' }}>Institucional</h4>
            {['Sobre a Clínica', 'Nossa Equipe', 'Convênios', 'Política de Privacidade', 'Termos de Uso'].map(l => (
              <a key={l} href="#" style={{ display: 'block', color: 'var(--clinic-text-2)', textDecoration: 'none', fontSize: '14px', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--clinic-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--clinic-text-2)')}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--clinic-text-1)', marginBottom: '16px', fontSize: '15px' }}>Contato</h4>
            {[
              { icon: Phone, text: '(11) 3456-7890' },
              { icon: Mail, text: 'contato@saudeplena.med.br' },
              { icon: MapPin, text: 'Av. Paulista, 1000 — SP' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <Icon size={15} color="var(--clinic-accent)" />
                <span style={{ fontSize: '14px', color: 'var(--clinic-text-2)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--clinic-border)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: 'var(--clinic-text-2)', fontSize: '13px' }}>
            © 2026 Clínica Saúde Plena. Todos os direitos reservados.
          </p>
          <p style={{ color: 'var(--clinic-text-2)', fontSize: '13px' }}>
            Desenvolvido por <span style={{ color: 'var(--clinic-accent)', fontWeight: 600 }}>A|G Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
