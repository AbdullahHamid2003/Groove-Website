import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import CreateExperienceImage_1 from '../assets/Create_Experience_1.png';
import CreateExperienceImage_2 from '../assets/Create_Experience_2.png';
import CreateExperienceImage_3 from '../assets/Create_Experience_3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const experiences = [
  {
    id: 1,
    name: 'Restaurants',
    image: CreateExperienceImage_2
  },
  {
    id: 2,
    name: 'Experiences',
    image: CreateExperienceImage_1,
    featured: true
  },
  {
    id: 3,
    name: 'Events',
    image: CreateExperienceImage_3
  }
];

const CreateExperience = () => {
  return (
    <section className="bg-gradient-to-r from-[#273506] to-[#161F02] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-white mb-8">
              Curate your experience<br />as you like
            </h2>
            <button className="group bg-[#C49B61] hover:bg-[#B8934C] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-medium">
              Book Tickets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <Swiper
                modules={[EffectCoverflow, Navigation]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2.2}
                spaceBetween={-50}
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={{
                  nextEl: '.experience-next',
                  prevEl: '.experience-prev',
                }}
                initialSlide={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2.5,
                    spaceBetween: -40,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: -60,
                  }
                }}
                className="experience-swiper"
              >
                {experiences.map((experience, index) => (
                  <SwiperSlide key={experience.id}>
                    <div className={`group cursor-pointer transition-all duration-500 ${experience.featured ? 'z-10' : 'z-0'}`}>
                      <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm">
                        <div className={`overflow-hidden transition-all duration-500 ${
                          experience.featured ? 'aspect-[3/4]' : 'aspect-[3/3.5]'
                        }`}>
                          <img
                            src={experience.image}
                            alt={experience.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className={`text-white font-bold mb-2 ${
                            experience.featured ? 'text-xl' : 'text-lg'
                          }`}>
                            {experience.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation for mobile */}
              <div className="flex justify-center gap-4 mt-8 lg:hidden">
                <button className="experience-prev bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button className="experience-next bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateExperience;