import React from "react";
import { X, Shield, FileText } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms";
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      icon: Shield,
      sections: [
        {
          title: "Information We Collect",
          content:
            "We collect information you provide directly to us, including your name, email address, profile information, photos, and communication preferences. We also collect information about your usage of our platform, including matches, messages, and interactions.",
        },
        {
          title: "How We Use Your Information",
          content:
            "We use your information to provide and improve our services, facilitate connections between members, personalize your experience, send you updates and notifications, ensure platform security, and comply with legal obligations.",
        },
        {
          title: "Data Security",
          content:
            "We implement industry-standard security measures including AES-256 encryption, secure Supabase database infrastructure with row-level security policies, SSL/TLS encryption for data transmission, and regular security audits. Your data is stored on secure, redundant servers with 24/7 monitoring.",
        },
        {
          title: "Information Sharing",
          content:
            "We do not sell your personal information to third parties. We may share your information with other members as part of our matching service, with service providers who assist our operations (under strict confidentiality agreements), when required by law, and with your explicit consent.",
        },
        {
          title: "Your Rights",
          content:
            "You have the right to access, update, or delete your personal information at any time. You can control your privacy settings, opt-out of communications, request a copy of your data, and permanently delete your account. We comply with GDPR, CCPA, and other international data protection regulations.",
        },
        {
          title: "Cookies and Tracking",
          content:
            "We use cookies and similar technologies to enhance your experience, remember your preferences, analyze platform usage, and improve our services. You can control cookie settings through your browser preferences.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      icon: FileText,
      sections: [
        {
          title: "Acceptance of Terms",
          content:
            "By accessing and using PinayMate, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our platform. These terms constitute a legally binding agreement between you and PinayMate.",
        },
        {
          title: "Eligibility",
          content:
            "You must be at least 18 years old to use PinayMate. By creating an account, you represent and warrant that you meet this age requirement, have the legal capacity to enter into this agreement, and will comply with all applicable laws and regulations.",
        },
        {
          title: "Account Responsibilities",
          content:
            "You are responsible for maintaining the confidentiality of your account credentials, all activities that occur under your account, providing accurate and truthful information, and promptly updating your profile information. You must not share your account with others or use someone else's account.",
        },
        {
          title: "Prohibited Conduct",
          content:
            "You may not use PinayMate to harass, abuse, or harm other members; post false, misleading, or fraudulent information; impersonate another person or entity; solicit money or personal information for fraudulent purposes; spam or send unsolicited commercial messages; upload inappropriate or offensive content; or engage in any illegal activities.",
        },
        {
          title: "Content Ownership",
          content:
            "You retain ownership of the content you post on PinayMate. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content for the purpose of operating and promoting our services. We reserve the right to remove any content that violates our guidelines.",
        },
        {
          title: "Premium Membership",
          content:
            "Premium memberships are billed on a recurring basis according to your selected plan. You can cancel your subscription at any time through your account settings. Cancellation will be effective at the end of your current billing cycle. We offer a 30-day money-back guarantee for first-time premium members.",
        },
        {
          title: "Termination",
          content:
            "We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or for any reason we deem necessary to protect our platform and community. You may also terminate your account at any time through your account settings.",
        },
        {
          title: "Limitation of Liability",
          content:
            "PinayMate is provided 'as is' without warranties of any kind. We are not responsible for the conduct of other members, the accuracy of member profiles, any interactions or relationships that result from using our service, or any damages arising from your use of our platform.",
        },
      ],
    },
  };

  const selectedContent = content[type];
  const IconComponent = selectedContent.icon;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-[#1a202c] via-[#283040] to-[#1a202c] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#8D99B2]/20 shadow-2xl animate-slideInUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 border-b border-[#8D99B2]/20 p-6 flex items-center justify-between sticky top-0 backdrop-blur-lg z-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white font-roboto">
              {selectedContent.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-[#283040] hover:bg-[#F4376D] rounded-full flex items-center justify-center transition-all duration-300 group border border-[#8D99B2]/20 hover:border-[#F4376D]"
          >
            <X className="w-5 h-5 text-[#C8B5E6] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6 space-y-8">
          <div className="bg-gradient-to-r from-[#F4376D]/5 via-[#A855F7]/5 to-[#3B82F6]/5 border border-[#F4376D]/20 rounded-2xl p-6">
            <p className="text-[#C8B5E6] font-roboto leading-relaxed">
              <strong className="text-white">Last Updated:</strong> November 4,
              2025
            </p>
            <p className="text-[#C8B5E6] font-roboto leading-relaxed mt-2">
              Please read this {selectedContent.title.toLowerCase()} carefully.
              By using PinayMate, you acknowledge that you have read,
              understood, and agree to be bound by these terms.
            </p>
          </div>

          {selectedContent.sections.map((section, index) => (
            <div
              key={index}
              className="space-y-3 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#F4376D] to-[#A855F7] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white font-roboto">
                  {section.title}
                </h3>
              </div>
              <p className="text-[#C8B5E6] font-roboto leading-relaxed pl-11">
                {section.content}
              </p>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#F4376D]/10 via-[#A855F7]/10 to-[#3B82F6]/10 border border-[#F4376D]/30 rounded-2xl p-6 mt-8">
            <h3 className="text-xl font-bold text-white font-roboto mb-4">
              Questions or Concerns?
            </h3>
            <p className="text-[#C8B5E6] font-roboto leading-relaxed mb-4">
              If you have any questions about our{" "}
              {selectedContent.title.toLowerCase()}, please contact our support
              team:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:legal@pinaymate.com"
                className="inline-flex items-center space-x-2 text-[#F4376D] hover:text-[#A855F7] transition-colors font-roboto font-bold"
              >
                <span>legal@pinaymate.com</span>
              </a>
              <span className="text-[#8D99B2] hidden sm:block">•</span>
              <a
                href="mailto:support@pinaymate.com"
                className="inline-flex items-center space-x-2 text-[#A855F7] hover:text-[#3B82F6] transition-colors font-roboto font-bold"
              >
                <span>support@pinaymate.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
