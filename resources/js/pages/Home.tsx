import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { ClientRibbon } from '@/components/ClientRibbon';
import React from 'react';
import { RichTypewriter } from '@/components/RichTypewriter';
import { findHighlightRanges } from '@/components/findHighlightRanges';
import { MainSlider } from '@/components/main-slider';
import { ProductSlider } from '@/components/ProductSlider';
import { WhyChooseUsParagraph } from '@/components/WhyChooseUsParagraph';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-(--background) text-(--foreground) overflow-x-hidden">

      {/* Section 1: Main Slider */}
      <section className="border-b px-2 sm:px-4 md:px-0">
        <MainSlider
          images={[
            {
              src: '/images/main-slider/slider-1.jpg',
              alt: 'Slider 1',
              text: 'Premium Packaging Solutions',
            },
            {
              src: '/images/main-slider/slider-2.jpg',
              alt: 'Slider 2',
              text: 'Innovative. Reliable. Sustainable.',
            },
            {
              src: '/images/main-slider/slider-3.jpg',
              alt: 'Slider 3',
              text: 'Food, Beverages, Health, Pet & Home Care',
            },
            {
              src: '/images/main-slider/slider-4.jpg',
              alt: 'Slider 4',
              text: 'Trusted by Leading Brands',
            },
            {
              src: '/images/main-slider/slider-5.jpg',
              alt: 'Slider 5',
              text: 'Polypackaging Pvt Ltd',
            },
          ]}
        />
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-10 sm:py-14 md:py-16 flex justify-center border-b bg-transparent px-2 sm:px-4 md:px-0">
        <div className="max-w-3xl w-full flex flex-col items-center px-2 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10">
          {/* <span className="uppercase tracking-widest text-cyan-400 font-bold text-xs sm:text-sm mb-2">About Us</span> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-center text-(--secondary) font-[Montserrat,sans-serif] tracking-tight relative">
            Who We Are
            <span className="block mx-auto mt-2 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 opacity-80"></span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-normal text-center text-(--foreground) font-[Inter,sans-serif] leading-relaxed max-w-2xl mt-4 mb-0">
            {(() => {
              const text = "With over 30 years of experience, Polypackaging Industries (Pvt) Ltd is the leading flexible packaging manufacturer in Sri Lanka's North Western Province, specializing in high-quality Roto Gravure and Flexographic printing. As an ISO 22000:2005 certified company, we provide innovative, food-safe, and cost-effective packaging solutions designed to enhance product protection and market appeal. We are committed to social responsibility and exceptional service, offering expert consultation and eco-friendly recycling initiatives to support our clients and the environment.";
              const highlights = findHighlightRanges(
                text,
                [
                  "Polypackaging Industries (Pvt) Ltd",
                  "ISO 22000:2005",
                  "social responsibility"
                ],
                [
                  "text-(--secondary) font-semibold",
                  "text-cyan-400 font-semibold",
                  "text-cyan-400 font-semibold"
                ]
              );
              return (
                <RichTypewriter
                  text={text}
                  speed={7}
                  highlights={highlights}
                  className="inline"
                />
              );
            })()}
          </p>
        </div>
      </section>

      {/* Section 3: Product Slider */}
      <section className="py-8 sm:py-10 md:py-12 border-b bg-(--background) px-2 sm:px-4 md:px-0">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-(--secondary)">Our Products</h2>
        {/* ProductSlider carousel */}
        <ProductSlider
          products={[
            {
              image: '/images/product-types/food.png',
              title: 'Food',
              description: 'Flexible, food-safe packaging for snacks, dry goods, and perishables.'
            },
            {
              image: '/images/product-types/health.jpg',
              title: 'Health Care',
              description: 'Hygienic, durable packaging for medical and personal care.'
            },
            {
              image: '/images/product-types/pet-care.jpg',
              title: 'Pet Care',
              description: 'Safe, attractive packaging for pet food and accessories.'
            },
            {
              image: '/images/product-types/home.png',
              title: 'Home Care',
              description: 'Reliable packaging for household products and cleaning supplies.'
            },
            {
              image: '/images/product-types/home.png',
              title: 'Home Care',
              description: 'Reliable packaging for household products and cleaning supplies.'
            },
            {
              image: '/images/product-types/home.png',
              title: 'Home Care',
              description: 'Reliable packaging for household products and cleaning supplies.'
            },
            {
              image: '/images/product-types/home.png',
              title: 'Beverages',
              description: 'Reliable packaging for household products and cleaning supplies.'
            },
          ]}
        />
      </section>

      {/* Section 4: Why Choose Us (Paragraph with Show More) */}
      <section className="py-10 sm:py-14 md:py-16 border-b bg-(--card) text-(--card-foreground) px-2 sm:px-4 md:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-(--secondary) font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg text-center">
          Why Choose Us
        </h2>
        <WhyChooseUsParagraph />
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-10 sm:py-14 md:py-16 border-b bg-(--card) text-(--card-foreground) px-2 sm:px-4 md:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-cyan-400 font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg text-center">
          Testimonials
        </h2>
        <TestimonialCarousel />
      </section>

      {/* Section 6: Clients Ribbon */}
      <section className="py-8 sm:py-10 md:py-12 text-center border-b bg-(--card) text-(--card-foreground) px-2 sm:px-4 md:px-0">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-(--secondary)">Our Clients</h2>
        <ClientRibbon />
      </section>

      {/* Bottom Section: Contact Us */}
      <footer className="py-8 sm:py-10 md:py-12 text-center mt-auto border-t bg-(--primary) text-(--primary-foreground) w-full px-2 sm:px-4 md:px-0">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-(--secondary)">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base">Email: info@example.com | Phone: 123-456-7890</p>
      </footer>
    </div>
  );
}
