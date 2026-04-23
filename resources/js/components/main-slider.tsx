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
          className="text-4xl md:text-6xl font-extrabold text-white text-center px-8 py-6 rounded-xl shadow-2xl backdrop-blur-md"
          style={{
            textShadow: '0 4px 24px #000, 0 0 2px #000, 0 0 12px #000',
            WebkitTextStroke: '2px var(--gold, #ffd700)',
          }}
        >
          {images[current].text}
        </span>
      </div>
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/70 text-gold rounded-full w-14 h-14 flex items-center justify-center z-30 shadow-lg hover:bg-gold hover:text-black transition-all duration-200 hover:scale-110 border-2 border-gold"
        onClick={prev}
        aria-label="Previous slide"
        type="button"
      >
        <span className="text-3xl">&#8592;</span>
      </button>
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/70 text-gold rounded-full w-14 h-14 flex items-center justify-center z-30 shadow-lg hover:bg-gold hover:text-black transition-all duration-200 hover:scale-110 border-2 border-gold"
        onClick={next}
        aria-label="Next slide"
        type="button"
      >
        <span className="text-3xl">&#8594;</span>
      </button>
    </div>
  );
};
