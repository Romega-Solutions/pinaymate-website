import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if we're on the About section (light background)
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInAboutSection = rect.top <= 80 && rect.bottom >= 0;
        setIsOnLightSection(isInAboutSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? isOnLightSection
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
            : "bg-dalisay-950/95 backdrop-blur-xl border-b border-amihan-500/30 shadow-2xl"
          : "bg-dalisay-950/80 backdrop-blur-lg border-b border-luna-300/20"
      }`}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-300 ${
          isOnLightSection
            ? "from-pink-500/5 via-purple-500/5 to-blue-500/5 opacity-50"
            : "from-amihan-500/5 via-dalisay-500/5 to-luna-500/5 opacity-0 hover:opacity-100"
        }`}
        aria-hidden="true"
      ></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 relative">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo - Always Visible with Hover Border */}
          <a
            href="#home"
            className={`flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-xl transition-all duration-300 border-2 ${
              isOnLightSection
                ? "border-transparent hover:border-pink-500 hover:bg-pink-50 hover:shadow-lg"
                : "border-transparent hover:border-[#F4376D] hover:bg-gradient-to-r hover:from-[#F4376D]/20 hover:to-[#A855F7]/20 hover:shadow-xl hover:shadow-[#F4376D]/20"
            }`}
          >
            <div className="relative">
              {/* Main Logo Container */}
              <div className="w-12 h-12 relative">
                <img
                  src="/main-logo-no-bg.svg"
                  alt="PinayMate Logo"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Main Brand Name - Always visible, changes color based on section */}
            <span
              className={`text-2xl font-hello-paris-bold transition-all duration-300 ${
                isOnLightSection
                  ? "text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text"
                  : "text-white"
              }`}
            >
              PinayMate
            </span>
          </a>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-6">
            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group nav-item relative px-4 py-2 rounded-xl transition-all duration-300 animate-fadeInUp border-2 ${
                    isOnLightSection
                      ? "border-transparent hover:border-pink-500 hover:bg-pink-50 hover:shadow-lg"
                      : "border-transparent hover:border-[#F4376D] hover:bg-gradient-to-r hover:from-[#F4376D]/20 hover:to-[#A855F7]/20 hover:shadow-xl hover:shadow-[#F4376D]/20"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center">
                    <span
                      className={`font-dm-sans-medium text-base transition-all duration-300 ${
                        isOnLightSection
                          ? "text-gray-800 group-hover:text-pink-600"
                          : "text-white group-hover:text-[#F4376D]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={toggleMenu}
              className={`group md:hidden relative border-2 p-3 rounded-xl backdrop-blur-sm hover:scale-110 transform transition-all duration-300 ${
                isOnLightSection
                  ? "border-transparent hover:border-pink-500 bg-gray-100/50 text-gray-900 hover:text-pink-500 hover:bg-pink-50"
                  : "border-transparent hover:border-[#F4376D] bg-gradient-to-r from-amihan-500/10 to-dalisay-500/10 text-white hover:text-[#F4376D] hover:from-[#F4376D]/20 hover:to-[#A855F7]/20 hover:shadow-xl hover:shadow-[#F4376D]/20"
              }`}
              aria-label="Toggle menu"
            >
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
          <div
            className={`md:hidden border-t backdrop-blur-xl animate-slideInDown ${
              isOnLightSection
                ? "bg-white/98 border-gray-200/50"
                : "bg-dalisay-950/98 border-amihan-500/30"
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm animate-fadeInUp border-2 ${
                    isOnLightSection
                      ? "text-gray-800 hover:text-pink-600 border-transparent hover:border-pink-500 hover:bg-pink-50 hover:shadow-lg"
                      : "text-white hover:text-[#F4376D] border-transparent hover:border-[#F4376D] hover:bg-gradient-to-r hover:from-[#F4376D]/20 hover:to-[#A855F7]/20 hover:shadow-xl hover:shadow-[#F4376D]/20"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-dm-sans-medium text-base transition-all duration-300">
                    {item.label}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className={`w-4 h-4 ${
                        isOnLightSection ? "text-pink-500" : "text-[#F4376D]"
                      }`}
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
