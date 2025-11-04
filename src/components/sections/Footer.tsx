import React, { useState } from "react";
import {
  Heart,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Shield,
  CheckCircle,
} from "lucide-react";
import LegalModal from "../modals/LegalModal";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: "privacy" | "terms" | null;
  }>({ isOpen: false, type: null });

  const openLegalModal = (type: "privacy" | "terms") => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#features" },
    { name: "Safety Tips", href: "#safety" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      hoverColor: "hover:text-[#1877F2]",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      hoverColor: "hover:text-[#1DA1F2]",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      hoverColor: "hover:text-[#E4405F]",
    },
    {
      icon: Youtube,
      href: "#",
      label: "Youtube",
      hoverColor: "hover:text-[#FF0000]",
    },
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-[#1a202c] via-[#283040] to-[#1a202c] relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-[#A855F7]/10 to-[#3B82F6]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative z-10">
          {/* Main Footer Content */}
          <div className="py-12 border-b border-[#8D99B2]/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="relative w-10 h-10">
                    <img
                      src="/main-logo-no-bg.svg"
                      alt="PinayMate"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-hello-paris-bold text-white">
                      PinayMate
                    </span>
                    <span className="text-xs text-[#C8B5E6] font-hello-paris-light">
                      Find Your Forever Filipina
                    </span>
                  </div>
                </div>
                <p className="text-[#C8B5E6] text-sm font-roboto max-w-xs">
                  The premier Filipino dating platform connecting hearts
                  worldwide.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span className="text-green-400 text-xs font-roboto">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    <Shield className="w-3 h-3 text-blue-500" />
                    <span className="text-blue-400 text-xs font-roboto">
                      Secured
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-base font-roboto">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-[#C8B5E6] hover:text-[#F4376D] transition-colors text-sm font-roboto"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact & Social */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-base font-roboto">
                  Connect
                </h3>
                <div className="space-y-2">
                  <a
                    href="mailto:support@pinaymate.com"
                    className="flex items-center space-x-2 text-[#C8B5E6] hover:text-[#F4376D] transition-colors text-sm group"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="font-roboto">support@pinaymate.com</span>
                  </a>
                  <div className="flex items-center space-x-2 text-[#C8B5E6] text-sm">
                    <MapPin className="w-4 h-4" />
                    <span className="font-roboto">Global • Manila • USA</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3 pt-2">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-9 h-9 bg-[#283040] rounded-full flex items-center justify-center border border-[#8D99B2]/20 ${social.hoverColor} transition-all duration-300 hover:scale-110`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4 text-[#C8B5E6]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#8D99B2] text-sm font-roboto">
                © {currentYear} PinayMate. All rights reserved.
              </p>

              <div className="flex items-center space-x-4 text-sm">
                <button
                  onClick={() => openLegalModal("privacy")}
                  className="text-[#C8B5E6] hover:text-[#F4376D] transition-colors font-roboto"
                >
                  Privacy
                </button>
                <span className="text-[#8D99B2]">•</span>
                <button
                  onClick={() => openLegalModal("terms")}
                  className="text-[#C8B5E6] hover:text-[#A855F7] transition-colors font-roboto"
                >
                  Terms
                </button>
              </div>

              <p className="text-[#8D99B2] text-xs font-roboto flex items-center gap-1">
                <Heart className="w-3 h-3 text-[#F4376D]" fill="#F4376D" />
                Connecting hearts worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {legalModal.type && (
        <LegalModal
          isOpen={legalModal.isOpen}
          onClose={closeLegalModal}
          type={legalModal.type}
        />
      )}
    </>
  );
};

export default Footer;
