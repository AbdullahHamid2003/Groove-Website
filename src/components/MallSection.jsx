import { Play } from 'lucide-react';
import MallSectionImage from '../assets/MallSectionImage.png';
import playButton from "../assets/PlayButton.png"

const MallSection = () => {
  return (
    <section className="py-18 bg-gradient-to-r from-[#273506] to-[#161F02]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-light mb-6">
            Mall Of: Endless Possibilities
          </h2>
          <p className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={MallSectionImage} 
              alt="The Groves Mall" 
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors group">
                <svg className="w-14 h-14 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#333F14] to-[#293212] backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-200 text-sm font-medium tracking-widest mb-3 uppercase">
                  25 SR/GUEST
                </p>
                <h3 className="text-white text-3xl md:text-4xl font-playfair font-light mb-4">
                  Get your General Access Ticket
                </h3>
                <p className="text-white/80 text-lg">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br />
                  Ipsum has been the industry's standard dummy text e
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group">
                  <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MallSection;