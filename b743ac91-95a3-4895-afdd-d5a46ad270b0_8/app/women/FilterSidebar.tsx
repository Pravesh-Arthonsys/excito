
'use client';

import { useState } from 'react';

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
}

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  priceRange,
  setPriceRange
}: FilterSidebarProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tops', name: 'Tops & Bras' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const brands = [
    { id: 'all', name: 'All Brands' },
    { id: 'excito', name: 'Excito' },
    { id: 'nike', name: 'Nike' },
    { id: 'adidas', name: 'Adidas' },
    { id: 'lululemon', name: 'Lululemon' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Gray', 'Navy', 'Pink', 'Purple', 'Mint', 'Coral'];

  return (
    <>
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="lg:hidden mb-4 bg-black text-white px-4 py-2 rounded flex items-center gap-2 whitespace-nowrap cursor-pointer"
      >
        <i className="ri-filter-line"></i>
        Filters
      </button>

      <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'} w-full lg:w-64 bg-white lg:bg-transparent`}>
        <div className="lg:sticky lg:top-24 space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selectedCategory === category.id}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-3 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Brand</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label key={brand.id} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="brand"
                    value={brand.id}
                    checked={selectedBrand === brand.id}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="mr-3 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">{brand.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full cursor-pointer"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full px-2 py-1 border rounded text-sm"
                  min="0"
                  max="500"
                />
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full px-2 py-1 border rounded text-sm"
                  min="0"
                  max="500"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 rounded px-3 py-2 text-sm hover:border-black transition-colors whitespace-nowrap cursor-pointer"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Color</h3>
            <div className="grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 border-gray-300 hover:border-black transition-colors cursor-pointer ${
                    color === 'Black' ? 'bg-black' :
                    color === 'White' ? 'bg-white' :
                    color === 'Gray' ? 'bg-gray-400' :
                    color === 'Navy' ? 'bg-blue-900' :
                    color === 'Pink' ? 'bg-pink-400' :
                    color === 'Purple' ? 'bg-purple-500' :
                    color === 'Mint' ? 'bg-green-200' :
                    color === 'Coral' ? 'bg-orange-400' :
                    'bg-gray-300'
                  }`}
                  title={color}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
