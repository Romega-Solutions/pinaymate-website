import React, { useState, useEffect } from "react";

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("features");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-[#2d1b3d] via-[#1a0f26] to-[#3d2952] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/15 to-[#3B82F6]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#A855F7]/15 via-[#3B82F6]/10 to-[#F4376D]/10 rounded-full blur-3xl animate-float-delayed"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-[#F4376D]/40 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#A855F7]/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-[#3B82F6]/50 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative z-10 max-w-[1600px]">
        <div
          className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Enhanced Badge */}
          <div className="inline-block mb-6 animate-slideInDown">
            <div className="relative bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 px-8 py-4 rounded-full border border-[#F4376D]/30 backdrop-blur-sm">
              <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text text-sm font-bold tracking-wider uppercase font-roboto">
                Premium Features
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/5 via-[#A855F7]/5 to-[#3B82F6]/5 rounded-full blur animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 font-roboto leading-tight animate-fadeInUp">
            Why Choose{" "}
            <span className="relative text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text animate-gradient-x">
              PinayMate
              <div className="absolute -top-2 -right-4 animate-bounce">
                <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-3 h-3 text-white animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </span>
            ?
          </h2>

          <p className="text-lg md:text-xl text-[#C8B5E6] leading-relaxed max-w-3xl mx-auto font-roboto px-4 animate-fadeInUp delay-300">
            Experience the most advanced Filipino dating platform with
            <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text font-bold">
              {" "}
              cutting-edge features
            </span>{" "}
            designed to help you find genuine connections and lasting
            relationships.
          </p>

          {/* Feature Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8 animate-fadeInUp delay-500">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-gradient-to-r from-[#F4376D] to-[#A855F7] scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-16 md:space-y-20">
          {/* Feature 1: Advanced Matching Algorithm - Image Left, Text Right */}
          <div
            className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
          >
            <div className="flex-shrink-0 order-2 lg:order-1 animate-slideInLeft delay-200">
              <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-[#F4376D]/5 via-[#A855F7]/10 to-[#3B82F6]/5 rounded-3xl p-4 backdrop-blur-sm border border-[#F4376D]/30 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/20 via-[#A855F7]/20 to-[#3B82F6]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden shadow-inner">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-[#283040] font-roboto">
                        Smart Matching
                      </h3>
                      <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center animate-pulse shadow-lg">
                        <span className="text-white font-bold text-xs">AI</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 p-4 rounded-xl border border-[#F4376D]/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slideInUp delay-100">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center animate-heartbeat shadow-lg">
                            <span className="text-white text-xs font-bold">
                              97%
                            </span>
                          </div>
                          <span className="font-semibold text-[#283040] text-sm">
                            Compatibility Match
                          </span>
                        </div>
                        <p className="text-xs text-[#8D99B2]">
                          Based on 50+ compatibility factors
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 p-4 rounded-xl border border-[#A855F7]/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slideInUp delay-200">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center animate-spin-slow shadow-lg">
                            <span className="text-white text-xs font-bold animate-pulse">
                              AI
                            </span>
                          </div>
                          <span className="font-semibold text-[#283040] text-sm">
                            Smart Algorithm
                          </span>
                        </div>
                        <p className="text-xs text-[#8D99B2]">
                          Learning your preferences daily
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#F4376D]/10 p-4 rounded-xl border border-[#3B82F6]/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slideInUp delay-300">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#F4376D] rounded-full flex items-center justify-center animate-bounce shadow-lg">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="font-semibold text-[#283040] text-sm">
                            Real-Time Updates
                          </span>
                        </div>
                        <p className="text-xs text-[#8D99B2]">
                          Instant match notifications
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white py-3 rounded-full text-sm font-bold font-roboto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-subtle">
                        Find Your Match
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 lg:order-2 text-center lg:text-left animate-slideInRight delay-400">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-roboto animate-fadeInUp">
                <span className="block transform hover:scale-105 transition-transform duration-300">
                  Advanced Matching
                </span>
                <br />
                <span className="relative text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text animate-gradient-x">
                  Algorithm
                  <div className="absolute -top-1 -right-6 animate-pulse">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full animate-ping"></div>
                  </div>
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#C8B5E6] leading-relaxed font-roboto px-4 lg:px-0 animate-fadeInUp delay-200">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text font-bold">
                  AI-powered algorithm
                </span>{" "}
                analyzes compatibility across 50+ factors including personality,
                lifestyle, and relationship goals. Experience precision matching
                that brings you closer to your perfect Filipino soulmate.
              </p>

              <div className="space-y-4 animate-fadeInUp delay-300">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 px-4 py-2 rounded-full border border-[#F4376D]/20 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[#C8B5E6] text-sm font-roboto">
                      97% Match Accuracy
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 px-4 py-2 rounded-full border border-[#A855F7]/20 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                    <span className="text-[#C8B5E6] text-sm font-roboto">
                      Real-Time Learning
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start animate-fadeInUp delay-500">
                <button className="group relative bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white px-8 py-4 rounded-2xl font-black hover:opacity-90 transition-all duration-300 shadow-2xl transform hover:scale-105 font-roboto text-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#F4376D] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Smart Matching</span>
                    <div className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="animate-pulse"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Feature 2: Rich Profile Customization - Text Left, Image Right */}
          <div
            className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left animate-slideInLeft delay-600">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-roboto animate-fadeInUp">
                <span className="block transform hover:scale-105 transition-transform duration-300">
                  Rich Profile
                </span>
                <br />
                <span className="relative text-transparent bg-gradient-to-r from-[#F4376D] to-[#3B82F6] bg-clip-text animate-gradient-x">
                  Customization
                  <div className="absolute -top-1 -right-6 animate-bounce">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#F4376D] to-[#3B82F6] rounded-full animate-ping"></div>
                  </div>
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#C8B5E6] leading-relaxed font-roboto px-4 lg:px-0 animate-fadeInUp delay-200">
                Personalize your profile with our{" "}
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#3B82F6] bg-clip-text font-bold">
                  extensive customization options
                </span>
                . Showcase your personality, interests, and lifestyle through
                photos, videos, and detailed bio sections. Let your unique self
                shine and attract like-minded individuals.
              </p>
              <div className="flex justify-center lg:justify-start animate-fadeInUp delay-400">
                <button className="group relative bg-gradient-to-r from-[#F4376D] via-[#3B82F6] to-[#A855F7] text-white px-8 py-4 rounded-2xl font-black hover:opacity-90 transition-all duration-300 shadow-2xl transform hover:scale-105 font-roboto text-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#F4376D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Create Your Profile</span>
                    <div className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                      <span className="animate-pulse">✨</span>
                    </div>
                  </span>
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 order-1 lg:order-2 animate-slideInRight delay-800">
              <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-[#F4376D]/5 via-[#A855F7]/10 to-[#3B82F6]/5 rounded-3xl p-4 backdrop-blur-sm border border-[#F4376D]/30 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/20 via-[#A855F7]/20 to-[#3B82F6]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-full h-96 bg-white rounded-2xl overflow-hidden relative">
                  <div className="p-4">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">MJ</span>
                      </div>
                      <h3 className="font-bold text-[#283040] font-roboto">
                        Maria, 24
                      </h3>
                      <p className="text-xs text-[#8D99B2]">
                        📍 Manila, Philippines
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 p-2 rounded-lg border border-[#F4376D]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1">
                          About Me
                        </p>
                        <p className="text-xs text-[#8D99B2]">
                          Love traveling, cooking, and family time 💕
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 p-2 rounded-lg border border-[#A855F7]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1">
                          Interests
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="bg-[#F4376D] text-white px-2 py-1 rounded-full text-xs">
                            Cooking
                          </span>
                          <span className="bg-[#A855F7] text-white px-2 py-1 rounded-full text-xs">
                            Travel
                          </span>
                          <span className="bg-[#3B82F6] text-white px-2 py-1 rounded-full text-xs">
                            Music
                          </span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#F4376D]/10 p-2 rounded-lg border border-[#3B82F6]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1">
                          Looking For
                        </p>
                        <p className="text-xs text-[#8D99B2]">
                          Serious relationship & family
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-full bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white py-2 rounded-full text-xs font-bold font-roboto">
                        💕 Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Real-Time Chat and Messaging - Image Left, Text Right */}
          <div
            className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
          >
            <div className="flex-shrink-0 order-2 lg:order-1 animate-slideInLeft delay-1000">
              <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-[#A855F7]/5 via-[#3B82F6]/10 to-[#F4376D]/5 rounded-3xl p-4 backdrop-blur-sm border border-[#A855F7]/30 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/20 via-[#3B82F6]/20 to-[#F4376D]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-full h-96 bg-[#283040] rounded-2xl overflow-hidden relative">
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full"></div>
                      <span className="text-white font-bold text-sm font-roboto">
                        Messages
                      </span>
                      <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex-shrink-0"></div>
                        <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Hi! I loved your profile 😊 How's your day going?
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-[#8D99B2] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Thank you! Having a great day. Love your photos! 💕
                        </div>
                        <div className="w-8 h-8 bg-[#8D99B2] rounded-full flex-shrink-0"></div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex-shrink-0"></div>
                        <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Would you like to video chat later? 📹
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="inline-flex items-center space-x-1 text-green-400 text-xs font-roboto">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Online now</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center space-x-2 bg-[#1a202c] rounded-full p-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent text-white text-xs placeholder-gray-400 outline-none font-roboto"
                      />
                      <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 lg:order-2 text-center lg:text-left animate-slideInRight delay-1200">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-roboto animate-fadeInUp">
                Real-Time Chat and
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#A855F7] to-[#F4376D] bg-clip-text">
                  Messaging
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#C8B5E6] leading-relaxed font-roboto px-4 lg:px-0 animate-fadeInUp delay-200">
                Stay connected with your matches through our{" "}
                <span className="text-transparent bg-gradient-to-r from-[#A855F7] to-[#F4376D] bg-clip-text font-bold">
                  real-time chat system
                </span>
                . Enjoy seamless conversations, share photos and videos, and get
                to know each other at your perfect pace. Our intuitive interface
                makes meaningful connections effortless.
              </p>
              <div className="flex justify-center lg:justify-start animate-fadeInUp delay-400">
                <button className="group relative bg-gradient-to-r from-[#A855F7] via-[#F4376D] to-[#3B82F6] text-white px-8 py-4 rounded-2xl font-black hover:opacity-90 transition-all duration-300 shadow-2xl transform hover:scale-105 font-roboto text-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#F4376D] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Chatting</span>
                    <div className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                      <span className="animate-pulse">💬</span>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Feature 4: SheerID Verified Users - Text Left, Image Right */}
          <div
            className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "1200ms" : "0ms" }}
          >
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left animate-slideInLeft delay-1400">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-roboto animate-fadeInUp">
                SheerID
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text">
                  Verified Users
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#C8B5E6] leading-relaxed font-roboto px-4 lg:px-0 animate-fadeInUp delay-200">
                Every member undergoes comprehensive{" "}
                <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text font-bold">
                  SheerID verification
                </span>{" "}
                including identity, income, and background checks. Connect with
                confidence knowing all profiles are 100% authentic with no fake
                accounts or catfish profiles.
              </p>
              <div className="flex justify-center lg:justify-start animate-fadeInUp delay-400">
                <button className="group relative bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F4376D] text-white px-8 py-4 rounded-2xl font-black hover:opacity-90 transition-all duration-300 shadow-2xl transform hover:scale-105 font-roboto text-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Verified Now</span>
                    <div className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">
                      <span className="animate-pulse">🛡️</span>
                    </div>
                  </span>
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 order-1 lg:order-2 animate-slideInRight delay-1600">
              <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gradient-to-br from-[#3B82F6]/5 via-[#A855F7]/10 to-[#F4376D]/5 rounded-3xl p-4 backdrop-blur-sm border border-[#3B82F6]/30 shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 via-[#A855F7]/20 to-[#F4376D]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-full h-96 bg-white rounded-2xl overflow-hidden relative">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-[#283040] font-roboto">
                        Verified Profiles
                      </h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-bold text-green-600">
                          SheerID
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#283040] text-sm">
                            Identity Verified
                          </p>
                          <p className="text-xs text-[#8D99B2]">
                            Government ID confirmed
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#283040] text-sm">
                            Income Verified
                          </p>
                          <p className="text-xs text-[#8D99B2]">
                            Financial status confirmed
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-[#283040] text-sm">
                            Background Check
                          </p>
                          <p className="text-xs text-[#8D99B2]">
                            Clean record verified
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-xs text-green-600 font-bold">
                        ✅ 100% Authentic Profiles
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
