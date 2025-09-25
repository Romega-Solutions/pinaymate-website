import React from "react";

const Download: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2d1b3d] via-[#1a0f26] to-[#3d2952] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight font-roboto tracking-tight">
                Find Your Perfect{" "}
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text">
                  Match Today!
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#C8B5E6] leading-relaxed font-roboto max-w-xl">
                Join our dating app and embark on a journey of meaningful
                connections. Whether you're searching for romance,
                companionship, or a lifelong partner, PinayMate is designed to
                bring hearts together and create lasting relationships.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="group inline-flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white px-7 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-700/50"
              >
                <div className="w-10 h-10">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full fill-current"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-roboto uppercase tracking-wide">
                    Download on the
                  </div>
                  <div className="text-lg font-bold font-roboto">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="group inline-flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white px-7 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-700/50"
              >
                <div className="w-10 h-10">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full fill-current"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-roboto uppercase tracking-wide">
                    Get it on
                  </div>
                  <div className="text-lg font-bold font-roboto">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/30 via-[#A855F7]/20 to-[#3B82F6]/30 blur-3xl scale-110 animate-pulse"></div>

              {/* Phone Stack */}
              <div className="relative">
                {/* Back Phone */}
                <div className="absolute -right-6 top-8 w-72 h-[580px] bg-gradient-to-br from-[#F4376D]/20 to-[#A855F7]/20 rounded-[3rem] backdrop-blur-sm border border-[#F4376D]/30 transform rotate-12 scale-90 opacity-70"></div>

                {/* Main Phone */}
                <div className="relative w-80 h-[620px] bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e] rounded-[3.5rem] p-3 shadow-2xl border-2 border-[#A855F7]/30">
                  <div className="w-full h-full bg-gradient-to-br from-[#1a0f26] to-[#0f0a1a] rounded-[3rem] overflow-hidden relative">
                    {/* Screen Content */}
                    <div className="h-full relative">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-8 pt-6 pb-4">
                        <div className="text-white text-sm font-medium font-roboto">
                          9:41
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white/80 rounded-sm"></div>
                          <div className="w-1 h-4 bg-white/60 rounded-sm"></div>
                          <div className="w-6 h-3 border-2 border-white/70 rounded-sm">
                            <div className="w-full h-full bg-green-400 rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-8 py-2">
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-lg">
                                ∞
                              </span>
                            </div>
                            <span className="text-white text-2xl font-black font-roboto">
                              PinayMate
                            </span>
                          </div>
                          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#F4376D] rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Profile Cards */}
                      <div className="px-6 space-y-6">
                        {/* Main Profile Card */}
                        <div className="bg-gradient-to-br from-[#F4376D]/25 to-[#A855F7]/20 rounded-3xl p-1.5 backdrop-blur-sm border border-[#F4376D]/40 shadow-xl">
                          <div className="bg-black/50 rounded-[1.3rem] p-6 backdrop-blur-md">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-16 h-16 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">
                                  M
                                </span>
                              </div>
                              <div>
                                <div className="text-white font-bold text-xl font-roboto">
                                  Maria, 24
                                </div>
                                <div className="text-[#C8B5E6] text-sm font-roboto flex items-center space-x-1">
                                  <span>📍</span>
                                  <span>Manila, Philippines</span>
                                </div>
                                <div className="flex items-center space-x-1 mt-1">
                                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                  <span className="text-green-400 text-xs font-roboto">
                                    Online now
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="text-[#C8B5E6] text-sm font-roboto mb-4 bg-white/5 p-3 rounded-xl">
                              "Looking for genuine love and serious relationship
                              💕 Family-oriented and ready to start new
                              chapter."
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
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
                              </div>
                              <div className="flex space-x-3">
                                <button className="w-12 h-12 bg-gray-600/30 hover:bg-gray-500/40 rounded-full flex items-center justify-center transition-colors">
                                  <span className="text-gray-300 text-xl">
                                    ✕
                                  </span>
                                </button>
                                <button className="w-12 h-12 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all">
                                  <span className="text-white text-xl">💕</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Second Profile (Peek) */}
                        <div className="bg-gradient-to-br from-[#A855F7]/20 to-[#3B82F6]/15 rounded-3xl p-1.5 backdrop-blur-sm border border-[#A855F7]/30 transform rotate-1 scale-95 opacity-60">
                          <div className="bg-black/40 rounded-[1.3rem] p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">I</span>
                              </div>
                              <div>
                                <div className="text-white font-bold text-lg font-roboto">
                                  Isabella, 26
                                </div>
                                <div className="text-[#C8B5E6] text-sm font-roboto">
                                  Cebu, Philippines
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex justify-around items-center bg-black/70 rounded-2xl py-4 px-6 backdrop-blur-lg border border-white/10">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 rounded-full blur-2xl animate-pulse delay-75"></div>
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-[#F4376D] rounded-full animate-bounce"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#A855F7] rounded-full animate-ping delay-150"></div>
      <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-[#3B82F6] rounded-full animate-pulse delay-300"></div>
    </section>
  );
};

export default Download;
