import { ArrowRight } from 'lucide-react';
import ExperienceImage_1 from '../assets/Experience_Image_1.png';
import ExperienceImage_2 from '../assets/Experience_Image_2.png';
import ExperienceImage_3 from '../assets/Experience_Image_3.png';
import ExperienceImage_4 from '../assets/Experience_Image_4.png';

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Khawaja Yanni",
      price: "100 SR PER GUEST",
      image: ExperienceImage_1,
    },
    {
      id: 2,
      title: "Yamagata",
      price: "100 SR PER GUEST",
      image: ExperienceImage_2
    },
    {
      id: 3,
      title: "Yamagata",
      price: "100 SR PER GUEST",
      image: ExperienceImage_3
    },
    {
      id: 4,
      title: "Yamagata",
      price: "100 SR PER GUEST",
      image: ExperienceImage_4
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-[#273506] to-[#161F02]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-light mb-6">
            Experience the Finest Cuisine
          </h2>
          <p className="hidden md:block text-white/80 text-lg max-w-4xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Top Row - Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group rounded-[28px] bg-[#223106] p-4 shadow-lg ring-1 ring-white/10"
            >
              {/* Image (top rounded, bottom sharp) */}
              <div className="overflow-hidden rounded-t-[22px]">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-60 md:h-72 object-cover rounded-t-[22px] rounded-b-none transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content (separate from image) */}
              <div className="flex items-center justify-between gap-4 pt-5 pb-3 px-2">
                <div>
                  <h3
                    className={`text-white text-2xl md:text-[28px] leading-tight font-light ${experience.isArabic ? "font-arabic" : "font-playfair"
                      }`}
                  >
                    {experience.title}
                  </h3>

                  <span className="mt-3 inline-block rounded-full bg-[#C49B61] text-white text-[11px] tracking-[0.25em] px-4 py-1 uppercase">
                    {experience.price}
                  </span>
                </div>

                <button
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Go"
                >
                  <ArrowRight className="w-6 h-6 text-white/90 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;