import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a2f] text-white">
      <div className="w-[80%] mx-auto">

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 flex flex-col items-center text-center">

          {/* Logo */}
          <h2 className="text-4xl sm:text-6xl font-bold mb-3">
            Keen<span className="font-normal">Keeper</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-300 max-w-s sm:max-w-3xl mb-8 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <p className="text-base font-semibold mb-4">Social Links</p>

          <div className="flex items-center gap-3">

            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all">
              <AiFillInstagram className="text-black text-lg sm:text-xl" />
            </a>

            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all">
              <FaSquareFacebook className="text-black text-lg sm:text-xl" />
            </a>

            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all">
              <FaXTwitter className="text-black text-lg sm:text-xl" />
            </a>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 border-opacity-20">
          <div className="container mx-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <p className="text-center sm:text-left">
              © 2025 KeenKeeper. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-5">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}