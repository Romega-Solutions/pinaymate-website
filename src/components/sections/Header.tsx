import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-[#2d1b3d]/98 via-[#1a0f26]/98 to-[#3d2952]/98 backdrop-blur-xl border-b border-[#F4376D]/30 shadow-2xl"
          : "bg-gradient-to-r from-[#2d1b3d]/80 via-[#1a0f26]/80 to-[#3d2952]/80 backdrop-blur-lg border-b border-[#8D99B2]/20"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/5 via-[#A855F7]/5 to-[#3B82F6]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <span className="text-white font-bold text-lg animate-pulse">
                  ∞
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white font-roboto group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F4376D] group-hover:via-[#A855F7] group-hover:to-[#3B82F6] group-hover:bg-clip-text transition-all duration-300">
                PinayMate
              </span>
              <span className="text-xs text-[#C8B5E6] font-roboto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Elite Filipino Dating
              </span>
            </div>
          </div>

          {/* Right side - Navigation and buttons */}
          <div className="flex items-center space-x-6">
            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F4376D]/10 hover:to-[#A855F7]/10 hover:backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <span className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F4376D] group-hover:to-[#A855F7] group-hover:bg-clip-text font-medium font-roboto transition-all duration-300">
                      {item.label}
                    </span>
                  </div>
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#F4376D] to-[#A855F7] group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/0 via-[#A855F7]/0 to-[#3B82F6]/0 group-hover:from-[#F4376D]/5 group-hover:via-[#A855F7]/5 group-hover:to-[#3B82F6]/5 rounded-xl transition-all duration-300 blur-sm"></div>
                </a>
              ))}
            </div>
            {/* Enhanced Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="group md:hidden relative bg-gradient-to-r from-[#F4376D]/10 to-[#A855F7]/10 border border-[#F4376D]/20 text-white hover:text-[#F4376D] transition-all duration-300 p-3 rounded-xl backdrop-blur-sm hover:scale-110 transform"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4376D]/0 to-[#A855F7]/0 group-hover:from-[#F4376D]/20 group-hover:to-[#A855F7]/20 rounded-xl transition-all duration-300"></div>
              <svg
                className={`w-6 h-6 relative z-10 transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-[#2d1b3d]/98 via-[#1a0f26]/98 to-[#3d2952]/98 border-t border-[#F4376D]/30 backdrop-blur-xl animate-slideInDown">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center space-x-3 px-4 py-3 text-white hover:text-[#F4376D] hover:bg-gradient-to-r hover:from-[#F4376D]/10 hover:to-[#A855F7]/10 rounded-xl transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-[#F4376D]/20 backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium font-roboto group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#F4376D] group-hover:to-[#A855F7] group-hover:bg-clip-text transition-all duration-300">
                    {item.label}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-4 h-4 text-[#F4376D]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              ))}

              <div className="border-t border-[#F4376D]/20 pt-4 mt-4"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
