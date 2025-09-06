import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/logo.png";
import Flag from "../assets/Flag.png";
import snapchat from "../assets/snapchat.svg"
import Insta from "../assets/instagram.svg"
import Tiktok from "../assets/tiktok.svg"
import Threads from "../assets/threads.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        {/* Row 1: Logo + Right Side */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="The Groves"
              className="h-10 w-auto md:ml-34"
            />
          </div>

          {/* Right side (desktop only) */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Socials */}
            <div className="flex items-center space-x-5 mr-5 text-white">
              <img src={Tiktok} alt="TikTok" className="w-5 h-5" />
              <img src={Insta} alt="Instagram" className="w-5 h-5" />
              <img src={Threads} alt="Threads" className="w-5 h-5" />
              <img src={snapchat} alt="Snapchat" className="w-5 h-5" />
            </div>

            {/* Login */}
            <button className="bg-linear-to-b from-[#B89353] to-[#D2B06C] hover:bg-yellow-600 text-white px-10 py-2 rounded-lg font-base transition">
              Log in
            </button>

            {/* Language */}
            <div className="flex items-center text-white cursor-pointer space-x-2 mr-34">
              <ChevronDown className=" w-4 h-4" />
              <img
                src={Flag}
                alt="English"
                className="w-5 h-[28px] mr-2"
              />
              <span className="text-base">English</span>
            </div>
          </div>


          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-[#B89353]" size={28} /> : <Menu className="text-[#B89353]" size={28} />}
          </button>
        </div>

        {/* Row 2: Navigation (Desktop only) */}
        <nav className="hidden lg:flex justify-center lg:space-x-26 py-3 border-t border-gray-700">
          {[
            "DINE WITH US",
            "PLAN YOUR VISIT",
            "EVENTS",
            "VIEW GROVES MAP",
            "OUR STORY",
            "CONTACT US",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-sm font-base tracking-[0.2em] hover:text-yellow-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {isMenuOpen && (
  <div className="fixed inset-0 h-screen w-screen z-50 bg-gradient-to-r from-[#273506] to-[#161F02] text-white flex flex-col justify-between">
    {/* Top bar: Logo and Close */}
    <div className="flex items-center justify-between px-6 py-4 absolute top-0 left-0 right-0 z-10 bg-transparent">
      <img src={Logo} alt="The Groves" className="h-10 w-auto" />
      <button
        className="text-white"
        onClick={() => setIsMenuOpen(false)}
      >
        <X className="text-[#B89353]" size={32} />
      </button>
    </div>

    {/* Main content */}
    <div className="flex flex-col justify-center flex-1 px-6 pt-20 pb-8">
      {/* Links */}
      <nav className="flex flex-col space-y-4">
        {[
          "DINE WITH US",
          "PLAN YOUR VISIT",
          "EVENTS",
          "VIEW GROVES MAP",
          "OUR STORY",
          "CONTACT US",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="border-b border-gray-700 pb-2 text-sm font-medium tracking-wider hover:text-yellow-400"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Language + login */}
      <div className="mt-6 flex flex-col items-start space-y-4">
        <div className="flex items-center cursor-pointer">
          <img
            src={Flag}
            alt="English"
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm">English</span>
          <ChevronDown className="ml-1 w-4 h-4" />
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-medium transition">
          Log in
        </button>
      </div>
    </div>

    {/* Socials bottom */}
    <div className="flex space-x-6 mb-6 mx-4">
      <img src={Tiktok} alt="TikTok" className="w-6 h-6" />
      <img src={Insta} alt="Instagram" className="w-6 h-6" />
      <img src={Threads} alt="Threads" className="w-6 h-6" />
      <img src={snapchat} alt="Snapchat" className="w-6 h-6" />
    </div>
  </div>
)}
      </div>
    </header>
  );
};

export default Header;
