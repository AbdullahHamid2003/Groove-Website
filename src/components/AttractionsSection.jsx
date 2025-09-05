import { ArrowRight } from 'lucide-react';

const AttractionsSection = () => {
  const attractions = [
    {
      id: 1,
      title: "Little Krazy",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      id: 2,
      title: "Hawaiim Groves City",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "Picnic Market",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 4,
      title: "Lucaw",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-800 to-green-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair font-light mb-8 max-w-3xl">
            Book General Access ticket and enjoy the attractions for free
          </h2>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center group">
            Book General Access Ticket
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {attractions.map((attraction) => (
            <div 
              key={attraction.id} 
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${attraction.className}`}
            >
              <img 
                src={attraction.image} 
                alt={attraction.title}
                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl md:text-3xl font-playfair font-light">
                  {attraction.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;