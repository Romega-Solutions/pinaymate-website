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
  const features = [
    {
      icon: Heart,
      text: "Verified Profiles",
      color: "from-[#F4376D]/20 to-[#A855F7]/20",
      iconColor: "text-[#F4376D]",
    },
    {
      icon: MessageCircle,
      text: "Instant Messaging",
      color: "from-[#A855F7]/20 to-[#3B82F6]/20",
      iconColor: "text-[#A855F7]",
    },
    {
      icon: Sparkles,
      text: "Smart Matching",
      color: "from-[#3B82F6]/20 to-[#F4376D]/20",
      iconColor: "text-[#3B82F6]",
    },
    {
      icon: Star,
      text: "Premium Features",
      color: "from-[#F4376D]/20 to-[#A855F7]/20",
      iconColor: "text-[#F4376D]",
    },
  ];

  return (
    <section
      id="download"
      className="py-16 md:py-20 bg-gradient-to-br from-[#2d1b3d] via-[#1a0f26] to-[#3d2952] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight font-roboto">
                Find Your Perfect{" "}
                <span className="text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text">
                  Match
                </span>
              </h2>
              <p className="text-base md:text-lg text-[#C8B5E6] font-roboto max-w-xl">
                Start your journey to finding genuine connections and meaningful
                relationships.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center border border-[#F4376D]/30`}
                    >
                      <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>
                    <span className="text-white text-sm font-roboto font-medium">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#"
                className="group inline-flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl border border-gray-700/50"
              >
                <Apple className="w-10 h-10" />
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-roboto uppercase tracking-wide">
                    Download on the
                  </div>
                  <div className="text-lg font-bold font-roboto">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="group inline-flex items-center justify-center space-x-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl border border-gray-700/50"
              >
                <Play className="w-10 h-10" fill="currentColor" />
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
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm">
              {/* Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/30 via-[#A855F7]/20 to-[#3B82F6]/30 blur-3xl scale-110 animate-pulse"
                aria-hidden="true"
              ></div>

              {/* Phone */}
              <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] bg-gradient-to-br from-[#2a2a3e] to-[#1a1a2e] rounded-[2.5rem] p-2 shadow-2xl border-2 border-[#A855F7]/30">
                <div className="w-full h-full bg-gradient-to-br from-[#1a0f26] to-[#0f0a1a] rounded-[2rem] overflow-hidden flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2 flex-shrink-0">
                    <div className="text-white text-xs font-medium font-roboto">
                      9:41
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-1.5 bg-white/80 rounded-sm"></div>
                      <div className="w-1 h-3 bg-white/60 rounded-sm"></div>
                      <div className="w-5 h-2.5 border-2 border-white/70 rounded-sm">
                        <div className="w-full h-full bg-green-400 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-6 py-2 flex-shrink-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg">
                          <Heart className="w-4 h-4 text-white" fill="white" />
                        </div>
                        <span className="text-white text-lg font-black font-roboto">
                          PinayMate
                        </span>
                      </div>
                      <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#F4376D] rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Card */}
                  <div className="flex-1 px-4 pb-20 overflow-hidden">
                    <div className="bg-gradient-to-br from-[#F4376D]/25 to-[#A855F7]/20 rounded-2xl p-1 backdrop-blur-sm border border-[#F4376D]/40 shadow-xl h-full">
                      <div className="bg-black/50 rounded-xl p-4 backdrop-blur-md h-full flex flex-col">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-white font-bold text-base font-roboto">
                              Preview Profile
                            </div>
                            <div className="text-[#C8B5E6] text-xs font-roboto flex items-center space-x-1">
                              <MapPin className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">Philippines</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-[#C8B5E6] text-xs font-roboto mb-3 bg-white/5 p-2.5 rounded-lg flex-1">
                          Discover meaningful connections with verified profiles
                        </div>
                        <div className="flex justify-end space-x-2">
                          <button className="w-10 h-10 bg-gray-600/30 hover:bg-gray-500/40 rounded-full flex items-center justify-center transition-colors">
                            <span className="text-gray-300 text-lg">✕</span>
                          </button>
                          <button className="w-10 h-10 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all">
                            <Heart
                              className="w-5 h-5 text-white"
                              fill="white"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-around items-center bg-black/70 rounded-xl py-3 px-4 backdrop-blur-lg border border-white/10">
                      {[
                        { icon: Heart, active: true },
                        { icon: MessageCircle, active: false },
                        { icon: Star, active: false },
                        { icon: User, active: false },
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={i}
                            className={`w-7 h-7 rounded-full flex items-center justify-center ${
                              item.active
                                ? "bg-gradient-to-r from-[#F4376D] to-[#A855F7]"
                                : "bg-gray-600/50"
                            }`}
                          >
                            <Icon
                              className={`w-4 h-4 ${
                                item.active ? "text-white" : "text-gray-400"
                              }`}
                              fill={item.active ? "white" : "none"}
                            />
                          </div>
                        );
                      })}
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

export default Download;
