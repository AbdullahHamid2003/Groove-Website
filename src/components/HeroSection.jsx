import { ArrowRight } from "lucide-react";
import HeroBackground from "../assets/HeroBackground.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={HeroBackground}
        alt="The Groves Hero"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ minHeight: "100vh" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-xl">
            {/* Subtitle */}
            <p className="text-gray-300 text-sm font-medium tracking-widest mb-4 uppercase">
              KHAWAJA YANNI
            </p>

            {/* Heading */}
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-playfair font-light leading-tight mb-6">
              The new <br /> era of luxury
            </h1>

            {/* Description */}
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum.
            </p>

            {/* Button */}
            <button className="bg-[#d1a954] hover:bg-[#b5893f] text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-3 transition-all duration-300">
              Book reservation now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;