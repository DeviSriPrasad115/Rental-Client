import React from 'react';
import { Search, Home, MapPin, DollarSign, BedDouble, Bath, Square } from 'lucide-react';

const FeaturedProperties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$1,250,000",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    beds: 4,
    baths: 3,
    sqft: 3200
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    price: "$850,000",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    baths: 2,
    sqft: 2100
  },
  {
    id: 3,
    title: "Waterfront Estate",
    price: "$2,100,000",
    location: "Miami Beach, FL",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    beds: 5,
    baths: 4,
    sqft: 4500
  }
];

const Content = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Find Your Dream Home
          </h1>
          <p className="text-xl mb-8 text-center max-w-2xl">
            Discover the perfect property from our extensive collection of luxury homes, apartments, and estates
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
                <select className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="">Price Range</option>
                  <option value="0-500000">$0 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000+">$1,000,000+</option>
                </select>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FeaturedProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-md">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={18} className="mr-2" />
                    {property.location}
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <div className="flex items-center">
                      <BedDouble size={18} className="mr-2" />
                      {property.beds} Beds
                    </div>
                    <div className="flex items-center">
                      <Bath size={18} className="mr-2" />
                      {property.baths} Baths
                    </div>
                    <div className="flex items-center">
                      <Square size={18} className="mr-2" />
                      {property.sqft} sqft
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Extensive Property Selection</h3>
              <p className="text-gray-600">
                Access thousands of premium properties across the most desirable locations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Competitive Pricing</h3>
              <p className="text-gray-600">
                Find the best deals and investment opportunities in the market.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Prime Locations</h3>
              <p className="text-gray-600">
                Discover properties in the most sought-after neighborhoods and areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;