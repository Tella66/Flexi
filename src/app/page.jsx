"use client";

import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSection from '../components/sections/HeroSection';
import DemoTrialSteps from '../components/sections/DemoTrialSteps';
import CustomerStories from '../components/sections/SocialProofAndStories.jsx';
import CertificationsFSC from '../components/sections/CertificationsFSC';
import VideoSection from     '../components/sections/VideoSection';
import KeyBenefits from '../components/sections/keyBenefits';
import FSC from '../components/common/FSC';

export default function App() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email) {
      alert('Thank you for your interest! We will contact you soon.');
      setEmail('');
    }
  };

  const handleWatchDemo = () => {
    alert('Demo video will be played');
  };

  const handleBookDemo = () => {
    alert('Demo booking form will be opened');
  };

  const handleGetFreeTrial = () => {
    alert('Free trial registration will be opened');
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar onBookDemo={handleBookDemo} />

      <HeroSection 
        email={email}
        onEmailChange={setEmail}
        onEmailSubmit={handleEmailSubmit}
        onWatchDemo={handleWatchDemo} 
        onGetFreeTrial={handleGetFreeTrial} 
      />
       <VideoSection 
        onWatchDemo={handleWatchDemo}
       />

       <KeyBenefits />

      <DemoTrialSteps 
        onWatchDemo={handleWatchDemo}
        onGetFreeTrial={handleGetFreeTrial} 
      />

      <CustomerStories />

      <CertificationsFSC onGetFreeTrial={handleGetFreeTrial} onWatchDemo={handleWatchDemo} />

      <FSC />

      <Footer />
    </div>
  );
}
