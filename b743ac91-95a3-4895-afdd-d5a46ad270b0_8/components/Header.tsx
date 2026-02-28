
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer flex items-center space-x-2"
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-700"></div>
                  <div className="w-full h-0.5 bg-gray-700"></div>
                  <div className="w-full h-0.5 bg-gray-700"></div>
                </div>
                <span className="text-gray-700 font-medium hidden md:block">Categories</span>
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <Link href="/men" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors cursor-pointer">
                          Men's Collection
                        </Link>
                        <div className="ml-3 mt-1 space-y-1">
                          <Link href="/men" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">T-Shirts & Tops</Link>
                          <Link href="/men" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Pants & Shorts</Link>
                          <Link href="/men" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Activewear</Link>
                        </div>
                      </div>
                      
                      <div>
                        <Link href="/women" className="block text-gray-900 font-medium hover:text-pink-600 transition-colors cursor-pointer">
                          Women's Collection
                        </Link>
                        <div className="ml-3 mt-1 space-y-1">
                          <Link href="/women" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Dresses & Tops</Link>
                          <Link href="/women" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Bottoms</Link>
                          <Link href="/women" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Sportswear</Link>
                        </div>
                      </div>
                      
                      <div>
                        <Link href="/kids" className="block text-gray-900 font-medium hover:text-yellow-600 transition-colors cursor-pointer">
                          Kids Collection
                        </Link>
                        <div className="ml-3 mt-1 space-y-1">
                          <Link href="/kids" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Boys Clothing</Link>
                          <Link href="/kids" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Girls Clothing</Link>
                          <Link href="/kids" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">Active Kids</Link>
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <Link href="/sale" className="block text-red-600 font-medium hover:text-red-700 transition-colors cursor-pointer">
                          🔥 Sale & Deals
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/" className="text-2xl font-bold text-black cursor-pointer" style={{ fontFamily: '"Pacifico", serif' }}>
              EXCITO
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/men" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
              Men
            </Link>
            <Link href="/women" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
              Women
            </Link>
            <Link href="/kids" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
              Kids
            </Link>
            <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors cursor-pointer font-medium">
              Sale
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
              </div>
            </form>

            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                <i className="ri-heart-line text-gray-600 w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                <i className="ri-shopping-cart-line text-gray-600 w-5 h-5 flex items-center justify-center"></i>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                <i className="ri-user-line text-gray-600 w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <i className="ri-menu-line text-gray-600 w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/men" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
                Men
              </Link>
              <Link href="/women" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
                Women
              </Link>
              <Link href="/kids" className="text-gray-700 hover:text-black transition-colors cursor-pointer">
                Kids
              </Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 transition-colors cursor-pointer font-medium">
                Sale
              </Link>
            </nav>
            <form onSubmit={handleSearch} className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
