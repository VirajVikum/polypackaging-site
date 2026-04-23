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
      <section className="py-12 text-center border-b bg-[var(--card)] text-[var(--card-foreground)]">
        <h2 className="text-2xl font-bold mb-2 text-[var(--secondary)]">Who We Are</h2>
        <p className="max-w-2xl mx-auto text-[var(--muted-foreground)]">Brief description about the company goes here.</p>
      </section>

      {/* Section 3: Product Slider */}
      <section className="py-12 border-b bg-[var(--background)]">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--secondary)]">Our Products</h2>
        <div className="flex justify-center gap-6">
          <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg w-32 h-40 flex flex-col items-center justify-center shadow-md border-2 border-[var(--gold,#ffd700)]">
            <span className="font-semibold">Food</span>
          </div>
          <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg w-32 h-40 flex flex-col items-center justify-center shadow-md border-2 border-[var(--gold,#ffd700)]">
            <span className="font-semibold">Health<br/>care</span>
          </div>
          <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg w-32 h-40 flex flex-col items-center justify-center shadow-md border-2 border-[var(--gold,#ffd700)]">
            <span className="font-semibold">Pet<br/>care</span>
          </div>
          <div className="bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg w-32 h-40 flex flex-col items-center justify-center shadow-md border-2 border-[var(--gold,#ffd700)]">
            <span className="font-semibold">Home<br/>care</span>
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
