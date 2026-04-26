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
      <section className="border-b">
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
      <section className="py-16 flex justify-center border-b bg-(--card)">
        <div className="modern-glass max-w-6xl w-full px-10 py-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-(--secondary) font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl font-medium text-center text-white/90 font-[Inter,sans-serif] leading-relaxed drop-shadow max-w-2xl">
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
            <br className="hidden md:block" />
          </p>
        </div>
      </section>

      {/* Section 3: Product Slider */}
      <section className="py-12 border-b bg-(--background)">
        <h2 className="text-2xl font-bold mb-6 text-center text-(--secondary)">Our Products</h2>
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
      <section className="py-16 border-b bg-(--card) text-(--card-foreground)">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-(--secondary) font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg text-center">
          Why Choose Us
        </h2>
        <WhyChooseUsParagraph />
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-12 text-center border-b bg-(--background)">
        <h2 className="text-2xl font-bold mb-2 text-(--secondary)">Testimonials</h2>
        <p className="max-w-2xl mx-auto text-(--muted-foreground)">"Great service!" - Customer Name</p>
      </section>

      {/* Section 6: Clients Slider */}
      <section className="py-12 text-center border-b bg-(--card) text-(--card-foreground)">
        <h2 className="text-2xl font-bold mb-6 text-(--secondary)">Our Clients</h2>
        <div className="flex justify-center gap-8">
          <div className="w-24 h-12 bg-(--muted) rounded shadow flex items-center justify-center border border-(--gold,#ffd700) text-(--foreground)">Logo 1</div>
          <div className="w-24 h-12 bg-(--muted) rounded shadow flex items-center justify-center border border-(--gold,#ffd700) text-(--foreground)">Logo 2</div>
          <div className="w-24 h-12 bg-(--muted) rounded shadow flex items-center justify-center border border-(--gold,#ffd700) text-(--foreground)">Logo 3</div>
        </div>
      </section>

      {/* Bottom Section: Contact Us */}
      <footer className="py-12 text-center mt-auto border-t bg-(--primary) text-(--primary-foreground) w-full">
        <h2 className="text-2xl font-bold mb-2 text-(--secondary)">Contact Us</h2>
        <p className="max-w-2xl mx-auto">Email: info@example.com | Phone: 123-456-7890</p>
      </footer>
    </div>
  );
}
