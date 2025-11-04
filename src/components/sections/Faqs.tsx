import React, { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Mail,
  Shield,
  Heart,
  Users,
  Lock,
} from "lucide-react";

const Faqs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do you protect my personal information and privacy?",
      answer:
        "We employ enterprise-grade security measures including AES-256 encryption and secure Supabase database infrastructure with row-level security policies. Your personal information is protected by industry-standard SSL/TLS encryption during transmission. We comply with international data protection regulations including GDPR and CCPA. You maintain complete control over your profile visibility, and all data is stored on secure, redundant servers with regular security audits. We never share your information with third parties without your explicit consent.",
      icon: Shield,
    },
    {
      question: "What makes PinayMate different from other dating platforms?",
      answer:
        "PinayMate specializes exclusively in connecting Western men with authentic Filipino women seeking serious relationships. Our platform features comprehensive profile verification, AI-powered compatibility matching analyzing 50+ factors, and real-time communication tools. We maintain a balanced community with verified profiles only, ensuring genuine connections. Our dedicated Filipino relationship experts provide personalized support throughout your journey.",
      icon: Heart,
    },
    {
      question: "How does the verification process work?",
      answer:
        "Every member undergoes a multi-step verification process. This includes email and phone verification, government-issued ID authentication, profile photo verification to prevent catfishing, and background screening for safety. Our AI-powered system flags suspicious activity, and our moderation team manually reviews all profiles. Verified members receive a blue checkmark badge, ensuring you connect only with authentic, serious individuals.",
      icon: Lock,
    },
    {
      question: "What features are included in the premium membership?",
      answer:
        "Premium members enjoy unlimited messaging with all verified members, advanced AI-powered matching with priority placement, video chat capabilities for face-to-face conversations, the ability to send and receive photos and videos, access to detailed compatibility reports, profile boost features for increased visibility, and ad-free browsing experience. Premium members also receive priority customer support and exclusive access to relationship coaching resources.",
      icon: Users,
    },
    {
      question: "How does your matching algorithm work?",
      answer:
        "Our proprietary AI-powered algorithm analyzes over 50 compatibility factors including personality traits, lifestyle preferences, relationship goals, cultural values, communication styles, and long-term aspirations. The system continuously learns from user interactions and feedback to improve match quality. We use secure Supabase database queries with optimized indexing to provide real-time, accurate match suggestions tailored to your unique preferences and relationship objectives.",
      icon: Heart,
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use industry-leading payment processors with PCI-DSS Level 1 compliance. All payment information is encrypted and tokenized - we never store your full credit card details on our servers. We accept all major credit cards, PayPal, and other secure payment methods. All transactions are processed through secure, encrypted connections. We offer a 30-day money-back satisfaction guarantee on all premium memberships.",
      icon: Shield,
    },
    {
      question: "How do I report suspicious profiles or behavior?",
      answer:
        "We take safety seriously. Every profile includes a 'Report' button for immediate flagging of suspicious activity. Our 24/7 moderation team reviews all reports within hours. You can also block users directly from their profile. We encourage members to report fake profiles, inappropriate messages, scam attempts, or any behavior violating our community guidelines. All reports are confidential, and we take swift action to maintain a safe, authentic community.",
      icon: Shield,
    },
    {
      question: "Can I cancel my membership at any time?",
      answer:
        "Yes, you have complete flexibility. You can cancel your premium membership at any time from your account settings with no cancellation fees. Your premium benefits will remain active until the end of your current billing cycle. You can also pause your membership for up to 3 months if needed. We offer a 30-day money-back guarantee if you're not satisfied with your experience. Even after cancellation, your profile remains visible, and you can always reactivate your membership.",
      icon: Users,
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-[#2d3748] via-[#1a202c] to-[#283040] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#F4376D]/5 via-[#A855F7]/10 to-[#3B82F6]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#A855F7]/10 via-[#3B82F6]/5 to-[#F4376D]/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-6">
            <div className="relative bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 px-8 py-4 rounded-full border border-[#F4376D]/30 backdrop-blur-sm">
              <span className="text-transparent bg-gradient-to-r from-[#F4376D] to-[#A855F7] bg-clip-text text-sm font-bold tracking-wider uppercase font-roboto">
                FAQ & SUPPORT
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/5 via-[#A855F7]/5 to-[#3B82F6]/5 rounded-full blur animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-roboto animate-fadeInUp delay-200">
            Frequently Asked{" "}
            <span className="relative text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text">
              Questions
              <div className="absolute -top-2 -right-8 animate-bounce">
                <div className="w-6 h-6 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-3 h-3 text-white animate-pulse" />
                </div>
              </div>
            </span>
          </h2>
          <p className="text-xl text-[#C8B5E6] leading-relaxed max-w-3xl mx-auto font-roboto animate-fadeInUp delay-300">
            Everything you need to know about PinayMate's platform, security,
            features, and more.
          </p>
        </div>

        {/* FAQ Questions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            const IconComponent = faq.icon;

            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#8D99B2]/10 to-[#283040]/30 rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl animate-fadeInUp ${
                  isOpen
                    ? "border-[#F4376D]/50 shadow-lg shadow-[#F4376D]/10"
                    : "border-[#8D99B2]/20 hover:border-[#F4376D]/30"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#F4376D]/5 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-r from-[#F4376D] to-[#A855F7] scale-110"
                          : "bg-gradient-to-r from-[#8D99B2]/20 to-[#283040]/20 group-hover:from-[#F4376D]/20 group-hover:to-[#A855F7]/20"
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-[#C8B5E6]"
                        }`}
                      />
                    </div>
                    <span className="text-lg font-semibold text-white font-roboto">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "rotate-180 scale-110" : "group-hover:scale-110"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-[#8D99B2]/10">
                    <div className="pt-4">
                      <p className="text-[#C8B5E6] leading-relaxed font-roboto">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16 animate-fadeInUp delay-700">
          <div className="bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 border border-[#F4376D]/30 rounded-2xl px-8 py-8 backdrop-blur-sm max-w-2xl mx-auto shadow-2xl hover:shadow-[#F4376D]/20 transition-all duration-500 transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-roboto">
              Still have questions?
            </h3>
            <p className="text-[#C8B5E6] mb-6 font-roboto leading-relaxed">
              Our dedicated support team is here to help you 24/7. Get
              personalized assistance with any questions about our platform,
              features, or your account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105 font-roboto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F4376D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Support</span>
                </span>
              </button>
              <button className="group border-2 border-[#F4376D]/30 text-white px-8 py-3 rounded-full font-bold hover:border-[#F4376D]/50 hover:bg-[#F4376D]/10 transition-all duration-300 font-roboto transform hover:scale-105">
                <span className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 px-4 py-2 rounded-full border border-[#F4376D]/20">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-[#C8B5E6] text-sm font-roboto">
                  24/7 Support
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 px-4 py-2 rounded-full border border-[#A855F7]/20">
                <Lock className="w-4 h-4 text-blue-500" />
                <span className="text-[#C8B5E6] text-sm font-roboto">
                  Secure Platform
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-[#3B82F6]/10 to-[#F4376D]/10 px-4 py-2 rounded-full border border-[#3B82F6]/20">
                <Heart className="w-4 h-4 text-pink-500" />
                <span className="text-[#C8B5E6] text-sm font-roboto">
                  Trusted by Thousands
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
