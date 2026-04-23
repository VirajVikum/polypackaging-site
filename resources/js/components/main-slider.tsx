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
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  React.useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[32rem] overflow-hidden flex items-center justify-center bg-black/90 rounded-3xl shadow-2xl backdrop-blur-md mt-6">
      {images.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-gradient-to-b from-black/70 via-black/40 to-black/70 rounded-3xl">
        <span
          className="text-4xl md:text-6xl font-extrabold text-white text-center px-8 py-6 rounded-xl shadow-2xl backdrop-blur-md font-[Montserrat,sans-serif] tracking-tight"
          style={{
            textShadow: '0 4px 24px #000, 0 0 2px #000, 0 0 12px #000',
            WebkitTextStroke: '2px #06b6d4',
            fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif',
            letterSpacing: '-0.02em',
          }}
        >
          {images[current].text}
        </span>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-0 bg-transparent border-none outline-none group"
        onClick={prev}
        aria-label="Previous slide"
        type="button"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:-translate-x-1 group-hover:scale-110">
          <polyline points="32,12 16,24 32,36" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-0 bg-transparent border-none outline-none group"
        onClick={next}
        aria-label="Next slide"
        type="button"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1 group-hover:scale-110">
          <polyline points="16,12 32,24 16,36" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
    </div>
  );
};
