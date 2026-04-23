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
    <div className="relative w-full h-[32rem] overflow-hidden flex items-center justify-center bg-black">
      {images.map((img, idx) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/70">
        <span
          className="text-3xl md:text-5xl font-extrabold text-white text-center px-6 py-4 rounded shadow-xl"
          style={{
            textShadow: '0 2px 12px #000, 0 0 2px #000, 0 0 8px #000',
            WebkitTextStroke: '2px var(--gold, #ffd700)',
          }}
        >
          {images[current].text}
        </span>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-gold rounded-full w-10 h-10 flex items-center justify-center z-30 hover:bg-gold hover:text-black transition"
        onClick={prev}
        aria-label="Previous slide"
        type="button"
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-gold rounded-full w-10 h-10 flex items-center justify-center z-30 hover:bg-gold hover:text-black transition"
        onClick={next}
        aria-label="Next slide"
        type="button"
      >
        &#8594;
      </button>
    </div>
  );
};
