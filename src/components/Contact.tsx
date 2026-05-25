import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  { icon: Phone, label: 'Telefone', value: '(11) 3456-7890', sub: 'WhatsApp disponível' },
  { icon: Mail, label: 'E-mail', value: 'contato@saudeplena.med.br', sub: 'Resposta em até 24h' },
  { icon: MapPin, label: 'Endereço', value: 'Av. Paulista, 1000 — São Paulo, SP', sub: 'Próximo ao metrô Trianon-MASP' },
  { icon: Clock, label: 'Horário', value: 'Seg–Sex: 07h–20h', sub: 'Sáb: 08h–14h' },
];

export function Contact() {
  const ref = useScrollAnimation();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    background: 'var(--clinic-surface)', border: '1.5px solid var(--clinic-border)',
    borderRadius: '12px', color: 'var(--clinic-text-1)', fontSize: '15px',
    outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', background: 'var(--clinic-bg)' }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'var(--clinic-accent)', textTransform: 'uppercase' }}>
            Fale conosco
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginTop: '12px', color: 'var(--clinic-text-1)' }}>
            Entre em Contato
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'start' }} className="contact-grid">
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactInfo.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} style={{
                background: 'var(--clinic-surface)', border: '1px solid var(--clinic-border)',
                borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(14,165,233,0.1)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={20} color="var(--clinic-accent)" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--clinic-text-2)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
                  <div style={{ fontWeight: 600, color: 'var(--clinic-text-1)', fontSize: '15px', marginBottom: '2px' }}>{value}</div>
                  <div style={{ fontSize: '13px', color: 'var(--clinic-text-2)' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: 'var(--clinic-surface)', border: '1px solid var(--clinic-border)', borderRadius: '24px', padding: '40px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <CheckCircle size={56} color="var(--clinic-success)" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--clinic-text-1)', marginBottom: '10px' }}>Mensagem enviada!</h3>
                <p style={{ color: 'var(--clinic-text-2)', marginBottom: '28px' }}>Retornaremos em até 24 horas úteis.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  style={{ background: 'var(--clinic-accent)', color: 'white', border: 'none', borderRadius: '10px', padding: '12px 28px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'block', marginBottom: '8px' }}>Nome</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Seu nome" style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--clinic-accent)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--clinic-border)')} />
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'block', marginBottom: '8px' }}>E-mail</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--clinic-accent)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--clinic-border)')} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'block', marginBottom: '8px' }}>Assunto</label>
                  <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Como podemos ajudar?" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--clinic-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--clinic-border)')} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'block', marginBottom: '8px' }}>Mensagem</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Descreva sua dúvida ou mensagem..." rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--clinic-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--clinic-border)')} />
                </div>
                <button type="submit" style={{
                  background: 'var(--clinic-accent)', color: 'white', border: 'none',
                  borderRadius: '12px', padding: '15px', fontSize: '15px', fontWeight: 700,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <Send size={16} /> Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
