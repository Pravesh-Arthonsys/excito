
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryGrid from '@/components/CategoryGrid';
import ClothingShowcase from '@/components/ClothingShowcase';
import NewsletterSection from '@/components/NewsletterSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoryGrid />
        <ClothingShowcase />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
