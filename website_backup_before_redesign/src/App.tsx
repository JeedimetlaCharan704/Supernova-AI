import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import FlightPlan from './components/FlightPlan';
import DetailedProcess from './components/DetailedProcess';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation />
        <Hero />
        <Services />
        <SuccessStories />
        <FlightPlan />
        <DetailedProcess />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
};

export default App;