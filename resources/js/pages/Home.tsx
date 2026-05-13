import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { ClientRibbon } from '@/components/ClientRibbon';
import React from 'react';
import { Link } from '@inertiajs/react';
import { RichTypewriter } from '@/components/RichTypewriter';
import { findHighlightRanges } from '@/components/findHighlightRanges';
import { MainSlider } from '@/components/main-slider';
import { ProductSlider } from '@/components/ProductSlider';
import { WhyChooseUsParagraph } from '@/components/WhyChooseUsParagraph';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ProductType {
  id: number;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

interface Props {
  productTypes?: ProductType[];
}

export default function Home({ productTypes = [] }: Props) {
  const section2 = useIntersectionObserver();
  const section3 = useIntersectionObserver();
  const section4 = useIntersectionObserver();
  const section5 = useIntersectionObserver();
  const section6 = useIntersectionObserver();

  // Flatten all products from all types into a single array
  const allProducts = productTypes.flatMap((type) =>
    type.products.map((product) => ({
      image: product.image,
      title: product.title,
      description: product.description,
      slug: product.slug,
    }))
  );
  return (
    <div className="min-h-screen w-full flex flex-col bg-(--background) text-(--foreground)">

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
      <section 
        ref={section2.ref}
        className={`py-10 sm:py-14 md:py-16 flex justify-center border-b bg-transparent px-2 sm:px-4 md:px-0 transition-all duration-1000 ${
          section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl w-full flex flex-col items-center px-2 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10">
          {/* <span className="uppercase tracking-widest text-red-600 font-bold text-xs sm:text-sm mb-2">About Us</span> */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-red-600 font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg text-center">
            Who We Are
            <span className="block mx-auto mt-2 w-16 h-1 rounded-full bg-linear-to-r from-red-500 via-black to-red-500 opacity-80"></span>
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
                  "text-red-600 font-semibold",
                  "text-red-600 font-semibold"
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
      <section 
        ref={section3.ref}
        className={`py-8 sm:py-10 md:py-12 border-b bg-(--background) px-2 sm:px-4 md:px-0 transition-all duration-1000 ${
          section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-red-600 font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg text-center">
          Our Products
        </h2>
        {/* ProductSlider carousel with dynamic products from database */}
        {allProducts.length > 0 ? (
          <ProductSlider products={allProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-(--foreground) text-lg">No products available at the moment.</p>
          </div>
        )}
        
        {/* View All Products Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/products"
            className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Section 4: Why Choose Us (Paragraph with Show More) */}
      <section 
        ref={section4.ref}
        className={`py-10 sm:py-14 md:py-16 bg-(--card) text-(--card-foreground) px-2 sm:px-4 md:px-0 transition-all duration-1000 ${
          section4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-600 mb-8 font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg text-center">
          Why Choose Us
        </h2>
        <WhyChooseUsParagraph />
      </section>

      {/* Section 5: Testimonials */}
      <section 
        ref={section5.ref}
        className={`py-10 sm:py-14 md:py-16 border-b bg-(--card) text-(--card-foreground) px-2 sm:px-4 md:px-0 transition-all duration-1000 ${
          section5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-red-600 font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg text-center">
          Testimonials
        </h2>
        <TestimonialCarousel />
      </section>

      {/* Section 6: Clients Ribbon */}
      <section 
        ref={section6.ref}
        className={`py-8 sm:py-10 md:py-12 text-center border-b bg-(--card) text-(--card-foreground) px-2 sm:px-4 md:px-0 transition-all duration-1000 ${
          section6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-red-600 font-[Montserrat,sans-serif] tracking-tight drop-shadow-lg text-center">
          Our Clients</h2>
        <ClientRibbon />
      </section>
    </div>
  );
}
