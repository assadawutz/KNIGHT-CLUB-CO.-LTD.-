import React, { useState } from 'react';
import { useContent } from '../../contexts/ContentContext';
import { LayoutDashboard, Type, List, Briefcase, Box, FileText, Shield, Users, Save, LogOut, Plus, Trash2 } from 'lucide-react';

// Simplified Generic Field Components
const InputField = ({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) => (
  <div className="mb-4">
    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">{label}</label>
    <input 
      type="text" 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-knight-bg border border-white/10 p-3 text-white text-sm focus:border-knight-accent focus:outline-none"
    />
  </div>
);

const TextAreaField = ({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) => (
  <div className="mb-4">
    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">{label}</label>
    <textarea 
      rows={3}
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-knight-bg border border-white/10 p-3 text-white text-sm focus:border-knight-accent focus:outline-none"
    />
  </div>
);

const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const { content, updateContent } = useContent();
  const [activeTab, setActiveTab] = useState('hero');
  const [localContent, setLocalContent] = useState(content);

  const handleSave = () => {
    updateContent(localContent);
    alert('Content Published Successfully');
  };

  const handleChange = (section: keyof typeof localContent, field: string, value: any) => {
    setLocalContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const NavButton = ({ id, icon: Icon, label }: any) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${activeTab === id ? 'bg-knight-accent text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-knight-bg text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 flex flex-col bg-knight-surface">
        <div className="p-6 border-b border-white/10">
          <h1 className="font-display font-bold text-xl">KNIGHT CMS</h1>
          <span className="text-xs text-gray-500 font-mono">HEADLESS MODE</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <NavButton id="hero" icon={LayoutDashboard} label="Hero Section" />
          <NavButton id="about" icon={Type} label="About" />
          <NavButton id="services" icon={List} label="Services" />
          <NavButton id="industries" icon={Briefcase} label="Industries" />
          <NavButton id="products" icon={Box} label="Products" />
          <NavButton id="missions" icon={FileText} label="Missions (Cases)" />
          <NavButton id="security" icon={Shield} label="Security" />
          <NavButton id="team" icon={Users} label="Team" />
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={onLogout} className="flex items-center text-gray-500 hover:text-white text-sm"><LogOut size={16} className="mr-2"/> Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-knight-surface border-b border-white/10 p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold font-display uppercase">{activeTab}</h2>
          <button onClick={handleSave} className="flex items-center px-6 py-2 bg-white text-black font-bold text-sm hover:bg-gray-200">
            <Save size={16} className="mr-2" /> PUBLISH CHANGES
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {activeTab === 'hero' && (
              <div className="space-y-6">
                <InputField label="Tagline (EN)" value={localContent.hero.tagline} onChange={v => handleChange('hero', 'tagline', v)} />
                <InputField label="Headline (TH)" value={localContent.hero.headlineTH} onChange={v => handleChange('hero', 'headlineTH', v)} />
                <TextAreaField label="Subheading (TH)" value={localContent.hero.subheadingTH} onChange={v => handleChange('hero', 'subheadingTH', v)} />
                {/* Bullets editor omitted for brevity, would use array mapping */}
              </div>
            )}

            {activeTab === 'about' && (
               <div className="space-y-6">
                 <TextAreaField label="Company Story" value={localContent.about.story} onChange={v => handleChange('about', 'story', v)} />
                 <TextAreaField label="Differentiation" value={localContent.about.differentiation} onChange={v => handleChange('about', 'differentiation', v)} />
               </div>
            )}

            {/* Generic List Editors for other sections */}
            {['services', 'products', 'missions', 'industries'].includes(activeTab) && (
              <div>
                <p className="text-gray-500 mb-4 text-sm font-mono">List Items ({localContent[activeTab as keyof typeof localContent].length})</p>
                <div className="grid gap-4">
                  {(localContent[activeTab as keyof typeof localContent] as any[]).map((item, idx) => (
                    <div key={item.id} className="p-4 border border-white/10 bg-white/5 relative">
                      <div className="grid grid-cols-2 gap-4">
                        <InputField label="Title" value={item.title || item.name} onChange={v => {
                           const list = [...(localContent[activeTab as keyof typeof localContent] as any[])];
                           list[idx] = { ...list[idx], [item.title ? 'title' : 'name']: v };
                           setLocalContent({ ...localContent, [activeTab]: list });
                        }} />
                         {/* Simple deletion for demo */}
                         <button className="absolute top-2 right-2 text-red-500" onClick={() => {
                            const list = [...(localContent[activeTab as keyof typeof localContent] as any[])];
                            list.splice(idx, 1);
                            setLocalContent({ ...localContent, [activeTab]: list });
                         }}><Trash2 size={16}/></button>
                      </div>
                      <TextAreaField label="Description" value={item.description || item.problem} onChange={v => {
                           const list = [...(localContent[activeTab as keyof typeof localContent] as any[])];
                           list[idx] = { ...list[idx], [item.description ? 'description' : 'problem']: v };
                           setLocalContent({ ...localContent, [activeTab]: list });
                      }} />
                    </div>
                  ))}
                </div>
                <button className="mt-4 flex items-center text-knight-accent font-bold text-sm"><Plus size={16} className="mr-2"/> Add Item</button>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;