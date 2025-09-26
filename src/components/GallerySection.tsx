import React from 'react';
import { Camera, Image as ImageIcon, Video, Eye } from 'lucide-react';

const GallerySection = () => {
  // Using placeholder images for demonstration
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      title: "Elegant Facade",
      category: "Exterior"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      title: "Luxury Living Room",
      category: "Interior"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg",
      title: "Modern Kitchen",
      category: "Interior"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg",
      title: "Master Bedroom",
      category: "Interior"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg",
      title: "Swimming Pool",
      category: "Amenities"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg",
      title: "Landscaped Gardens",
      category: "Amenities"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premier Property Collection
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual tour through our luxury apartments and premium amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-blue-600 text-xs px-2 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                    <Eye size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Camera size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">High-Quality Images</h3>
            <p className="text-gray-600">Professional photography showcasing every detail of our luxury apartments</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Video size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Virtual Tours</h3>
            <p className="text-gray-600">Immersive virtual walkthroughs of model apartments and amenities</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ImageIcon size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Live Updates</h3>
            <p className="text-gray-600">Regular construction progress updates and completed project showcases</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Schedule a Personal Tour
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Experience the luxury and elegance of Hero Homes The Palatial firsthand with our personalized site visits
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Book Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;