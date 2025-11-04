import {
  Check,
  Heart,
  Award,
  Crown,
  Shield,
  Verified,
  DollarSign,
  Lock,
  MessageCircle,
  Search,
  Eye,
  Star,
  Globe,
  Image,
  Sparkles,
  Headphones,
} from "lucide-react";

const Membership: React.FC = () => {
  // const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Realistic function handlers that you can implement in your real app
  const handleJoinFree = () => {
    // Implement: Navigate to Filipina registration page
    console.log("Navigate to Filipina registration");
    window.location.href = "/register?type=filipina";
  };

  const handleSelectPlan = (
    planType: string,
    planDuration: string = "1month"
  ) => {
    // Implement: Navigate to payment/checkout page with plan details
    // console.log(`Selected plan: ${planType}, Duration: ${planDuration}`);
    // setSelectedPlan(planType);

    // In real app, you would:
    // 1. Store plan selection in state/context
    // 2. Navigate to checkout page
    // 3. Pass plan details to payment processor
    window.location.href = `/checkout?plan=${planType}&duration=${planDuration}`;
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-[#2d3748] via-[#1a202c] to-[#283040]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative z-10 max-w-[1600px]">
        {/* Header Section */}
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
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-[#F4376D]" fill="#F4376D" />
              <span className="text-[#F4376D] font-bold text-lg">
                Why Men Pay & Filipinas Join Free:
              </span>
            </div>
            <p className="text-[#8D99B2] text-sm mt-2 max-w-2xl">
              This ensures serious, committed men connect with genuine Filipinas
              seeking real relationships - creating the perfect balance for
              meaningful connections.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Free for Filipinas Card */}
          <div className="order-1 bg-gradient-to-br from-[#F4376D]/20 to-[#A855F7]/20 p-6 lg:p-8 rounded-3xl border-2 border-[#F4376D]/50 backdrop-blur-sm hover:border-[#F4376D]/70 transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
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
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto">
                  Full platform access
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto">
                  Premium profile visibility
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto">
                  Unlimited messaging
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto">
                  Receive messages from all members
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto">
                  Profile verification badge
                </span>
              </div>
            </div>

            <button
              onClick={handleJoinFree}
              className="w-full bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white py-3 lg:py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-xl transform hover:scale-105 font-roboto text-sm lg:text-base flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Join Free as Filipina
            </button>

            <div className="text-center mt-3">
              <p className="text-[#8D99B2] text-xs font-roboto flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3" />
                No hidden fees, no credit card required
              </p>
            </div>
          </div>

          {/* Gold Plan - Most Popular */}
          <div className="order-2 relative bg-gradient-to-br from-[#F4376D]/30 to-[#A855F7]/30 p-6 lg:p-8 rounded-3xl border-2 border-[#F4376D]/60 backdrop-blur-sm transform scale-105 hover:scale-110 transition-all duration-300 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#F4376D] to-[#A855F7] text-white px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-bold flex items-center gap-2">
                <Star className="w-4 h-4" fill="white" />
                MOST POPULAR
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-black text-white mb-2 font-roboto">
                Gold Membership
              </h3>
              <div className="text-[#F4376D] text-sm mb-4 font-bold">
                Perfect for serious connections
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2">
                $29.99
                <span className="text-base lg:text-lg text-[#8D99B2]">
                  /month
                </span>
              </div>
              <div className="text-[#8D99B2] text-xs mb-2">
                $16.66/mo for 3 months • $13.33/mo for 12 months
              </div>
              <div className="text-[#F4376D] text-sm font-bold">
                Save up to 55% with annual plan
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  Unlimited messaging with all members
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Search className="w-4 h-4" />
                  Advanced search filters
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Image className="w-4 h-4" />
                  View all profile photos
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  Anonymous browsing option
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto">
                  Ad-free browsing experience
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Headphones className="w-4 h-4" />
                  Priority customer support
                </span>
              </div>
            </div>

            <button
              onClick={() => handleSelectPlan("gold", "1month")}
              className="w-full bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white py-3 lg:py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-xl transform hover:scale-105 font-roboto text-sm lg:text-base flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              Start Gold Membership
            </button>
          </div>

          {/* Platinum VIP - Premium Plan */}
          <div className="order-3 bg-gradient-to-br from-[#A855F7]/20 to-[#3B82F6]/20 p-6 lg:p-8 rounded-3xl border-2 border-[#A855F7]/50 backdrop-blur-sm hover:border-[#A855F7]/70 transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-black text-white mb-2 font-roboto">
                Platinum VIP
              </h3>
              <div className="text-[#A855F7] text-sm mb-4 font-bold">
                Ultimate premium experience
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2">
                $34.99
                <span className="text-base lg:text-lg text-[#8D99B2]">
                  /month
                </span>
              </div>
              <div className="text-[#8D99B2] text-xs mb-2">
                $21.99/mo for 3 months • $16.66/mo for 12 months
              </div>
              <div className="text-[#A855F7] text-sm font-bold">
                Maximum visibility & features
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto">
                  All Gold Membership features +
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Profile ranking above others
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Verified className="w-4 h-4" />
                  Profile highlighting & VIP badge
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  Message translation (32 languages)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Image className="w-4 h-4" />
                  Double profile space for photos
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto">
                  Advanced matching algorithm access
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-white text-sm font-roboto flex items-center gap-1">
                  <Crown className="w-4 h-4" />
                  VIP customer support priority
                </span>
              </div>
            </div>

            <button
              onClick={() => handleSelectPlan("platinum", "1month")}
              className="w-full bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#F4376D] text-white py-3 lg:py-4 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-xl transform hover:scale-105 font-roboto text-sm lg:text-base flex items-center justify-center gap-2"
            >
              <Crown className="w-5 h-5" />
              Start Platinum VIP
            </button>
          </div>
        </div>

        {/* Value Explanation */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#283040]/50 to-[#1a202c]/50 border border-[#8D99B2]/30 rounded-2xl px-8 py-6 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-roboto flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-[#F4376D]" />
              Why This Model Works
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-[#F4376D] font-bold mb-2 font-roboto flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  For Men:
                </h4>
                <p className="text-[#8D99B2] text-sm font-roboto">
                  Premium membership ensures you're connecting with serious,
                  relationship-minded Filipinas in a curated environment free
                  from fake profiles and time-wasters. Pricing is competitive
                  with leading international dating platforms.
                </p>
              </div>
              <div>
                <h4 className="text-[#A855F7] font-bold mb-2 font-roboto flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  For Filipinas:
                </h4>
                <p className="text-[#8D99B2] text-sm font-roboto">
                  Free access attracts genuine, quality women seeking committed
                  relationships, creating the perfect balance for meaningful
                  connections and successful matches without financial barriers.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#8D99B2]/20">
              <p className="text-[#8D99B2] text-xs font-roboto flex items-center justify-center gap-2 flex-wrap">
                <DollarSign className="w-4 h-4" />
                All memberships include: Secure payment processing • Money-back
                guarantee • Cancel anytime • Safe & verified profiles
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#283040]/40 to-[#1a202c]/40 border border-[#8D99B2]/20 rounded-xl p-6 backdrop-blur-sm">
            <Lock className="w-10 h-10 text-[#F4376D] mb-3" />
            <h4 className="text-white font-bold mb-2 font-roboto">
              Secure Payments
            </h4>
            <p className="text-[#8D99B2] text-sm font-roboto">
              All transactions encrypted with SSL. We accept major credit cards,
              PayPal, and international payment methods.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#283040]/40 to-[#1a202c]/40 border border-[#8D99B2]/20 rounded-xl p-6 backdrop-blur-sm">
            <Verified className="w-10 h-10 text-[#A855F7] mb-3" />
            <h4 className="text-white font-bold mb-2 font-roboto">
              Verified Profiles
            </h4>
            <p className="text-[#8D99B2] text-sm font-roboto">
              Every Filipina profile is manually verified with ID and video
              verification to ensure authenticity and safety.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#283040]/40 to-[#1a202c]/40 border border-[#8D99B2]/20 rounded-xl p-6 backdrop-blur-sm">
            <Shield className="w-10 h-10 text-[#3B82F6] mb-3" />
            <h4 className="text-white font-bold mb-2 font-roboto">
              Money-Back Guarantee
            </h4>
            <p className="text-[#8D99B2] text-sm font-roboto">
              Not satisfied? Get a full refund within the first 3 days of your
              membership, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
