import React from 'react';

export interface MainSliderImage {
  src: string;
  alt: string;
  text: string;
}

interface MainSliderProps {
  images: MainSliderImage[];
}


export const MainSlider: React.FC<MainSliderProps> = ({ images }) => {
  const [current, setCurrent] = React.useState(0);
  const [prev, setPrev] = React.useState<number | null>(null);
  const [isSliding, setIsSliding] = React.useState(false);
  const [coverPos, setCoverPos] = React.useState<'init' | 'cover' | null>(null);
  const [direction, setDirection] = React.useState<'left' | 'right'>('right');
  const [textVisible, setTextVisible] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideDuration = 700;

  // Next slide (cover from right)
  const next = () => {
    setPrev(current);
    setDirection('right');
    setIsSliding(true);
    setCoverPos('init');
  };
  // Previous slide (cover from left)
  const prevSlide = () => {
    setPrev(current);
    setDirection('left');
    setIsSliding(true);
    setCoverPos('init');
  };

  // Trigger the cover image to animate in after mount
  React.useEffect(() => {
    if (isSliding && coverPos === 'init') {
      requestAnimationFrame(() => setCoverPos('cover'));
      setTimeout(() => {
        setCurrent((prevIdx) => {
          if (direction === 'right') {
            return (prevIdx + 1) % images.length;
          } else {
            return (prevIdx - 1 + images.length) % images.length;
          }
        });
        setIsSliding(false);
        setPrev(null);
        setCoverPos(null);
      }, slideDuration);
    }
  }, [isSliding, coverPos, direction, images.length]);

  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length]);

  // Hide text before image loads, show after a short delay (animation)
  React.useEffect(() => {
    setTextVisible(false);
    if (!isSliding) {
      const timer = setTimeout(() => setTextVisible(true), 150);
      return () => clearTimeout(timer);
    }
  }, [current, isSliding]);

  return (
    <div className="relative w-full h-152 overflow-hidden flex items-center justify-center bg-black/90 rounded-3xl shadow-2xl mt-6">
      {/* Previous image stays in place */}
      <img
        key={images[prev !== null ? prev : current].src + '-under'}
        src={images[prev !== null ? prev : current].src}
        alt={images[prev !== null ? prev : current].alt}
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        style={{
          transition: 'none',
        }}
      />
      {/* Cover image animates in from correct direction */}
      {isSliding && prev !== null && (
        <img
          key={images[direction === 'right' ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length].src + '-cover'}
          src={images[direction === 'right' ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length].src}
          alt={images[direction === 'right' ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length].alt}
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
          style={{
            transition: coverPos === 'cover' ? `transform ${slideDuration}ms cubic-bezier(0.4,0,0.2,1)` : 'none',
            transform:
              coverPos === 'init'
                ? (direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)')
                : 'translateX(0)',
            willChange: 'transform',
            boxShadow: '0 0 32px #0008',
          }}
        />
      )}
      {/* If not sliding, show current image on top, and trigger text animation after load */}
      {!isSliding && (
        <img
          key={images[current].src + '-top'}
          src={images[current].src}
          alt={images[current].alt}
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
          style={{
            transition: 'none',
          }}
        />
      )}
      <div className="absolute left-0 bottom-0 w-full flex flex-col items-start justify-end z-20 p-8 pointer-events-none">
        <span
          className={
            `text-2xl md:text-4xl font-bold text-white text-left px-0 py-0 pb-84 tracking-tight transition-all duration-700 ease-out ` +
            (textVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0')
          }
          style={{
            fontFamily: 'Michroma, Montserrat, sans-serif',
            textShadow: '0 2px 8px #000',
            WebkitTextStroke: 'unset',
            background: 'unset',
            letterSpacing: '-0.02em',
          }}
        >
          {images[current].text}
        </span>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-0 bg-transparent border-none outline-none group"
        onClick={prevSlide}
        aria-label="Previous slide"
        type="button"
        disabled={isSliding}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:-translate-x-1 group-hover:scale-110">
          <polyline points="32,12 16,24 32,36" stroke="#d32f2f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-0 bg-transparent border-none outline-none group"
        onClick={next}
        aria-label="Next slide"
        type="button"
        disabled={isSliding}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1 group-hover:scale-110">
          <polyline points="16,12 32,24 16,36" stroke="#d32f2f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
    </div>
  );
};
