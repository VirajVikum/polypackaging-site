import React from 'react';
import { MainSlider } from '@/components/main-slider';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">

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
              text: 'Serving Food, Health, Pet & Home Care',
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
      <section className="py-16 flex justify-center border-b bg-[var(--card)]">
        <div className="modern-glass max-w-6xl w-full px-10 py-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--secondary)] font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl font-medium text-center text-white/90 font-[Inter,sans-serif] leading-relaxed drop-shadow max-w-2xl">
            With over 30 years of experience, <span className="text-[var(--secondary)] font-semibold">Polypackaging Industries (Pvt) Ltd</span> is the leading flexible packaging manufacturer in Sri Lanka's North Western Province, specializing in high-quality Roto Gravure and Flexographic printing. As an <span className="text-cyan-400 font-semibold">ISO 22000:2005</span> certified company, we provide innovative, food-safe, and cost-effective packaging solutions designed to enhance product protection and market appeal.<br className="hidden md:block" />
            <span className="block mt-4">We are committed to <span className="text-cyan-400 font-semibold">social responsibility</span> and exceptional service, offering expert consultation and eco-friendly recycling initiatives to support our clients and the environment.</span>
          </p>
        </div>
      </section>

      {/* Section 3: Product Slider */}
      <section className="py-12 border-b bg-[var(--background)]">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--secondary)]">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Food */}
          <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-2xl shadow-lg border-2 border-[var(--secondary,#06b6d4)] flex flex-col items-stretch p-0 group transition-transform hover:-translate-y-1 overflow-hidden">
            <img src="/images/product-types/food.png" alt="Food" className="w-full h-32 object-cover mb-0 shadow" />
            <div className="flex-1 flex flex-col items-center p-5">
              <div className="font-bold text-lg mb-2 mt-2">Food</div>
              <div className="text-sm opacity-80 mb-4 text-center">Flexible, food-safe packaging for snacks, dry goods, and perishables.</div>
              <button className="mt-auto px-4 py-1 rounded-full bg-[var(--secondary)] text-white font-semibold shadow hover:bg-cyan-700 transition">More</button>
            </div>
          </div>
          {/* Health Care */}
          <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-2xl shadow-lg border-2 border-[var(--secondary,#06b6d4)] flex flex-col items-stretch p-0 group transition-transform hover:-translate-y-1 overflow-hidden">
            <img src="/images/product-types/health.jpg" alt="Health Care" className="w-full h-32 object-cover mb-0 shadow" />
            <div className="flex-1 flex flex-col items-center p-5">
              <div className="font-bold text-lg mb-2 mt-2">Health Care</div>
              <div className="text-sm opacity-80 mb-4 text-center">Hygienic, durable packaging for medical and personal care products.</div>
              <button className="mt-auto px-4 py-1 rounded-full bg-[var(--secondary)] text-white font-semibold shadow hover:bg-cyan-700 transition">More</button>
            </div>
          </div>
          {/* Pet Care */}
          <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-2xl shadow-lg border-2 border-[var(--secondary,#06b6d4)] flex flex-col items-stretch p-0 group transition-transform hover:-translate-y-1 overflow-hidden">
            <img src="/images/product-types/pet-care.jpg" alt="Pet Care" className="w-full h-32 object-cover mb-0 shadow" />
            <div className="flex-1 flex flex-col items-center p-5">
              <div className="font-bold text-lg mb-2 mt-2">Pet Care</div>
              <div className="text-sm opacity-80 mb-4 text-center">Safe, attractive packaging for pet food and accessories.</div>
              <button className="mt-auto px-4 py-1 rounded-full bg-[var(--secondary)] text-white font-semibold shadow hover:bg-cyan-700 transition">More</button>
            </div>
          </div>
          {/* Home Care */}
          <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-2xl shadow-lg border-2 border-[var(--secondary,#06b6d4)] flex flex-col items-stretch p-0 group transition-transform hover:-translate-y-1 overflow-hidden">
            <img src="/images/product-types/home.png" alt="Home Care" className="w-full h-32 object-cover mb-0 shadow" />
            <div className="flex-1 flex flex-col items-center p-5">
              <div className="font-bold text-lg mb-2 mt-2">Home Care</div>
              <div className="text-sm opacity-80 mb-4 text-center">Reliable packaging for household products and cleaning supplies.</div>
              <button className="mt-auto px-4 py-1 rounded-full bg-[var(--secondary)] text-white font-semibold shadow hover:bg-cyan-700 transition">More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Technology / Why Choose Us */}
      <section className="py-12 text-center border-b bg-[var(--card)] text-[var(--card-foreground)]">
        <h2 className="text-2xl font-bold mb-2 text-[var(--secondary)]">Why Choose Us</h2>
        <p className="max-w-2xl mx-auto text-[var(--muted-foreground)]">Highlight your technology, quality, or unique selling points here.</p>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-12 text-center border-b bg-[var(--background)]">
        <h2 className="text-2xl font-bold mb-2 text-[var(--secondary)]">Testimonials</h2>
        <p className="max-w-2xl mx-auto text-[var(--muted-foreground)]">"Great service!" - Customer Name</p>
      </section>

      {/* Section 6: Clients Slider */}
      <section className="py-12 text-center border-b bg-[var(--card)] text-[var(--card-foreground)]">
        <h2 className="text-2xl font-bold mb-6 text-[var(--secondary)]">Our Clients</h2>
        <div className="flex justify-center gap-8">
          <div className="w-24 h-12 bg-[var(--muted)] rounded shadow flex items-center justify-center border border-[var(--gold,#ffd700)] text-[var(--foreground)]">Logo 1</div>
          <div className="w-24 h-12 bg-[var(--muted)] rounded shadow flex items-center justify-center border border-[var(--gold,#ffd700)] text-[var(--foreground)]">Logo 2</div>
          <div className="w-24 h-12 bg-[var(--muted)] rounded shadow flex items-center justify-center border border-[var(--gold,#ffd700)] text-[var(--foreground)]">Logo 3</div>
        </div>
      </section>

      {/* Bottom Section: Contact Us */}
      <footer className="py-12 text-center mt-auto border-t bg-[var(--primary)] text-[var(--primary-foreground)] w-full">
        <h2 className="text-2xl font-bold mb-2 text-[var(--secondary)]">Contact Us</h2>
        <p className="max-w-2xl mx-auto">Email: info@example.com | Phone: 123-456-7890</p>
      </footer>
    </div>
  );
}
