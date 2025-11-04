
import {
  Check,
  Heart,
  Award,
  Crown,
  Star,
  MessageCircle,
  Search,
  Eye,
  Image,
  Sparkles,
  Headphones,
  Verified,
  Globe,
} from "lucide-react";

const MobileMembership = () => {
  const handleJoinFree = () => {
    console.log("Navigate to Filipina registration");
    // window.location.href = "/register?type=filipina";
  };

  const handleSelectPlan = (planType: string, planDuration = "1month") => {
    console.log(`Selected plan: ${planType}, Duration: ${planDuration}`);
    // window.location.href = `/checkout?plan=${planType}&duration=${planDuration}`;
  };

  return (
    <section
      id="pricing"
      className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Choose Your{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text">
              Perfect Plan
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Premium memberships for serious connections. Quality Filipinas join
            free.
          </p>
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl px-6 py-4 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-pink-500" fill="#ec4899" />
              <span className="text-pink-500 font-bold text-sm md:text-base">
                Why Men Pay & Filipinas Join Free:
              </span>
            </div>
            <p className="text-slate-400 text-sm md:text-base">
              Ensures serious men connect with genuine Filipinas seeking real
              relationships.
            </p>
          </div>
        </div>

        {/* Pricing Cards - Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-7xl mx-auto">
          {/* Free for Filipinas Card */}
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-6 lg:p-8 rounded-2xl border-2 border-pink-500/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">
                For Beautiful Filipinas
              </h3>
              <div className="text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-3">
                100% FREE
              </div>
              <p className="text-slate-400 text-sm">
                Join our exclusive community
              </p>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {[
                "Full platform access",
                "Premium profile visibility",
                "Unlimited messaging",
                "Receive all messages",
                "Profile verification badge",
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={handleJoinFree}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-4 rounded-full font-bold text-base shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                <Heart className="w-5 h-5" />
                Join Free as Filipina
              </button>

              <p className="text-center text-slate-400 text-xs mt-3 flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" />
                No hidden fees, no credit card required
              </p>
            </div>
          </div>

          {/* Gold Plan - Most Popular */}
          <div className="relative bg-gradient-to-br from-pink-500/30 to-purple-500/30 p-6 lg:p-8 rounded-2xl border-2 border-pink-500/60 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4" fill="white" />
                MOST POPULAR
              </div>
            </div>

            <div className="text-center mb-6 pt-2">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                Gold Membership
              </h3>
              <div className="text-pink-500 text-sm mb-3 font-bold">
                Perfect for serious connections
              </div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                $29.99
                <span className="text-base text-slate-400">/month</span>
              </div>
              <div className="text-slate-400 text-xs mb-2">
                $16.66/mo (3 months) • $13.33/mo (12 months)
              </div>
              <div className="text-pink-500 text-sm font-bold">
                Save up to 55% yearly
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {[
                { icon: MessageCircle, text: "Unlimited messaging" },
                { icon: Search, text: "Advanced search filters" },
                { icon: Image, text: "View all profile photos" },
                { icon: Eye, text: "Anonymous browsing" },
                { icon: null, text: "Ad-free browsing" },
                { icon: Headphones, text: "Priority support" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white text-sm flex items-center gap-2">
                    {feature.icon && <feature.icon className="w-4 h-4" />}
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={() => handleSelectPlan("gold", "1month")}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-4 rounded-full font-bold text-base shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                <Award className="w-5 h-5" />
                Start Gold Membership
              </button>
            </div>
          </div>

          {/* Platinum VIP */}
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-6 lg:p-8 rounded-2xl border-2 border-purple-500/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <div className="text-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                Platinum VIP
              </h3>
              <div className="text-purple-500 text-sm mb-3 font-bold">
                Ultimate premium experience
              </div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                $34.99
                <span className="text-base text-slate-400">/month</span>
              </div>
              <div className="text-slate-400 text-xs mb-2">
                $21.99/mo (3 months) • $16.66/mo (12 months)
              </div>
              <div className="text-purple-500 text-sm font-bold">
                Maximum visibility
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {[
                { icon: null, text: "All Gold features +" },
                { icon: Star, text: "Profile ranking boost" },
                { icon: Verified, text: "VIP badge highlighting" },
                { icon: Globe, text: "Message translation (32 languages)" },
                { icon: Image, text: "Double photo space" },
                { icon: null, text: "Advanced matching" },
                { icon: Crown, text: "VIP support priority" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white text-sm flex items-center gap-2">
                    {feature.icon && <feature.icon className="w-4 h-4" />}
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={() => handleSelectPlan("platinum", "1month")}
                className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white py-4 rounded-full font-bold text-base shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                <Crown className="w-5 h-5" />
                Start Platinum VIP
              </button>
            </div>
          </div>
        </div>

        {/* Value Explanation */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/30 rounded-2xl px-6 lg:px-8 py-8 backdrop-blur-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-pink-500" />
              Why This Model Works
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="text-pink-500 font-bold text-lg mb-2 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  For Men:
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Premium membership ensures you're connecting with serious,
                  relationship-minded Filipinas in a curated environment.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-purple-500 font-bold text-lg mb-2 flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  For Filipinas:
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Free access attracts genuine women seeking committed
                  relationships without financial barriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileMembership;
