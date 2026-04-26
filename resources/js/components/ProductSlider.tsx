import React from 'react';

interface Product {
  image: string;
  title: string;
  description: string;
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
  const [isSliding, setIsSliding] = React.useState(false);
  const [translate, setTranslate] = React.useState(0); // px
  const [windowItems, setWindowItems] = React.useState(() => Array.from({ length: visibleCount + 1 }, (_, i) => products[(start + i) % total]));
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = React.useState(0);

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
  }, [windowItems]);


  // Slide to next (show movement)
  const next = React.useCallback(() => {
    if (isSliding || cardWidth === 0) return;
    setIsSliding(true);
    setTranslate(-cardWidth);
    setTimeout(() => {
      // Remove first item, add next at end
      const newStart = (start + 1) % total;
      setStart(newStart);
      setWindowItems(Array.from({ length: visibleCount + 1 }, (_, i) => products[(newStart + i) % total]));
      setTranslate(0);
      setIsSliding(false);
    }, 500);
  }, [isSliding, start, total, products, cardWidth]);

  // Slide to previous
  const prev = React.useCallback(() => {
    if (isSliding || cardWidth === 0) return;
    setIsSliding(true);
    setTranslate(cardWidth);
    setTimeout(() => {
      // Move window back by 1
      const newStart = (start - 1 + total) % total;
      setStart(newStart);
      setWindowItems(Array.from({ length: visibleCount + 1 }, (_, i) => products[(newStart + i) % total]));
      setTranslate(0);
      setIsSliding(false);
    }, 500);
  }, [isSliding, start, total, products, cardWidth]);


  // Pause on hover
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  // Update windowItems if products change
  React.useEffect(() => {
    setWindowItems(Array.from({ length: visibleCount + 1 }, (_, i) => products[(start + i) % total]));
  }, [products, start, total]);

  // Animation style
  const slideStyle = {
    transform: `translateX(${translate}px)`,
    transition: isSliding ? 'transform 500ms cubic-bezier(0.4,0,0.2,1)' : 'none',
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto flex items-center overflow-visible"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Arrow controls - outside the slider */}
      <div className="flex flex-col justify-center items-center h-full mr-2">
        <button
          className="rounded-full bg-(--secondary) p-2 shadow disabled:opacity-40"
          aria-label="Previous slide"
          onClick={prev}
          disabled={isSliding}
        >
          {/* Left Arrow SVG */}
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15L6 9L12 3" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div ref={containerRef} className="flex items-stretch gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide justify-center sm:justify-start" style={slideStyle}>
          {windowItems.map((product, idx) => (
            <div
              key={product.title + idx + start}
              className={
                "product-card bg-(--primary) text-(--primary-foreground) rounded-2xl shadow-lg border-2 border-(--secondary,#06b6d4) flex flex-col items-stretch p-0 group transition-transform hover:-translate-y-1 overflow-hidden" +
                (idx === visibleCount ? " pointer-events-none opacity-0 select-none w-0 min-w-0 max-w-0 p-0 m-0" :
                  visibleCount === 1 ? " w-72 min-w-[16rem] max-w-xs" :
                  visibleCount === 2 ? " w-1/2 min-w-[12rem] max-w-sm" :
                  " w-1/4 min-w-[10rem]")
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
                    className="text-xs sm:text-sm opacity-80 mb-4 text-center break-words overflow-auto min-h-[4.2em] sm:min-h-[5em]"
                    style={{ wordBreak: 'break-word', lineHeight: '1.3em', display: 'block', minHeight: '4.2em' }}
                  >
                    {product.description}
                  </div>
                </div>
                <button className="px-3 py-1 rounded-full bg-(--secondary) text-white font-semibold shadow hover:bg-cyan-700 transition w-full mt-auto text-xs sm:text-base" style={{ marginBottom: 0 }}>More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full ml-2">
        <button
          className="rounded-full bg-(--secondary) p-2 shadow disabled:opacity-40"
          aria-label="Next slide"
          onClick={next}
          disabled={isSliding}
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
