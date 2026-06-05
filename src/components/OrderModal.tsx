import { useState } from 'react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string | null;
  waNumber: string;
}

export function OrderModal({ isOpen, onClose, selectedPackage, waNumber }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    partnerName: '',
    eventDate: '',
    theme: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, partnerName, eventDate, theme } = formData;
    
    let message = `Halo Admin, saya tertarik memesan undangan digital.\n\n`;
    message += `*Detail Pesanan:*\n`;
    message += `- Nama Pemesan: ${name}\n`;
    if (partnerName) message += `- Nama Pasangan: ${partnerName}\n`;
    if (eventDate) message += `- Tanggal Acara: ${eventDate}\n`;
    message += `- Pilihan Paket: ${selectedPackage}\n`;
    if (theme) message += `- Pilihan Tema: ${theme}\n`;
    
    message += `\nMohon info langkah selanjutnya, terima kasih.`;
    
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content order-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="order-modal-header">
          <h3>Pesan Paket {selectedPackage}</h3>
          <p>Lengkapi formulir di bawah ini, admin kami akan segera menghubungi Anda via WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Contoh: Budi Santoso"
            />
          </div>

          <div className="form-group">
            <label htmlFor="partnerName">Nama Pasangan (Opsional)</label>
            <input 
              type="text" 
              id="partnerName" 
              name="partnerName" 
              value={formData.partnerName} 
              onChange={handleChange} 
              placeholder="Contoh: Siti Aisyah"
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventDate">Tanggal Acara</label>
            <input 
              type="date" 
              id="eventDate" 
              name="eventDate" 
              value={formData.eventDate} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="theme">Pilihan Tema / Referensi (Opsional)</label>
            <input 
              type="text" 
              id="theme" 
              name="theme" 
              value={formData.theme} 
              onChange={handleChange} 
              placeholder="Contoh: Rustic Garden"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full mt-4">
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
