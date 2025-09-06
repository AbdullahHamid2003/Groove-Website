import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import CreateExperienceImage_1 from "../assets/Create_Experience_1.png";
import CreateExperienceImage_2 from "../assets/Create_Experience_2.png";
import CreateExperienceImage_3 from "../assets/Create_Experience_3.png";

const experiences = [
  { id: 1, name: "Restaurants", image: CreateExperienceImage_2 },
  { id: 2, name: "Experiences", image: CreateExperienceImage_1 },
  { id: 3, name: "Events", image: CreateExperienceImage_3 },
];

const CreateExperience = () => {
  return (
    <section className="bg-gradient-to-r from-[#273506] to-[#161F02] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-white mb-8 leading-tight">
            Curate your experience <br /> as you like
          </h2>
          <button className="group bg-[#C49B61] hover:bg-[#B8934C] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-medium">
            Book Tickets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Swiper */}
        <div className="lg:w-1/2 w-full">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".experience-next",
              prevEl: ".experience-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3 },
            }}
            className="experience-swiper"
          >
            {experiences.map((exp) => (
              <SwiperSlide key={exp.id}>
                <div className="flex flex-col items-center transition-transform duration-500">
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl shadow-lg image-card">
                    <img
                      src={exp.image}
                      alt={exp.name}
                      className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-500"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-white font-playfair text-xl md:text-2xl mt-4">
                    {exp.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile nav */}
          <div className="flex justify-center gap-4 mt-6 lg:hidden">
            <button className="experience-prev bg-white/10 hover:bg-white/20 text-white p-3 rounded-full">
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button className="experience-next bg-white/10 hover:bg-white/20 text-white p-3 rounded-full">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        /* Default smaller side slides */
        .experience-swiper .swiper-slide {
          transform: scale(0.9);
          opacity: 0.6;
          transition: all 0.5s ease;
        }

        /* Active (center) slide bigger and forward */
        .experience-swiper .swiper-slide-active {
          transform: scale(1.3);
          opacity: 1;
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default CreateExperience;
