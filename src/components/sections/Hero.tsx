import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Add scroll animation observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    const heroSection = document.getElementById("home");
    if (heroSection) {
      observer.observe(heroSection);
    }

    // Add smooth scrolling behavior
    const handleSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };

    // Listen for hash changes (navigation clicks)
    window.addEventListener("hashchange", handleSmoothScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleSmoothScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pb-6 flex items-center pt-16 overflow-hidden bg-gradient-to-br from-[#2d1b3d] via-[#1a0f26] to-[#3d2952]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#F4376D]/20 via-[#A855F7]/10 to-[#3B82F6]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#A855F7]/15 via-[#3B82F6]/20 to-[#F4376D]/15 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-r from-[#3B82F6]/10 to-[#F4376D]/10 rounded-full blur-2xl animate-bounce delay-150"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-[#F4376D] rounded-full animate-ping delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#A855F7] rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-[#3B82F6] rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative z-10 max-w-[1600px]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 md:space-y-8 transform transition-all duration-1200 ${
              isVisible && isScrolled
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-20 opacity-0 scale-95"
            }`}
          >
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] font-roboto tracking-tight">
                <span className="block animate-fadeInUp">Discover Your</span>
                <span className="block text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text animate-fadeInUp delay-150 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000">
                  Perfect Filipina
                </span>
                <span className="block text-transparent bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F4376D] bg-clip-text animate-fadeInUp delay-300 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000">
                  Soulmate 💕
                </span>
              </h1>

              <div className="space-y-6 animate-fadeInUp delay-500">
                <p className="text-xl md:text-2xl text-[#C8B5E6] leading-relaxed max-w-2xl font-roboto">
                  <span className="text-[#F4376D] font-bold">
                    🌺 Join the elite community
                  </span>{" "}
                  where genuine love meets Filipino beauty. Connect with{" "}
                  <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text font-bold">
                    verified, authentic Filipinas
                  </span>{" "}
                  who share your values and dreams of lasting relationships.
                </p>

                {/* Success Stats */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 py-4 justify-center sm:justify-start">
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 border border-[#F4376D]/20 backdrop-blur-sm">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-white font-bold text-xs sm:text-sm">
                        💕
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-black text-sm sm:text-lg font-roboto">
                        94%
                      </div>
                      <div className="text-[#C8B5E6] text-xs font-roboto">
                        Find Love
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 border border-[#A855F7]/20 backdrop-blur-sm">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center animate-pulse delay-75">
                      <span className="text-white font-bold text-xs sm:text-sm">
                        ✨
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-black text-sm sm:text-lg font-roboto">
                        500+
                      </div>
                      <div className="text-[#C8B5E6] text-xs font-roboto">
                        Stories
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-[#3B82F6]/10 to-[#F4376D]/10 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 border border-[#3B82F6]/20 backdrop-blur-sm">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#3B82F6] to-[#F4376D] rounded-full flex items-center justify-center animate-pulse delay-150">
                      <span className="text-white font-bold text-xs sm:text-sm">
                        🛡️
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-black text-sm sm:text-lg font-roboto">
                        100%
                      </div>
                      <div className="text-[#C8B5E6] text-xs font-roboto">
                        Verified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fadeInUp delay-700">
              {/* Main CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white px-10 py-5 rounded-2xl text-xl font-black hover:opacity-90 transition-all duration-300 shadow-2xl transform hover:scale-105 font-roboto overflow-hidden animate-zoom-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F4376D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Find Your Filipina Love</span>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <button className="group bg-transparent border-2 border-[#F4376D] text-[#F4376D] px-8 py-5 rounded-2xl text-xl font-bold hover:bg-[#F4376D] hover:text-white transition-all duration-300 font-roboto">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Watch Success Stories</span>
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <p className="text-[#C8B5E6] font-medium font-roboto text-center sm:text-left">
                  💯 Trusted by thousands of couples worldwide • 🛡️ SheerID
                  Verified Profiles
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Phone Mockups */}
          <div
            className={`relative flex justify-center lg:justify-end transform transition-all duration-1800 ${
              isVisible && isScrolled
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-20 opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Magical Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/30 via-[#A855F7]/20 to-[#3B82F6]/30 blur-3xl scale-150 animate-pulse"></div>

              {/* Main Phone - Dating Profile */}
              <div className="relative z-20 transform rotate-3 sm:rotate-6 hover:rotate-12 transition-transform duration-700">
                <div className="w-72 sm:w-80 md:w-84 lg:w-80 xl:w-84 h-[550px] sm:h-[650px] md:h-[680px] lg:h-[650px] xl:h-[680px] bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e] rounded-[2.5rem] sm:rounded-[3.5rem] p-2 sm:p-3 shadow-2xl border-2 border-[#F4376D]/30 hover:border-[#F4376D]/50 transition-all duration-300 mx-auto">
                  <div className="w-full h-full bg-gradient-to-br from-[#1a0f26] to-[#0f0a1a] rounded-[3rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 sm:px-8 pt-4 sm:pt-6 pb-3 sm:pb-4">
                      <div className="text-white text-sm font-medium font-roboto">
                        9:41
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-white/80 rounded-sm"></div>
                        <div className="w-1 h-4 bg-white/60 rounded-sm"></div>
                        <div className="w-6 h-3 border-2 border-white/70 rounded-sm">
                          <div className="w-full h-full bg-green-400 rounded-sm animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 sm:px-8 py-2">
                      <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <span className="text-white font-bold text-base sm:text-lg">
                              ∞
                            </span>
                          </div>
                          <span className="text-white text-xl sm:text-2xl font-black font-roboto">
                            PinayMate
                          </span>
                        </div>
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#F4376D] rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Profile Card */}
                    <div className="px-6">
                      <div className="bg-gradient-to-br from-[#F4376D]/25 to-[#A855F7]/20 rounded-3xl p-1.5 backdrop-blur-sm border border-[#F4376D]/40 shadow-xl animate-fadeIn">
                        <div className="bg-black/50 rounded-[1.3rem] p-6 backdrop-blur-md">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-bounce">
                              <span className="text-white font-bold text-2xl">
                                M
                              </span>
                            </div>
                            <div className="text-white font-bold text-xl font-roboto">
                              Maria, 24
                            </div>
                            <div className="text-[#C8B5E6] text-sm font-roboto flex items-center justify-center space-x-1 mt-1">
                              <span>📍</span>
                              <span>Manila, Philippines</span>
                            </div>
                            <div className="flex items-center justify-center space-x-1 mt-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400 text-xs font-roboto">
                                Online now
                              </span>
                            </div>
                          </div>

                          <div className="text-[#C8B5E6] text-sm font-roboto mb-4 bg-white/5 p-3 rounded-xl text-center">
                            "Looking for genuine love and serious relationship
                            💕 Ready to start new chapter with the right
                            person."
                          </div>

                          <div className="flex justify-center space-x-2 mb-4">
                            <div className="px-3 py-1 bg-[#F4376D]/20 rounded-full border border-[#F4376D]/30">
                              <span className="text-[#F4376D] text-xs font-bold">
                                Cooking
                              </span>
                            </div>
                            <div className="px-3 py-1 bg-[#A855F7]/20 rounded-full border border-[#A855F7]/30">
                              <span className="text-[#A855F7] text-xs font-bold">
                                Travel
                              </span>
                            </div>
                            <div className="px-3 py-1 bg-[#3B82F6]/20 rounded-full border border-[#3B82F6]/30">
                              <span className="text-[#3B82F6] text-xs font-bold">
                                Family
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-center space-x-4">
                            <button className="w-12 h-12 bg-gray-600/30 hover:bg-gray-500/40 rounded-full flex items-center justify-center transition-colors">
                              <span className="text-gray-300 text-xl">✕</span>
                            </button>
                            <button className="w-16 h-12 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all animate-pulse">
                              <span className="text-white text-xl">💕</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-around items-center bg-black/70 rounded-2xl py-4 px-6 backdrop-blur-lg border border-white/10">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-white text-sm">💕</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-600/50 rounded-full flex items-center justify-center">
                          <span className="text-gray-400 text-sm">💬</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-600/50 rounded-full flex items-center justify-center">
                          <span className="text-gray-400 text-sm">⭐</span>
                        </div>
                        <div className="w-8 h-8 bg-gray-600/50 rounded-full flex items-center justify-center">
                          <span className="text-gray-400 text-sm">👤</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Phone - Chat Interface */}
              <div className=" absolute top-12 sm:top-20 -right-8 sm:-right-12 z-10 transform -rotate-3 sm:-rotate-6 hover:-rotate-1 sm:hover:-rotate-3 transition-transform duration-700 hidden sm:block">
                <div className="w-64 sm:w-72 h-[520px] sm:h-[580px] bg-gradient-to-br from-[#A855F7]/20 to-[#3B82F6]/20 rounded-[2.5rem] sm:rounded-[3rem] backdrop-blur-sm border border-[#A855F7]/30 p-2 sm:p-3">
                  <div className="w-full h-full bg-gradient-to-br from-[#2a1a3e] to-[#1a0f26] rounded-[2.5rem] overflow-hidden relative">
                    <div className="p-6">
                      {/* Chat Header */}
                      <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-white/10">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">I</span>
                        </div>
                        <div>
                          <div className="text-white font-bold font-roboto">
                            Isabella
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-xs font-roboto">
                              Online
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="space-y-4">
                        <div className="flex justify-end">
                          <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white p-3 rounded-2xl max-w-[200px] animate-slideInRight">
                            <div className="text-sm font-roboto">
                              Hi Isabella! Your profile is amazing 😊
                            </div>
                            <div className="text-xs opacity-70 mt-1">
                              2:30 PM
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-start">
                          <div className="bg-white/10 text-white p-3 rounded-2xl max-w-[200px] backdrop-blur-sm animate-slideInLeft">
                            <div className="text-sm font-roboto">
                              Thank you! I'd love to get to know you better 💕
                            </div>
                            <div className="text-xs opacity-70 mt-1">
                              2:32 PM
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white p-3 rounded-2xl max-w-[200px] animate-slideInRight delay-75">
                            <div className="text-sm font-roboto">
                              Would you like to video chat? 📹
                            </div>
                            <div className="text-xs opacity-70 mt-1">
                              2:35 PM
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-roboto animate-pulse">
                            💕 Isabella is typing...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 text-[#F4376D] animate-bounce">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-10 left-6 text-[#A855F7] animate-pulse delay-150">
                <div className="w-8 h-8 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">✨</span>
                </div>
              </div>

              <div className="absolute top-1/3 left-0 text-[#3B82F6] animate-bounce delay-300">
                <div className="w-6 h-6 bg-gradient-to-r from-[#3B82F6] to-[#F4376D] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">💕</span>
                </div>
              </div>

              {/* Success Notification */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-slideInDown delay-1000">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-2 shadow-lg">
                  <span>🎉</span>
                  <span>It's a Match!</span>
                  <span>💕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
