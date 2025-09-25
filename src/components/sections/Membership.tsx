import React from "react";

const Membership: React.FC = () => {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-[#2d3748] via-[#1a202c] to-[#283040]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative z-10 max-w-[1600px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-roboto">
            Choose Your{" "}
            <span className="text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-[#8D99B2] leading-relaxed max-w-3xl mx-auto font-roboto mb-8">
            Premium memberships for serious connections. Quality Filipinas join
            free to ensure an authentic community of relationship-minded women.
          </p>
          <div className="bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 border border-[#F4376D]/30 rounded-2xl px-6 py-4 inline-block backdrop-blur-sm">
            <span className="text-[#F4376D] font-bold text-lg">
              💕 Why Men Pay & Filipinas Join Free:
            </span>
            <p className="text-[#8D99B2] text-sm mt-2 max-w-2xl">
              This ensures serious, committed men connect with genuine Filipinas
              seeking real relationships - creating the perfect balance for
              meaningful connections.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Free for Filipinas - First Card */}
          <div className="order-1 bg-gradient-to-br from-[#F4376D]/20 to-[#A855F7]/20 p-6 lg:p-8 rounded-3xl border-2 border-[#F4376D]/50 backdrop-blur-sm hover:border-[#F4376D]/70 transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl lg:text-3xl">🌺</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-black text-white mb-2 font-roboto">
                For Beautiful Filipinas
              </h3>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text mb-4">
                100% FREE
              </div>
              <p className="text-[#8D99B2] text-sm mb-4 font-roboto">
                Join our exclusive community of relationship-minded women
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Full platform access
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Premium profile visibility
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Unlimited communication
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  VIP events & community
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Ambassador rewards program
                </span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white py-3 lg:py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-xl transform hover:scale-105 font-roboto text-sm lg:text-base">
              🌺 Join Free as Filipina
            </button>

            <div className="text-center mt-3">
              <p className="text-[#8D99B2] text-xs font-roboto">
                ✨ No hidden fees, no credit card required
              </p>
            </div>
          </div>

          {/* Gold Plan - Most Popular - Second Card */}
          <div className="order-2 relative bg-gradient-to-br from-[#F4376D]/30 to-[#A855F7]/30 p-6 lg:p-8 rounded-3xl border-2 border-[#F4376D]/60 backdrop-blur-sm transform scale-105 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-bold">
                🔥 MOST POPULAR
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl lg:text-3xl">🥇</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-black text-white mb-2 font-roboto">
                Gold Elite
              </h3>
              <div className="text-[#F4376D] text-sm mb-4 font-bold">
                Perfect for serious connections
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2">
                $69
                <span className="text-base lg:text-lg text-[#8D99B2]">
                  /month
                </span>
              </div>
              <div className="text-[#F4376D] text-sm font-bold">
                Best value for commitment
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Access to all verified Filipinas
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  AI-powered matching system
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Unlimited messaging & chat
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Video calls & voice chat
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Priority customer support
                </span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white py-3 lg:py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-xl transform hover:scale-105 font-roboto text-sm lg:text-base">
              🌟 Start Gold Elite
            </button>
          </div>

          {/* Diamond VIP - Premium Plan - Third Card */}
          <div className="order-3 bg-gradient-to-br from-[#A855F7]/20 to-[#3B82F6]/20 p-6 lg:p-8 rounded-3xl border-2 border-[#A855F7]/50 backdrop-blur-sm hover:border-[#A855F7]/70 transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl lg:text-3xl">💎</span>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-black text-white mb-2 font-roboto">
                Diamond VIP
              </h3>
              <div className="text-[#A855F7] text-sm mb-4 font-bold">
                Ultimate luxury experience
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2">
                $149
                <span className="text-base lg:text-lg text-[#8D99B2]">
                  /month
                </span>
              </div>
              <div className="text-[#A855F7] text-sm font-bold">
                Concierge-level service
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Everything in Gold Elite +
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Personal relationship advisor
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Travel assistance & planning
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  Exclusive VIP events
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
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
                <span className="text-white text-sm font-roboto">
                  24/7 VIP concierge support
                </span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#F4376D] text-white py-3 lg:py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-xl transform hover:scale-105 font-roboto text-sm lg:text-base">
              💎 Start Diamond VIP
            </button>
          </div>
        </div>

        {/* Value Explanation */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#283040]/50 to-[#1a202c]/50 border border-[#8D99B2]/30 rounded-2xl px-8 py-6 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-roboto">
              💡 Why This Model Works
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-[#F4376D] font-bold mb-2 font-roboto">
                  For Men:
                </h4>
                <p className="text-[#8D99B2] text-sm font-roboto">
                  Premium membership ensures you're connecting with serious,
                  relationship-minded Filipinas in a curated environment free
                  from fake profiles and time-wasters.
                </p>
              </div>
              <div>
                <h4 className="text-[#A855F7] font-bold mb-2 font-roboto">
                  For Filipinas:
                </h4>
                <p className="text-[#8D99B2] text-sm font-roboto">
                  Free access attracts genuine, quality women seeking committed
                  relationships, creating the perfect balance for meaningful
                  connections and successful matches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
