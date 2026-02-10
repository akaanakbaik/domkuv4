import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ApiDocs from './pages/ApiDocs';
import SyaratKetentuan from './pages/SyaratKetentuan';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('id');

  useEffect(() => {
    const pathLang = window.location.pathname.split('/')[1];
    if (pathLang === 'en' || pathLang === 'id') {
      setCurrentLanguage(pathLang);
    }
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-background text-foreground transition-colors duration-200 ease-in-out">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="pb-16">
          <Routes>
            <Route path="/" element={<Navigate replace to={`/${currentLanguage}/~`} />} />
            <Route path="/:lang/~" element={<Home />} />
            <Route path="/:lang/apidocs" element={<ApiDocs />} />
            <Route path="/:lang/terms" element={<SyaratKetentuan />} />
          </Routes>
        </main>
        
        <Toaster />
      </div>
    </Router>
  );
};

export default App;