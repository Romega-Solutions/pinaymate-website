
import {
  Heart,
  MessageCircle,
  Star,
  User,
  MapPin,
  Sparkles,
  Apple,
  Play,
} from "lucide-react";

const Download = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#2d1b3d] via-[#1a0f26] to-[#3d2952] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-left order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight font-roboto tracking-tight">
                Find Your Perfect{" "}
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text">
                  Match
                </span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-[#C8B5E6] leading-relaxed font-roboto max-w-xl">
                Start your journey to finding genuine connections and meaningful
                relationships.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#F4376D]/20 to-[#A855F7]/20 rounded-full flex items-center justify-center border border-[#F4376D]/30">
                  <Heart className="w-5 h-5 text-[#F4376D]" />
                </div>
                <span className="text-white text-sm font-roboto font-medium">
                  Verified Profiles
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#A855F7]/20 to-[#3B82F6]/20 rounded-full flex items-center justify-center border border-[#A855F7]/30">
                  <MessageCircle className="w-5 h-5 text-[#A855F7]" />
                </div>
                <span className="text-white text-sm font-roboto font-medium">
                  Instant Messaging
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#3B82F6]/20 to-[#F4376D]/20 rounded-full flex items-center justify-center border border-[#3B82F6]/30">
                  <Sparkles className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <span className="text-white text-sm font-roboto font-medium">
                  Smart Matching
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#F4376D]/20 to-[#A855F7]/20 rounded-full flex items-center justify-center border border-[#F4376D]/30">
                  <Star className="w-5 h-5 text-[#F4376D]" />
                </div>
                <span className="text-white text-sm font-roboto font-medium">
                  Premium Features
                </span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <a
                href="#"
                className="group inline-flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white px-6 md:px-7 py-3 md:py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-700/50"
              >
                <Apple className="w-8 h-8 md:w-10 md:h-10" />
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-roboto uppercase tracking-wide">
                    Download on the
                  </div>
                  <div className="text-base md:text-lg font-bold font-roboto">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="group inline-flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white px-6 md:px-7 py-3 md:py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-700/50"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-roboto uppercase tracking-wide">
                    Get it on
                  </div>
                  <div className="text-base md:text-lg font-bold font-roboto">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/30 via-[#A855F7]/20 to-[#3B82F6]/30 blur-3xl scale-110 animate-pulse"></div>

              {/* Phone Stack */}
              <div className="relative">
                {/* Back Phone */}
                <div className="hidden sm:block absolute -right-4 md:-right-6 top-6 md:top-8 w-64 md:w-72 h-[500px] md:h-[580px] bg-gradient-to-br from-[#F4376D]/20 to-[#A855F7]/20 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-sm border border-[#F4376D]/30 transform rotate-12 scale-90 opacity-70"></div>

                {/* Main Phone */}
                <div className="relative w-full max-w-[320px] md:max-w-[360px] lg:max-w-[380px] mx-auto aspect-[9/19] bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e] rounded-[2.5rem] md:rounded-[3.5rem] p-2 md:p-3 shadow-2xl border-2 border-[#A855F7]/30">
                  <div className="w-full h-full bg-gradient-to-br from-[#1a0f26] to-[#0f0a1a] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative">
                    {/* Screen Content */}
                    <div className="h-full relative flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 md:px-8 pt-4 md:pt-6 pb-3 md:pb-4 flex-shrink-0">
                        <div className="text-white text-xs md:text-sm font-medium font-roboto">
                          9:41
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 md:w-4 h-1.5 md:h-2 bg-white/80 rounded-sm"></div>
                          <div className="w-1 h-3 md:h-4 bg-white/60 rounded-sm"></div>
                          <div className="w-5 md:w-6 h-2.5 md:h-3 border-2 border-white/70 rounded-sm">
                            <div className="w-full h-full bg-green-400 rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-6 md:px-8 py-2 flex-shrink-0">
                        <div className="flex items-center justify-between mb-6 md:mb-8">
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg">
                              <Heart
                                className="w-4 h-4 md:w-5 md:h-5 text-white"
                                fill="white"
                              />
                            </div>
                            <span className="text-white text-lg md:text-2xl font-black font-roboto">
                              PinayMate
                            </span>
                          </div>
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#F4376D] rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Profile Cards - Scrollable */}
                      <div className="flex-1 px-4 md:px-6 space-y-4 md:space-y-6 overflow-y-auto pb-24">
                        {/* Main Profile Card */}
                        <div className="bg-gradient-to-br from-[#F4376D]/25 to-[#A855F7]/20 rounded-2xl md:rounded-3xl p-1 md:p-1.5 backdrop-blur-sm border border-[#F4376D]/40 shadow-xl">
                          <div className="bg-black/50 rounded-xl md:rounded-[1.3rem] p-4 md:p-6 backdrop-blur-md">
                            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                <User className="w-6 h-6 md:w-8 md:h-8 text-white" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-white font-bold text-base md:text-xl font-roboto">
                                  Preview Profile
                                </div>
                                <div className="text-[#C8B5E6] text-xs md:text-sm font-roboto flex items-center space-x-1">
                                  <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                                  <span className="truncate">Philippines</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-[#C8B5E6] text-xs md:text-sm font-roboto mb-3 md:mb-4 bg-white/5 p-2.5 md:p-3 rounded-lg md:rounded-xl">
                              Discover meaningful connections with verified
                              profiles
                            </div>
                            <div className="flex justify-end items-center gap-2">
                              <div className="flex space-x-2 md:space-x-3 flex-shrink-0">
                                <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-600/30 hover:bg-gray-500/40 rounded-full flex items-center justify-center transition-colors">
                                  <span className="text-gray-300 text-base md:text-xl">
                                    ✕
                                  </span>
                                </button>
                                <button className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all">
                                  <Heart
                                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                                    fill="white"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Second Profile (Peek) */}
                        <div className="bg-gradient-to-br from-[#A855F7]/20 to-[#3B82F6]/15 rounded-2xl md:rounded-3xl p-1 md:p-1.5 backdrop-blur-sm border border-[#A855F7]/30 transform rotate-1 scale-95 opacity-60">
                          <div className="bg-black/40 rounded-xl md:rounded-[1.3rem] p-3 md:p-4">
                            <div className="flex items-center space-x-2 md:space-x-3">
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-white font-bold text-sm md:text-lg font-roboto truncate">
                                  More Profiles
                                </div>
                                <div className="text-[#C8B5E6] text-xs md:text-sm font-roboto truncate">
                                  Waiting to connect
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                        <div className="flex justify-around items-center bg-black/70 rounded-xl md:rounded-2xl py-3 md:py-4 px-4 md:px-6 backdrop-blur-lg border border-white/10">
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                            <Heart
                              className="w-4 h-4 md:w-5 md:h-5 text-white"
                              fill="white"
                            />
                          </div>
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-600/50 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                          </div>
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-600/50 rounded-full flex items-center justify-center">
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                          </div>
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-600/50 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
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
      <div className="absolute top-20 left-10 w-32 md:w-40 h-32 md:h-40 bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-48 h-40 md:h-48 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-2 md:w-3 h-2 md:h-3 bg-[#F4376D] rounded-full animate-bounce"></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 md:w-2 h-1.5 md:h-2 bg-[#A855F7] rounded-full animate-ping"></div>
    </section>
  );
};

export default Download;
