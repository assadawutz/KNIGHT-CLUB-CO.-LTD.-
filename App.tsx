import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Products from './components/Products';
import Missions from './components/Missions';
import Process from './components/Process';
import Security from './components/Security';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ContentProvider } from './contexts/ContentContext';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLogin from './components/admin/AdminLogin';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

const AppContent: React.FC = () => {
  const [view, setView] = useState<'home' | 'admin'>('home');
  const [showLogin, setShowLogin] = useState(false);

  if (view === 'admin') {
    return <AdminDashboard onLogout={() => setView('home')} />;
  }

  return (
    <div className="relative min-h-screen text-knight-text font-sans bg-knight-bg selection:bg-knight-accent selection:text-white cursor-none">
      <CustomCursor />
      <ParticleBackground />
      {showLogin && <AdminLogin onLogin={() => { setShowLogin(false); setView('admin'); }} onCancel={() => setShowLogin(false)} />}
      
      <Navbar onAdminClick={() => setShowLogin(true)} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Products />
        <Missions />
        <Process />
        <Security />
        <Team />
        <Contact />
      </main>

      <Footer onAdminClick={() => setShowLogin(true)} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
};

export default App;