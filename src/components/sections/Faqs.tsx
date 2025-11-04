import { useState } from "react";
import { ChevronDown, Shield, Heart, Lock } from "lucide-react";

const MobileFaqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do you protect my privacy?",
      answer:
        "We use enterprise-grade AES-256 encryption and secure Supabase database with row-level security. Your data is protected by SSL/TLS encryption and we comply with GDPR and CCPA regulations. You control your profile visibility and we never share your information without consent.",
      icon: Shield,
    },
    {
      question: "What makes PinayMate different?",
      answer:
        "PinayMate specializes in connecting Western men with authentic Filipino women for serious relationships. We feature AI-powered matching analyzing 50+ compatibility factors, comprehensive profile verification, and real-time messaging for genuine connections.",
      icon: Heart,
    },
    {
      question: "How does verification work?",
      answer:
        "Every member goes through multi-step verification including email, phone, government ID authentication, and profile photo checks. Our AI flags suspicious activity while our team manually reviews profiles. Verified members get a blue checkmark badge.",
      icon: Lock,
    },
  ];

  return (
    <section
      id="faq"
      className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-4 py-8"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block mb-4">
          <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-xs font-bold tracking-wider uppercase">
            FAQ & SUPPORT
          </span>
        </div>
        <h2 className="text-3xl font-black text-white mb-3">
          Frequently Asked{" "}
          <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text">
            Questions
          </span>
        </h2>
        <p className="text-sm text-purple-200 leading-relaxed max-w-md mx-auto">
          Quick answers about security, features, and verification.
        </p>
      </div>

      {/* FAQ Questions */}
      <div className="max-w-2xl mx-auto space-y-3">
        {faqData.map((faq, index) => {
          const isOpen = openFaq === index;
          const IconComponent = faq.icon;

          return (
            <div
              key={index}
              className={`bg-slate-800/50 rounded-xl border backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-pink-500/50 shadow-lg shadow-pink-500/10"
                  : "border-slate-700/30"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 py-4 text-left flex items-center justify-between"
              >
                <div className="flex items-center space-x-3 pr-3 flex-1">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-r from-pink-500 to-purple-500"
                        : "bg-slate-700/50"
                    }`}
                  >
                    <IconComponent
                      className={`w-4 h-4 ${
                        isOpen ? "text-white" : "text-purple-300"
                      }`}
                    />
                  </div>
                  <span className="text-sm font-semibold text-white leading-tight">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`flex-shrink-0 w-7 h-7 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5 text-white" />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-4 pb-4 border-t border-slate-700/30">
                  <div className="pt-3">
                    <p className="text-sm text-purple-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Support - Compact */}
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-pink-500/30 rounded-xl p-5 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-2 text-center">
            Need More Help?
          </h3>
          <p className="text-xs text-purple-200 mb-4 text-center">
            Our support team is here 24/7 to assist you.
          </p>
          <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
            Contact Support
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <div className="flex items-center space-x-1.5 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/30">
              <Shield className="w-3 h-3 text-green-500" />
              <span className="text-purple-200 text-xs">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/30">
              <Lock className="w-3 h-3 text-blue-500" />
              <span className="text-purple-200 text-xs">Secure</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/30">
              <Heart className="w-3 h-3 text-pink-500" />
              <span className="text-purple-200 text-xs">Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFaqs;
