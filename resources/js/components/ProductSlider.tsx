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
  const visibleCount = 4;
  const total = products.length;
  const [start, setStart] = React.useState(0);
  const [isSliding, setIsSliding] = React.useState(false);
  const [translate, setTranslate] = React.useState(0); // px
  const [windowItems, setWindowItems] = React.useState(() => Array.from({ length: visibleCount + 1 }, (_, i) => products[(start + i) % total]));
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = React.useState(0);

  // Measure card width on mount and resize
  React.useEffect(() => {
    function measure() {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector('.product-card');
        if (firstCard) {
          setCardWidth((firstCard as HTMLElement).offsetWidth + 32); // 32px gap-8
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

  // Auto-slide effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [next]);

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
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div ref={containerRef} className="flex items-stretch gap-8" style={slideStyle}>
        {windowItems.map((product, idx) => (
          <div
            key={product.title + idx + start}
            className="product-card bg-(--primary) text-(--primary-foreground) rounded-2xl shadow-lg border-2 border-(--secondary,#06b6d4) flex flex-col items-stretch p-0 group transition-transform hover:-translate-y-1 overflow-hidden w-full"
            style={{ minWidth: '0', flex: '1 0 0%' }}
          >
            <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-0 shadow" />
            <div className="flex-1 flex flex-col items-center p-5">
              <div className="font-bold text-lg mb-2 mt-2">{product.title}</div>
              <div className="text-sm opacity-80 mb-4 text-center">{product.description}</div>
              <button className="mt-auto px-4 py-1 rounded-full bg-(--secondary) text-white font-semibold shadow hover:bg-cyan-700 transition">More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
