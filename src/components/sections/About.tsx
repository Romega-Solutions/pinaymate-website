import React, { useState, useEffect } from "react";
import { Heart, Shield, Users, MessageCircle, Sparkles } from "lucide-react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [heartBeats] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#ffffff] to-[#f1f5f9] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#F4376D]/5 via-[#A855F7]/5 to-[#3B82F6]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#A855F7]/5 via-[#3B82F6]/5 to-[#F4376D]/5 rounded-full blur-3xl animate-float-delayed"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-[#F4376D]/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#A855F7]/40 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-[#3B82F6]/20 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="inline-block animate-slideInLeft">
              <div className="relative bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 px-6 py-3 rounded-full border border-[#F4376D]/20 backdrop-blur-sm">
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text text-sm font-bold tracking-wider uppercase font-roboto">
                  ABOUT PINAYMATE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/5 via-[#A855F7]/5 to-[#3B82F6]/5 rounded-full blur animate-pulse"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#283040] leading-tight font-roboto animate-fadeInUp">
              <span className="block transform hover:scale-105 transition-transform duration-300">
                Connecting Hearts,
              </span>

              <span className="relative block italic text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text animate-fadeInUp delay-300 transform hover:scale-105 transition-all duration-500">
                Building Forever
                <div className="absolute -top-2 -right-8 animate-heartbeat">
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
                    </div>
                  </div>
                </div>
              </span>
            </h2>

            <div className="space-y-6 animate-fadeInUp delay-500">
              <p className="text-xl md:text-2xl text-[#6b7280] leading-relaxed font-roboto">
                At{" "}
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text font-bold">
                  PinayMate
                </span>
                , we believe in the transformative power of authentic
                connection.
              </p>

              <p className="text-lg text-[#8D99B2] leading-relaxed font-roboto">
                Our mission transcends simple introductions—we create a
                sanctuary where meaningful relationships flourish. In today's
                digital chaos, we've crafted a premium platform that champions
                authenticity, deep compatibility, and shared dreams of forever
                love.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 py-4">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 rounded-2xl px-6 py-4 border border-[#F4376D]/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 animate-slideInUp">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center animate-pulse">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[#283040] font-black text-lg font-roboto">
                      Verified
                    </div>
                    <div className="text-[#8D99B2] text-sm font-roboto">
                      Authentic Profiles
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 rounded-2xl px-6 py-4 border border-[#A855F7]/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 animate-slideInUp delay-150">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center animate-pulse delay-75">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[#283040] font-black text-lg font-roboto">
                      Active
                    </div>
                    <div className="text-[#8D99B2] text-sm font-roboto">
                      Community
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-fadeInUp delay-700">
              <button className="group relative bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white px-10 py-5 rounded-2xl text-xl font-black hover:opacity-90 transition-all duration-300 shadow-2xl transform hover:scale-105 font-roboto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F4376D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Discover Your Soulmate</span>
                  <Heart className="w-6 h-6 animate-heartbeat" />
                </span>
              </button>

              <p className="text-[#8D99B2] text-sm font-roboto text-center">
                Join the community finding their perfect match • Premium
                Filipino dating experience
              </p>
            </div>
          </div>

          {/* Right Content - 3D Connection Network Visualization */}
          <div
            className={`relative flex justify-center items-center transform transition-all duration-1500 ${
              isVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-20 opacity-0 scale-75"
            }`}
          >
            <div className="relative w-96 h-96 perspective-1000">
              {/* Central 3D Heart Hub - Enhanced with multiple layers */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-float">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-[#F4376D]/20 via-[#A855F7]/30 to-[#3B82F6]/20 blur-xl animate-pulse"></div>

                  {/* Middle ring */}
                  <div className="relative w-32 h-32 bg-white/90 backdrop-blur-md rounded-full border-4 border-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] shadow-2xl flex items-center justify-center transform-gpu hover:rotate-y-180 transition-transform duration-700">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                      {/* 3D Heart with enhanced effects */}
                      <div className="relative z-10 transform animate-heartbeat-3d">
                        <Heart
                          className="w-12 h-12 text-white fill-white drop-shadow-lg"
                          style={{
                            filter:
                              "drop-shadow(0 4px 8px rgba(244, 55, 109, 0.3))",
                            transform: `rotateY(${
                              heartBeats * 10
                            }deg) translateZ(10px)`,
                          }}
                        />
                      </div>

                      {/* Inner shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-full"></div>

                      {/* Rotating gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-spin-slow"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Connection Lines with enhanced animations */}
              <svg
                className="absolute inset-0 w-full h-full transform-gpu"
                viewBox="0 0 384 384"
                style={{ transform: "rotateX(10deg) rotateY(5deg)" }}
              >
                <defs>
                  <linearGradient
                    id="connection3D"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F4376D" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Enhanced curved connection lines with 3D effect */}
                {[
                  "M192 192 Q120 120 80 80",
                  "M192 192 Q264 120 304 80",
                  "M192 192 Q120 264 80 304",
                  "M192 192 Q264 264 304 304",
                  "M192 192 Q192 120 192 80",
                  "M192 192 Q120 192 80 192",
                ].map((pathData, index) => (
                  <path
                    key={index}
                    d={pathData}
                    stroke="url(#connection3D)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8,4"
                    filter="url(#glow)"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;24"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${index * 0.3}s`}
                    />
                  </path>
                ))}
              </svg>

              {/* 3D Profile Circles with enhanced effects */}
              {[
                {
                  position: "top-8 left-8",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  delay: "0ms",
                },
                {
                  position: "top-8 right-8",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  delay: "200ms",
                },
                {
                  position: "bottom-8 left-8",
                  image:
                    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  delay: "400ms",
                },
                {
                  position: "bottom-8 right-8",
                  image:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  delay: "600ms",
                },
                {
                  position: "top-1/2 right-0 transform -translate-y-1/2",
                  image:
                    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  delay: "800ms",
                },
                {
                  position: "top-1/2 left-0 transform -translate-y-1/2",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                  delay: "1000ms",
                },
              ].map((profileData, index) => (
                <div
                  key={index}
                  className={`absolute ${profileData.position} animate-float-3d`}
                  style={{ animationDelay: profileData.delay }}
                >
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-[#F4376D]/30 to-[#A855F7]/30 rounded-full blur-lg group-hover:scale-150 transition-transform duration-300"></div>

                    {/* Profile image with 3D effect */}
                    <img
                      src={profileData.image}
                      alt="Member"
                      className="relative w-16 h-16 rounded-full border-4 border-white shadow-2xl object-cover transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer"
                    />

                    {/* Online status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}

              {/* Enhanced 3D Floating Icons with physics */}
              {[
                {
                  position: "top-16 left-1/2 transform -translate-x-1/2",
                  icon: Heart,
                  color: "from-[#F4376D] to-[#A855F7]",
                  delay: "0s",
                },
                {
                  position: "bottom-16 left-1/4",
                  icon: MessageCircle,
                  color: "from-[#A855F7] to-[#3B82F6]",
                  delay: "0.5s",
                },
                {
                  position: "top-1/4 right-1/4",
                  icon: Sparkles,
                  color: "from-[#3B82F6] to-[#F4376D]",
                  delay: "1s",
                },
                {
                  position: "bottom-1/3 right-1/3",
                  icon: Users,
                  color: "from-[#F4376D] to-[#A855F7]",
                  delay: "1.5s",
                },
                {
                  position: "top-2/3 left-1/6",
                  icon: Heart,
                  color: "from-[#A855F7] to-[#3B82F6]",
                  delay: "2s",
                },
              ].map((iconData, index) => {
                const IconComponent = iconData.icon;
                return (
                  <div
                    key={index}
                    className={`absolute ${iconData.position} animate-float-heart-3d`}
                    style={{ animationDelay: iconData.delay }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-150 transition-all duration-300 cursor-pointer bg-gradient-to-br ${iconData.color}`}
                    >
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                );
              })}

              {/* Success match notification */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-slideInDown-3d delay-1000">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center space-x-2 shadow-2xl backdrop-blur-sm border border-white/20">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                    <Heart className="w-3 h-3 fill-white" />
                  </div>
                  <span>Active Community</span>
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
