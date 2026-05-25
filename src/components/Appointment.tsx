import { useState } from 'react';
import { Calendar, Clock, User, Phone, Stethoscope, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const specialties = ['Cardiologia', 'Neurologia', 'Ortopedia', 'Oftalmologia', 'Pediatria', 'Clínica Geral', 'Check-up', 'Laboratório'];
const times = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

export function Appointment() {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', specialty: '', date: '', time: '', notes: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    background: 'var(--clinic-bg)',
    border: '1.5px solid var(--clinic-border)',
    borderRadius: '12px',
    color: 'var(--clinic-text-1)',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
  };

  return (
    <section id="appointment" style={{ padding: '100px 24px', background: 'var(--clinic-surface)' }}>
      <div ref={ref} className="section-fade" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'var(--clinic-accent)', textTransform: 'uppercase' }}>
            Agende agora
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginTop: '12px', color: 'var(--clinic-text-1)' }}>
            Marcar Consulta
          </h2>
          <p style={{ marginTop: '16px', fontSize: '17px', color: 'var(--clinic-text-2)' }}>
            Preencha o formulário e entraremos em contato para confirmar seu horário.
          </p>
        </div>

        <div style={{
          background: 'var(--clinic-bg)',
          border: '1px solid var(--clinic-border)',
          borderRadius: '24px', padding: '48px',
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px' }}>
              <CheckCircle size={64} color="var(--clinic-success)" style={{ margin: '0 auto 24px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--clinic-text-1)', marginBottom: '12px' }}>
                Solicitação enviada!
              </h3>
              <p style={{ color: 'var(--clinic-text-2)', marginBottom: '32px', fontSize: '16px' }}>
                Entraremos em contato em até 2 horas úteis para confirmar seu agendamento.
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', specialty: '', date: '', time: '', notes: '' }); }}
                style={{
                  background: 'var(--clinic-accent)', color: 'white',
                  border: 'none', borderRadius: '12px', padding: '14px 32px',
                  fontSize: '15px', fontWeight: 600, cursor: 'pointer',
                }}>
                Fazer novo agendamento
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <User size={14} /> Nome completo
                  </label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Seu nome" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--clinic-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--clinic-border)')} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Phone size={14} /> Telefone / WhatsApp
                  </label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="(11) 99999-9999" style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--clinic-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--clinic-border)')} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <Stethoscope size={14} /> Especialidade
                </label>
                <select name="specialty" value={form.specialty} onChange={handleChange} required style={inputStyle}>
                  <option value="">Selecione a especialidade</option>
                  {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Calendar size={14} /> Data preferida
                  </label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} required style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--clinic-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--clinic-border)')} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <Clock size={14} /> Horário preferido
                  </label>
                  <select name="time" value={form.time} onChange={handleChange} required style={inputStyle}>
                    <option value="">Selecione o horário</option>
                    {times.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--clinic-text-2)', marginBottom: '8px', display: 'block' }}>
                  Observações (opcional)
                </label>
                <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Descreva brevemente o motivo da consulta..." rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--clinic-accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--clinic-border)')} />
              </div>

              <button type="submit" style={{
                background: 'linear-gradient(135deg, var(--clinic-accent), var(--clinic-accent-dark))',
                color: 'white', border: 'none', borderRadius: '12px',
                padding: '16px', fontSize: '16px', fontWeight: 700,
                cursor: 'pointer', marginTop: '8px',
                boxShadow: '0 4px 20px rgba(14,165,233,0.35)',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Solicitar Agendamento
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
