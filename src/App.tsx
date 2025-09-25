import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Faqs from "./components/sections/Faqs";
import Download from "./components/sections/Download";
import Footer from "./components/sections/Footer";
import Membership from "./components/sections/Membership";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800); // Extra delay for smooth transition
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 150);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#2d1b3d] via-[#1a0f26] to-[#3d2952] flex items-center justify-center z-50 cursor-heart">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#F4376D]/20 via-[#A855F7]/30 to-[#3B82F6]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#A855F7]/30 via-[#3B82F6]/20 to-[#F4376D]/20 rounded-full blur-3xl animate-float-delayed"></div>

          {/* Floating hearts */}
          <div className="absolute top-1/4 left-1/4 animate-float-heart">
            <div className="w-4 h-4 text-[#F4376D]/60">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-3/4 right-1/4 animate-float-heart delay-700">
            <div className="w-3 h-3 text-[#A855F7]/50">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/6 animate-float-heart delay-1000">
            <div className="w-5 h-5 text-[#3B82F6]/40">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center space-y-6 sm:space-y-8 px-4 sm:px-6">
          {/* Logo with animated heart */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-2xl animate-heartbeat-3d">
                <span className="text-white font-bold text-xl sm:text-2xl animate-pulse">
                  ∞
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full blur opacity-50 animate-pulse"></div>
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black font-roboto animate-gradient-x bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text text-transparent">
                PinayMate
              </span>
              <span className="text-sm sm:text-base text-[#C8B5E6] font-roboto animate-slideInUp delay-300">
                Elite Filipino Dating
              </span>
            </div>
          </div>

          {/* Loading Message */}
          <div className="space-y-3 sm:space-y-4 animate-fadeInUp delay-500">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-roboto">
              Preparing Your Love Journey
            </h2>
            <p className="text-[#C8B5E6] font-roboto max-w-sm sm:max-w-md mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
              Connecting hearts across the world • Finding your perfect Filipino
              match
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-xs sm:max-w-md mx-auto space-y-3 sm:space-y-4 animate-fadeInUp delay-700">
            <div className="relative h-2 sm:h-3 bg-[#3d2952] rounded-full overflow-hidden shadow-inner">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full transition-all duration-300 ease-out shadow-lg"
                style={{ width: `${Math.min(loadingProgress, 100)}%` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>

            {/* Progress Text */}
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-[#C8B5E6] font-roboto">
                {loadingProgress < 30
                  ? "Initializing..."
                  : loadingProgress < 60
                  ? "Loading profiles..."
                  : loadingProgress < 90
                  ? "Preparing matches..."
                  : "Almost ready!"}
              </span>
              <span className="text-white font-bold font-roboto">
                {Math.round(loadingProgress)}%
              </span>
            </div>
          </div>

          {/* Floating Action Hint */}
          <div className="animate-fadeInUp delay-1000">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#F4376D]/20 backdrop-blur-sm mx-4 sm:mx-0">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full animate-pulse"></div>
              <span className="text-[#C8B5E6] text-xs sm:text-sm font-roboto">
                Premium dating experience loading...
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2d3748] font-roboto cursor-heart">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Membership Plans */}
      <Membership />

      {/* FAQ Section */}
      <Faqs />

      {/* Download Section */}
      <Download />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
