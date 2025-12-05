import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { content, addMessage } = useContent();
  const { contact } = content;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage(form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-knight-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Initialize Collaboration</h2>
            <p className="text-gray-400 mb-10">
              Discuss your requirements with our solution architects.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-knight-accent w-5 h-5 mt-1" />
                <span className="text-gray-300 text-sm leading-relaxed">{contact.address}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-knight-accent w-5 h-5" />
                <span className="text-gray-300 text-sm">{contact.email}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-knight-accent w-5 h-5" />
                <span className="text-gray-300 text-sm">{contact.phone}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" placeholder="Name" required 
                value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                className="bg-knight-bg border border-white/10 p-4 text-white text-sm focus:border-knight-accent focus:outline-none"
              />
              <input 
                type="email" placeholder="Email" required 
                value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                className="bg-knight-bg border border-white/10 p-4 text-white text-sm focus:border-knight-accent focus:outline-none"
              />
            </div>
            <textarea 
              rows={5} placeholder="Project Brief" required 
              value={form.message} onChange={e => setForm({...form, message: e.target.value})}
              className="w-full bg-knight-bg border border-white/10 p-4 text-white text-sm focus:border-knight-accent focus:outline-none"
            ></textarea>
            
            <button type="submit" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors w-full sm:w-auto">
              {sent ? 'Transmission Sent' : 'Send Message'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;