import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import HeroBackground from '../assets/HeroBackground.png'; // Placeholder image

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={HeroBackground} 
          alt="The Groves Restaurant" 
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl bg-black/40">
          {/* Subtitle */}
          <p className="text-gray-200 text-sm font-medium tracking-widest mb-4 uppercase">
            KHAWAJA YANNI
          </p>

          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-playfair font-light leading-tight mb-6">
            The new<br />
            era of luxury
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg mb-8 max-w-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
          </p>

          {/* CTA Button */}
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center group">
            Book reservation now
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Video Preview */}
        {/* <div className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
              alt="Video Preview" 
              className="w-80 h-60 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </button>
          </div>
        </div> */}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;