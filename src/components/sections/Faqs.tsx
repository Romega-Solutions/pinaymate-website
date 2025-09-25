import React, { useState } from "react";

const Faqs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do you protect my personal information and privacy?",
      answer:
        "We use bank-level SSL encryption and comply with international data protection laws including GDPR. Your personal information is never shared with third parties without your explicit consent. You have complete control over your profile visibility and can choose who sees your information. All data is stored on secure servers with multiple layers of protection.",
    },
    {
      question: "Why do men pay while Filipinas join for free?",
      answer:
        "This model ensures serious, committed men connect with genuine relationship-minded Filipinas. It creates the perfect balance - men receive premium services and verified matches, while quality Filipinas join freely, ensuring an authentic community. We accept all major payment methods and offer a 30-day satisfaction guarantee.",
    },
    {
      question: "Are all profiles verified and how does matching work?",
      answer:
        "Yes, every profile goes through our comprehensive SheerID verification process including identity confirmation and background checks. Our AI-powered algorithm analyzes over 50 compatibility factors to provide highly accurate matches. Premium members can start messaging immediately with video chat and real-time messaging features.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-[#2d3748] via-[#1a202c] to-[#283040]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-roboto">
            Frequently Asked{" "}
            <span className="text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-xl text-[#8D99B2] leading-relaxed max-w-3xl mx-auto font-roboto">
            Everything you need to know about PinayMate's platform, privacy,
            payments, and more.
          </p>
        </div>

        {/* FAQ Questions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#8D99B2]/10 to-[#283040]/30 rounded-2xl border border-[#8D99B2]/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#F4376D]/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#F4376D]/5 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-white font-roboto pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 border-t border-[#8D99B2]/10">
                    <div className="pt-4">
                      <p className="text-[#8D99B2] leading-relaxed font-roboto">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 border border-[#F4376D]/30 rounded-2xl px-8 py-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-roboto">
              Still have questions?
            </h3>
            <p className="text-[#8D99B2] mb-6 font-roboto">
              Our support team is here to help you 24/7. Get personalized
              assistance with any questions about our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105 font-roboto">
                💬 Contact Support
              </button>
              <button className="border border-[#8D99B2]/30 text-white px-8 py-3 rounded-full font-bold hover:border-[#F4376D]/50 hover:bg-[#F4376D]/10 transition-all duration-300 font-roboto">
                📧 Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
