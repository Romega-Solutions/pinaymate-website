import React, { useState, useEffect } from "react";
import {
  Heart,
  Shield,
  MessageCircle,
  Sparkles,
  CheckCircle,
  UserCheck,
  Lock,
  Users,
  Send
} from "lucide-react";

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
              <div className="absolute -top-2 -right-8 animate-bounce">
                <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-3 h-3 text-white fill-white animate-pulse" />
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
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 p-4 rounded-xl border border-[#F4376D]/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slideInUp delay-100">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center animate-heartbeat shadow-lg">
                            <Heart className="w-4 h-4 text-white fill-white" />
                          </div>
                          <span className="font-semibold text-[#283040] text-sm">
                            97% Compatibility
                          </span>
                        </div>
                        <p className="text-xs text-[#8D99B2]">
                          Based on 50+ compatibility factors
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 p-4 rounded-xl border border-[#A855F7]/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slideInUp delay-200">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center animate-spin-slow shadow-lg">
                            <Sparkles className="w-4 h-4 text-white" />
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
                            <Users className="w-4 h-4 text-white" />
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
                      <button className="w-full bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white py-3 rounded-full text-sm font-bold font-roboto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-subtle flex items-center justify-center space-x-2">
                        <Heart className="w-4 h-4 fill-white" />
                        <span>Find Your Match</span>
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
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-[#C8B5E6] text-sm font-roboto">
                      97% Match Accuracy
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 px-4 py-2 rounded-full border border-[#A855F7]/20 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-blue-500" />
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
                    <Heart className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
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
                    <Sparkles className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
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
                      <p className="text-xs text-[#8D99B2] flex items-center justify-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>Manila, Philippines</span>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 p-2 rounded-lg border border-[#F4376D]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1 flex items-center space-x-1">
                          <Heart className="w-3 h-3 text-[#F4376D]" />
                          <span>About Me</span>
                        </p>
                        <p className="text-xs text-[#8D99B2]">
                          Love traveling, cooking, and family time
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 p-2 rounded-lg border border-[#A855F7]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1 flex items-center space-x-1">
                          <Sparkles className="w-3 h-3 text-[#A855F7]" />
                          <span>Interests</span>
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <span className="bg-[#F4376D] text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                            <span>Cooking</span>
                          </span>
                          <span className="bg-[#A855F7] text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                            <span>Travel</span>
                          </span>
                          <span className="bg-[#3B82F6] text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                            <span>Music</span>
                          </span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#F4376D]/10 p-2 rounded-lg border border-[#3B82F6]/20">
                        <p className="text-xs font-semibold text-[#283040] mb-1 flex items-center space-x-1">
                          <UserCheck className="w-3 h-3 text-[#3B82F6]" />
                          <span>Looking For</span>
                        </p>
                        <p className="text-xs text-[#8D99B2]">
                          Serious relationship & family
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-full bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white py-2 rounded-full text-xs font-bold font-roboto flex items-center justify-center space-x-2">
                        <Heart className="w-3 h-3 fill-white" />
                        <span>Send Message</span>
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
                      <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                        <MessageCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white font-bold text-sm font-roboto">
                        Messages
                      </span>
                      <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex-shrink-0"></div>
                        <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Hi! I loved your profile. How's your day going?
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-[#8D99B2] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Thank you! Having a great day. Love your photos!
                        </div>
                        <div className="w-8 h-8 bg-[#8D99B2] rounded-full flex-shrink-0"></div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex-shrink-0"></div>
                        <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white p-2 rounded-lg text-xs font-roboto max-w-[200px]">
                          Would you like to chat more?
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
                      <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <Send className="w-3 h-3 text-white" />
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
                    <MessageCircle className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Feature 4: Verified Users - Text Left, Image Right */}
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
                Verified & Authentic
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text">
                  User Profiles
                </span>
              </h3>
              <p className="text-base md:text-lg text-[#C8B5E6] leading-relaxed font-roboto px-4 lg:px-0 animate-fadeInUp delay-200">
                Every member undergoes comprehensive{" "}
                <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text font-bold">
                  profile verification
                </span>{" "}
                including identity and background checks. Connect with
                confidence knowing all profiles are 100% authentic with no fake
                accounts or catfish profiles.
              </p>
              <div className="flex justify-center lg:justify-start animate-fadeInUp delay-400">
                <button className="group relative bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F4376D] text-white px-8 py-4 rounded-2xl font-black hover:opacity-90 transition-all duration-300 shadow-2xl transform hover:scale-105 font-roboto text-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Verified Now</span>
                    <Shield className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
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
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <UserCheck className="w-5 h-5 text-white" />
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
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#283040] text-sm">
                            Profile Verified
                          </p>
                          <p className="text-xs text-[#8D99B2]">
                            Authenticity confirmed
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <Lock className="w-5 h-5 text-white" />
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
                      <div className="inline-flex items-center space-x-2 text-green-600 text-xs font-bold">
                        <CheckCircle className="w-4 h-4" />
                        <span>100% Authentic Profiles</span>
                      </div>
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
