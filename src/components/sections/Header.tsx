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
          ? "bg-dalisay-950/95 backdrop-blur-xl border-b border-amihan-500/30 shadow-2xl"
          : "bg-dalisay-950/80 backdrop-blur-lg border-b border-luna-300/20"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amihan-500/5 via-dalisay-500/5 to-luna-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Enhanced Logo with Actual PinayMate Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              {/* Main Logo Container */}
              <div className="w-12 h-12 relative transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/main-logo-no-bg.svg"
                  alt="PinayMate Logo"
                  className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                />
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amihan-500 via-dalisay-500 to-luna-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Main Brand Name - Hello Paris Sans Bold */}
              <span className="text-2xl font-hello-paris-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amihan-400 group-hover:via-dalisay-400 group-hover:to-luna-400 group-hover:bg-clip-text transition-all duration-300 cursor-pointer hover-contrast-text">
                PinayMate
              </span>
              {/* Tagline - Hello Paris Sans Light */}
              <span className="text-xs text-dalisay-300 font-hello-paris-light opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover-contrast-text">
                Find Your Forever Filipina
              </span>
            </div>
          </div>

          {/* Right side - Navigation and buttons */}
          <div className="flex items-center space-x-6">
            {/* Enhanced Desktop Navigation - DM Sans for UI/Body */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group nav-item relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-amihan-500/10 hover:to-dalisay-500/10 hover:backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <span className="text-neutral-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amihan-400 group-hover:to-dalisay-400 group-hover:bg-clip-text font-dm-sans-medium transition-all duration-300 hover-contrast-text">
                      {item.label}
                    </span>
                  </div>
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amihan-500 to-dalisay-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amihan-500/0 via-dalisay-500/0 to-luna-500/0 group-hover:from-amihan-500/5 group-hover:via-dalisay-500/5 group-hover:to-luna-500/5 rounded-xl transition-all duration-300 blur-sm"></div>
                </a>
              ))}
            </div>

            {/* CTA Button for Desktop - DM Sans Bold for buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="#signup"
                className="group relative bg-gradient-to-r from-amihan-600 to-amihan-700 hover:from-amihan-700 hover:to-amihan-800 text-white font-dm-sans-bold px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-subtle hover-contrast-bg"
              >
                <span className="relative z-10 hover-contrast-text">
                  Join Now
                </span>
                <div className="absolute inset-0 contrast-overlay bg-gradient-to-r from-amihan-400 to-dalisay-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="group md:hidden relative bg-gradient-to-r from-amihan-500/10 to-dalisay-500/10 border border-amihan-500/20 text-white hover:text-amihan-400 transition-all duration-300 p-3 rounded-xl backdrop-blur-sm hover:scale-110 transform"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amihan-500/0 to-dalisay-500/0 group-hover:from-amihan-500/20 group-hover:to-dalisay-500/20 rounded-xl transition-all duration-300"></div>
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
          <div className="md:hidden bg-dalisay-950/98 border-t border-amihan-500/30 backdrop-blur-xl animate-slideInDown">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center space-x-3 px-4 py-3 text-neutral-200 hover:text-amihan-400 hover:bg-gradient-to-r hover:from-amihan-500/10 hover:to-dalisay-500/10 rounded-xl transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-amihan-500/20 backdrop-blur-sm animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-dm-sans-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amihan-400 group-hover:to-dalisay-400 group-hover:bg-clip-text transition-all duration-300 hover-contrast-text">
                    {item.label}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-4 h-4 text-amihan-500"
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

              {/* Mobile CTA Button - DM Sans Bold */}
              <div className="border-t border-amihan-500/20 pt-4 mt-4">
                <a
                  href="#signup"
                  className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-amihan-600 to-amihan-700 hover:from-amihan-700 hover:to-amihan-800 text-white font-dm-sans-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 animate-zoom-pulse hover-contrast-bg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="hover-contrast-text">Join PinayMate</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Heart cursor effect for the entire header */}
        <div className="absolute inset-0 cursor-heart pointer-events-none"></div>
      </div>
    </nav>
  );
};

export default Header;
