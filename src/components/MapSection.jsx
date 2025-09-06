import React from "react";
import MapImg from "../assets/Map.png"; // replace with actual map image

const MapSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#273506] to-[#161F02] 
  px-6 md:px-12 lg:px-20 py-8 border-b border-b-amber-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Map */}
        <div className="flex-1 flex justify-center">
          <img
            src={MapImg}
            alt="The Groves Map"
            className="w-full max-w-2xl object-contain drop-shadow-[0_0_25px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Right - Text */}
        <div className="flex-1 text-center lg:text-left">
          <h4 className="uppercase tracking-[0.2em] text-sm text-white/80 mb-4">
            Experience The Groves
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-light text-white mb-6">
            Find your place
          </h2>
          <p className="text-white/80 text-base max-w-md mx-auto lg:mx-0 mb-8">
            Our interactive map will show you the way to the shops and
            restaurants that you want to see.
          </p>

          <button className="bg-[#C89E57] hover:bg-[#b18745] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 mx-auto lg:mx-0 transition">
            <span>Open the Map</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;