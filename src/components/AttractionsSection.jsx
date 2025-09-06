import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import AttractionImage_1 from '../assets/Attraction_Image_1.png';
import AttractionImage_2 from '../assets/Attraction_Image_2.png';
import AttractionImage_3 from '../assets/Attraction_Image_3.png';
import AttractionImage_4 from '../assets/Attraction_Image_4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const attractions = [
  {
    id: 1,
    name: 'Little Krazy',
    image: AttractionImage_1
  },
  {
    id: 2,
    name: 'Hawanim Groves City',
    image: AttractionImage_2
  },
  {
    id: 3,
    name: 'Picnic Market',
    image: AttractionImage_3
  },
  {
    id: 4,
    name: 'Lucawa',
    image: AttractionImage_4
  },
];

export const AttractionsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#273506] to-[#161F02] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-white mb-8 max-w-2xl">
            Book General Access ticket and enjoy the attractions for free
          </h2>
          <button className="group bg-[#C49B61] hover:bg-[#B8934C] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-medium">
            Book General Access Ticket
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active opacity-100',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="attractions-swiper"
          >
            {attractions.map((attraction) => (
              <SwiperSlide key={attraction.id}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                    <div className="text-center bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white text-xl font-bold mb-2">{attraction.name}</h3>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300">
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .attractions-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        .attractions-swiper .swiper-pagination-bullet {
          background: white;
          width: 8px;
          height: 8px;
        }
        .attractions-swiper .swiper-pagination-bullet-active {
          background: #C49B61;
        }
      `}</style>
    </section>
  );
};

export default AttractionsSection;