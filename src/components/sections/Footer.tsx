import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a202c] to-[#283040] py-12 border-t border-[#8D99B2]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">∞</span>
            </div>
            <h3 className="text-3xl font-bold text-white font-roboto">
              <span className="text-transparent bg-gradient-to-r from-[#F4376D] via-[#A855F7] to-[#3B82F6] bg-clip-text">
                Pinay
              </span>
              Mate
            </h3>
          </div>
          <p className="text-[#8D99B2] text-lg max-w-2xl mx-auto font-roboto">
            Connecting hearts across cultures. The premium Filipino dating
            platform where genuine relationships begin.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="#about"
            className="text-[#8D99B2] hover:text-[#F4376D] transition-colors font-roboto text-sm"
          >
            About Us
          </a>
          <a
            href="#features"
            className="text-[#8D99B2] hover:text-[#F4376D] transition-colors font-roboto text-sm"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-[#8D99B2] hover:text-[#F4376D] transition-colors font-roboto text-sm"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#8D99B2] hover:text-[#F4376D] transition-colors font-roboto text-sm"
          >
            Success Stories
          </a>
          <a
            href="#"
            className="text-[#8D99B2] hover:text-[#F4376D] transition-colors font-roboto text-sm"
          >
            Support
          </a>
          <a
            href="#"
            className="text-[#8D99B2] hover:text-[#F4376D] transition-colors font-roboto text-sm"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[#8D99B2] hover:text-[#F4376D] transition-colors font-roboto text-sm"
          >
            Terms
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 bg-gradient-to-r from-[#F4376D]/20 to-[#A855F7]/20 rounded-full flex items-center justify-center border border-[#F4376D]/30 hover:border-[#F4376D] transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-[#8D99B2] group-hover:text-[#F4376D] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gradient-to-r from-[#A855F7]/20 to-[#3B82F6]/20 rounded-full flex items-center justify-center border border-[#A855F7]/30 hover:border-[#A855F7] transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-[#8D99B2] group-hover:text-[#A855F7] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gradient-to-r from-[#3B82F6]/20 to-[#F4376D]/20 rounded-full flex items-center justify-center border border-[#3B82F6]/30 hover:border-[#3B82F6] transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-[#8D99B2] group-hover:text-[#3B82F6] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.56.75C5.901.75.75 5.901.75 12.56s5.151 11.81 11.81 11.81 11.81-5.151 11.81-11.81S19.219.75 12.56.75zm5.166 8.779l-.07 3.337s-.07.7-.7.35l-2.52-1.96s-1.61 1.26-1.82 1.47c-.21.21-.42.14-.42-.21l.07-2.31-4.55-4.13s-.35-.35 0-.77l.7-.49s.35-.21.7 0l8.4 6.16s.42.35.21.56z" />
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#8D99B2]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#8D99B2] text-sm text-center md:text-left font-roboto">
              &copy; 2025 PinayMate. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-green-400 text-sm font-roboto">
                  SheerID Verified
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-blue-400 text-sm font-roboto">
                  SSL Secured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
