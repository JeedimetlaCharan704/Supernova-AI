import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import FlightPlan from './components/FlightPlan';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import VoiceAgentPage from './pages/VoiceAgentPage';
import ChatSupportPage from './pages/ChatSupportPage';
import LeadGenPage from './pages/LeadGenPage';
import WorkflowMagicPage from './pages/WorkflowMagicPage';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-dark text-white overflow-x-hidden">
            <Navigation />
            <Hero />
            <Services />
            <SuccessStories />
            <FlightPlan />
            <FinalCTA />
            <Footer />
          </div>
        } />
        <Route path="/voice-agents" element={
          <>
            <Navigation />
            <VoiceAgentPage />
          </>
        } />
        <Route path="/chat-support" element={
          <>
            <Navigation />
            <ChatSupportPage />
          </>
        } />
        <Route path="/lead-gen" element={
          <>
            <Navigation />
            <LeadGenPage />
          </>
        } />
        <Route path="/workflow-magic" element={
          <>
            <Navigation />
            <WorkflowMagicPage />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;