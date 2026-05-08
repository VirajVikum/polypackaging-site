import React from 'react';
import { Link } from '@inertiajs/react';

interface Product {
  image: string;
  title: string;
  description: string;
  slug?: string;
}

interface ProductSliderProps {
  products: Product[];
}



export const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  // Responsive visible count
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
    }
    return 4; // desktop
  };
  const [visibleCount, setVisibleCount] = React.useState(getVisibleCount());
  const total = products.length;
  const [start, setStart] = React.useState(0);
  const [isSliding, setIsSliding] = React.useState(false); // for sliding animation
  const [isManual, setIsManual] = React.useState(false); // for manual click
  const [direction, setDirection] = React.useState<'next' | 'prev'>('next');
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = React.useState(0);
  const [prevStart, setPrevStart] = React.useState(0);



  // Measure card width and update visibleCount on mount and resize
  React.useEffect(() => {
    function measure() {
      setVisibleCount(getVisibleCount());
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector('.product-card');
        if (firstCard) {
          setCardWidth((firstCard as HTMLElement).offsetWidth + 16); // 16px gap-4 for mobile
        }
      }
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [products]);


  // Slide to next (manual or auto)
  const next = React.useCallback((manual = false) => {
    if (isSliding || cardWidth === 0) return;
    setDirection('next');
    setIsSliding(true);
    if (manual) setIsManual(true);
    setTimeout(() => {
      setPrevStart(start);
      setStart((prev) => (prev + 1) % total);
      setIsSliding(false);
      if (manual) setIsManual(false);
    }, 900);
  }, [isSliding, cardWidth, total, start]);

  // Slide to previous (manual only)
  const prev = React.useCallback(() => {
    if (isSliding || cardWidth === 0) return;
    setDirection('prev');
    setIsSliding(true);
    setIsManual(true);
    setTimeout(() => {
      setPrevStart(start);
      setStart((prev) => (prev - 1 + total) % total);
      setIsSliding(false);
      setIsManual(false);
    }, 900);
  }, [isSliding, cardWidth, total, start]);

  // Auto slide
  React.useEffect(() => {
    const interval = setInterval(() => {
      next(false); // auto
    }, 3000);
    return () => clearInterval(interval);
  }, [next]);

  // Animation style
  let slideStyle: React.CSSProperties = {};
  if (isSliding && cardWidth) {
    slideStyle = {
      transform: `translateX(${direction === 'next' ? -cardWidth : cardWidth}px)`,
      transition: 'transform 900ms cubic-bezier(0.4,0,0.2,1)',
    };
  } else {
    slideStyle = {
      transform: 'translateX(0)',
      transition: 'none',
    };
  }

  return (
    <div
      className="relative w-full max-w-6xl mx-auto flex items-center overflow-visible"
    >
      {/* Arrow controls - outside the slider */}
      <div className="flex flex-col justify-center items-center h-full mr-2">
        <button
          className="rounded-full bg-red-600 hover:bg-red-700 p-2 shadow disabled:opacity-40"
          aria-label="Previous slide"
          onClick={prev}
          disabled={isManual}
        >
          {/* Left Arrow SVG */}
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15L6 9L12 3" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div
          ref={containerRef}
          className="flex items-stretch gap-4 sm:gap-6 md:gap-8 justify-center sm:justify-start transition-transform duration-500 ease-in-out"
          style={slideStyle}
        >
          {Array.from({ length: visibleCount }, (_, i) => {
            const idx = (start + i) % total;
            const product = products[idx];
            
            // Determine if this card is newly entering
            let isNewCard = false;
            if (direction === 'next') {
              // The rightmost card (last one) is new when sliding next
              isNewCard = i === visibleCount - 1 && !isSliding;
            } else {
              // The leftmost card (first one) is new when sliding prev
              isNewCard = i === 0 && !isSliding;
            }
            
            return (
              <div
                key={product.title + idx + start}
                className={
                  "product-card bg-white text-black rounded-2xl shadow-lg border-2 border-red-600 flex flex-col items-stretch p-0 group transition-transform hover:-translate-y-1 overflow-hidden" +
                  (visibleCount === 1 ? " w-72 min-w-[16rem] max-w-xs" :
                    visibleCount === 2 ? " w-1/2 min-w-48 max-w-sm" :
                    " w-1/4 min-w-40") +
                  (isNewCard ? " animate-card-entrance" : "")
                }
                style={{ height: '340px', minHeight: '300px', maxHeight: '380px' }}
              >
                <div style={{ height: '50%', minHeight: '50%', maxHeight: '50%' }} className="w-full flex items-center justify-center overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover mb-0 shadow" style={{ objectFit: 'cover', height: '100%' }} />
                </div>
                <div className="flex-1 flex flex-col items-center pb-3 pt-3 px-3 sm:pb-5 sm:pt-5 sm:px-5 min-h-0" style={{ height: '60%', minHeight: 0, overflow: 'visible' }}>
                  <div className="w-full flex-1 flex flex-col justify-start min-h-0">
                    <div className="font-bold text-base sm:text-lg mb-2 mt-0 text-center">{product.title}</div>
                    <div
                      className="text-xs sm:text-sm opacity-80 mb-4 text-center wrap-break-word overflow-auto min-h-[4.2em] sm:min-h-[5em]"
                      style={{ wordBreak: 'break-word', lineHeight: '1.3em', display: 'block', minHeight: '4.2em' }}
                    >
                      {product.description}
                    </div>
                  </div>
                  {product.slug ? (
                    <Link
                      href={`/products/${product.slug}`}
                      className="px-3 py-1 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition w-full mt-auto text-xs sm:text-base border border-red-600 text-center block"
                      style={{ marginBottom: 0 }}
                    >
                      More
                    </Link>
                  ) : (
                    <button className="px-3 py-1 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition w-full mt-auto text-xs sm:text-base border border-red-600" style={{ marginBottom: 0 }}>More</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full ml-2">
        <button
          className="rounded-full bg-red-600 hover:bg-red-700 p-2 shadow disabled:opacity-40"
          aria-label="Next slide"
          onClick={() => next(true)}
          disabled={isManual}
        >
          {/* Right Arrow SVG */}
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3L12 9L6 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
