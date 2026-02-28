
'use client';

import { useState } from 'react';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Running Shoes',
    price: 9960,
    originalPrice: 12450,
    image: 'https://readdy.ai/api/search-image?query=Premium%20running%20shoes%20athletic%20footwear%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20sports%20shoes%20performance%20sneakers%20stylish%20athletic%20wear&width=400&height=500&seq=featured-1&orientation=portrait',
    category: 'footwear',
    isNew: true,
    colors: ['black', 'white', 'blue']
  },
  {
    id: 2,
    name: 'Athletic Training Set',
    price: 6225,
    originalPrice: 8300,
    image: 'https://readdy.ai/api/search-image?query=Athletic%20training%20set%20sportswear%20outfit%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20apparel%20performance%20fabric%20stylish%20activewear&width=400&height=500&seq=featured-2&orientation=portrait',
    category: 'sets',
    onSale: true,
    colors: ['black', 'gray', 'navy']
  },
  {
    id: 3,
    name: 'Compression Leggings',
    price: 4150,
    image: 'https://readdy.ai/api/search-image?query=Compression%20leggings%20athletic%20wear%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20apparel%20performance%20fabric%20stylish%20activewear&width=400&height=500&seq=featured-3&orientation=portrait',
    category: 'bottoms',
    colors: ['black', 'charcoal', 'navy']
  },
  {
    id: 4,
    name: 'Performance Tank Top',
    price: 2905,
    originalPrice: 3735,
    image: 'https://readdy.ai/api/search-image?query=Performance%20tank%20top%20athletic%20wear%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20apparel%20performance%20fabric%20stylish%20activewear&width=400&height=500&seq=featured-4&orientation=portrait',
    category: 'tops',
    onSale: true,
    colors: ['white', 'black', 'gray']
  },
  {
    id: 5,
    name: 'Training Shorts',
    price: 3320,
    image: 'https://readdy.ai/api/search-image?query=Training%20shorts%20athletic%20wear%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20apparel%20performance%20fabric%20stylish%20activewear&width=400&height=500&seq=featured-5&orientation=portrait',
    category: 'bottoms',
    isNew: true,
    colors: ['navy', 'black', 'gray']
  },
  {
    id: 6,
    name: 'Sports Bra Collection',
    price: 2490,
    originalPrice: 3320,
    image: 'https://readdy.ai/api/search-image?query=Sports%20bra%20collection%20athletic%20wear%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20apparel%20performance%20fabric%20stylish%20activewear&width=400&height=500&seq=featured-6&orientation=portrait',
    category: 'tops',
    onSale: true,
    colors: ['pink', 'black', 'white']
  },
  {
    id: 7,
    name: 'Athletic Hoodie',
    price: 5810,
    image: 'https://readdy.ai/api/search-image?query=Athletic%20hoodie%20sportswear%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20apparel%20performance%20fabric%20stylish%20activewear&width=400&height=500&seq=featured-7&orientation=portrait',
    category: 'outerwear',
    colors: ['gray', 'black', 'navy']
  },
  {
    id: 8,
    name: 'Training Gloves',
    price: 1660,
    originalPrice: 2075,
    image: 'https://readdy.ai/api/search-image?query=Training%20gloves%20athletic%20accessories%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20gear%20performance%20equipment%20stylish%20activewear&width=400&height=500&seq=featured-8&orientation=portrait',
    category: 'accessories',
    onSale: true,
    colors: ['black', 'blue', 'red']
  },
  {
    id: 9,
    name: 'Running Jacket',
    price: 7470,
    image: 'https://readdy.ai/api/search-image?query=Running%20jacket%20athletic%20outerwear%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20apparel%20performance%20fabric%20stylish%20activewear&width=400&height=500&seq=featured-9&orientation=portrait',
    category: 'outerwear',
    isNew: true,
    colors: ['black', 'blue', 'green']
  },
  {
    id: 10,
    name: 'Yoga Mat Premium',
    price: 2905,
    originalPrice: 4150,
    image: 'https://readdy.ai/api/search-image?query=Premium%20yoga%20mat%20fitness%20equipment%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20exercise%20accessories%20performance%20gear%20stylish%20activewear&width=400&height=500&seq=featured-10&orientation=portrait',
    category: 'accessories',
    onSale: true,
    colors: ['purple', 'black', 'blue']
  },
  {
    id: 11,
    name: 'Cross Training Shoes',
    price: 8715,
    image: 'https://readdy.ai/api/search-image?query=Cross%20training%20shoes%20athletic%20footwear%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20sports%20shoes%20performance%20sneakers%20stylish%20athletic%20wear&width=400&height=500&seq=featured-11&orientation=portrait',
    category: 'footwear',
    colors: ['white', 'black', 'red']
  },
  {
    id: 12,
    name: 'Workout Headband Set',
    price: 1245,
    originalPrice: 1660,
    image: 'https://readdy.ai/api/search-image?query=Workout%20headband%20set%20athletic%20accessories%20modern%20design%20clean%20white%20background%20professional%20product%20photography%20contemporary%20fitness%20gear%20performance%20equipment%20stylish%20activewear&width=400&height=500&seq=featured-12&orientation=portrait',
    category: 'accessories',
    onSale: true,
    colors: ['mixed', 'black', 'white']
  }
];

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our most popular athletic wear</p>
          </div>
          <Link href="/sale" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />

                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <i className={`${favorites.includes(product.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                </button>

                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                    New
                  </span>
                )}

                {product.onSale && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Sale
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2 mb-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-6 h-6 rounded-full border-2 border-white ${
                          color === 'black' ? 'bg-black' :
                          color === 'white' ? 'bg-white' :
                          color === 'gray' ? 'bg-gray-400' :
                          color === 'navy' ? 'bg-blue-900' :
                          color === 'blue' ? 'bg-blue-500' :
                          color === 'red' ? 'bg-red-500' :
                          color === 'green' ? 'bg-green-500' :
                          color === 'pink' ? 'bg-pink-400' :
                          color === 'purple' ? 'bg-purple-500' :
                          color === 'charcoal' ? 'bg-gray-600' :
                          color === 'mixed' ? 'bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400' :
                          'bg-gray-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <button className="w-full bg-white text-black py-2 rounded font-medium hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
