import { ArrowRight } from 'lucide-react';

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Khawaja Yanni",
      price: "100 SR PER GUEST",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      isArabic: true
    },
    {
      id: 2,
      title: "Yamagata",
      price: "100 SR PER GUEST",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    }
  ];

  const categories = [
    {
      id: 1,
      title: "Restaurants",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Experiences",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Events",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-900 to-black">
      <div className="container mx-auto px-4">
        {/* Top Row - Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {experiences.map((experience) => (
            <div key={experience.id} className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src={experience.image} 
                alt={experience.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-yellow-400 text-sm font-medium tracking-widest mb-2 uppercase">
                  {experience.price}
                </p>
                <h3 className={`text-white text-3xl font-light mb-4 ${experience.isArabic ? 'font-arabic' : 'font-playfair'}`}>
                  {experience.isArabic ? 'خواجة يني' : experience.title}
                </h3>
              </div>
              <div className="absolute top-6 right-6">
                <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group">
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-light mb-8 leading-tight">
              Curate your experience as you like
            </h2>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center group">
              Book Tickets
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Category Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Restaurants - Takes full left column */}
            <div className="row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src={categories[0].image} 
                alt={categories[0].title}
                className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-playfair font-light">
                  {categories[0].title}
                </h3>
              </div>
            </div>

            {/* Experiences - Top right */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src={categories[1].image} 
                alt={categories[1].title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-playfair font-light">
                  {categories[1].title}
                </h3>
              </div>
            </div>

            {/* Events - Bottom right */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src={categories[2].image} 
                alt={categories[2].title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-playfair font-light">
                  {categories[2].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;