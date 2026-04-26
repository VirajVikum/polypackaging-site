import React from "react";

const testimonials = [
  {
    text: "Polypackaging’s quality and service are unmatched. Our products always look fantastic and arrive on time.",
    name: "A. Fernando",
    role: "Brand Manager, ",
    company: "SnackCo",
    companyClass: "text-blue-400",
  },
  {
    text: "We appreciate the eco-friendly options and the team’s expert advice. Highly recommended for any business.",
    name: "S. Perera",
    role: "Procurement Lead, ",
    company: "GreenMart",
    companyClass: "text-green-300",
  },
  {
    text: "Reliable, innovative, and always responsive. Polypackaging is our go-to partner for all packaging needs.",
    name: "M. Silva",
    role: "Operations Director, ",
    company: "PetCare",
    companyClass: "text-purple-300",
  },
  {
    text: "Their attention to detail and fast turnaround have made a real difference for our business.",
    name: "D. Jayasinghe",
    role: "CEO, ",
    company: "FreshFoods",
    companyClass: "text-orange-300",
  },
  {
    text: "Excellent customer support and top-notch packaging solutions. We trust them for every launch.",
    name: "R. Gunawardena",
    role: "Marketing Lead, ",
    company: "AquaPure",
    companyClass: "text-cyan-300",
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [start, setStart] = React.useState(0);
  const [anim, setAnim] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animate every 4s
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnim(true);
      setTimeout(() => {
        setStart((prev) => (prev + 1) % testimonials.length);
        setAnim(false);
      }, 600); // Animation duration
    }, 4000);
    return () => clearTimeout(timer);
  }, [start]);

  if (isMobile) {
    // Show only one testimonial at a time, stacked vertically
    return (
      <div className="relative flex flex-col items-center w-full px-2">
        <div className="w-full max-w-xs mx-auto">
          <TestimonialCard t={testimonials[start]} />
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${i === start ? 'bg-cyan-400' : 'bg-gray-400/40'} transition`}
              onClick={() => setStart(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop: 3-at-a-time animated carousel
  const indices = [0, 1, 2].map(i => (start + i) % testimonials.length);
  const incomingIdx = (start + 3) % testimonials.length;

  return (
    <div className="relative flex justify-center gap-8 min-h-[380px] w-full">
      {/* Outgoing (leftmost) */}
      <div
        className={`absolute left-0 top-0 transition-all duration-600 ${anim ? 'animate-tc-fade-left' : ''}`}
        style={{ width: '33.33%', zIndex: 7 }}
      >
        <TestimonialCard t={testimonials[indices[0]]} />
      </div>
      {/* Center */}
      <div
        className={`absolute left-[33.33%] top-0 transition-all duration-600 ${anim ? 'animate-tc-slide-left' : ''}`}
        style={{ width: '33.33%', zIndex: 8 }}
      >
        <TestimonialCard t={testimonials[indices[1]]} />
      </div>
      {/* Right */}
      <div
        className={`absolute left-[66.66%] top-0 transition-all duration-600 ${anim ? 'animate-tc-slide-left' : ''}`}
        style={{ width: '33.33%', zIndex: 9 }}
      >
        <TestimonialCard t={testimonials[indices[2]]} />
      </div>
      {/* Incoming (hidden unless animating) */}
      {anim && (
        <div
          className="absolute left-full top-0 animate-tc-slide-in transition-all duration-600"
          style={{ width: '33.33%', zIndex: 10 }}
        >
          <TestimonialCard t={testimonials[incomingIdx]} />
        </div>
      )}
      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 z-20" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.45) 70%, transparent 100%)'}} />
      <style>{`
        @keyframes tc-fade-left { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-60px); } }
        @keyframes tc-slide-left { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
        @keyframes tc-slide-in { from { opacity: 0; transform: translateX(0); } to { opacity: 1; transform: translateX(-100%); } }
        .animate-tc-fade-left { animation: tc-fade-left 0.6s forwards; }
        .animate-tc-slide-left { animation: tc-slide-left 0.6s forwards; }
        .animate-tc-slide-in { animation: tc-slide-in 0.6s forwards; }
      `}</style>
    </div>
  );
};

const TestimonialCard: React.FC<{ t: typeof testimonials[0] }> = ({ t }) => (
  <div className="relative flex flex-col items-center min-w-[320px] max-w-xl w-full mx-auto">
    {/* Card content with fixed height and hover group */}
    <div
      className="group rounded-3xl bg-black/70 shadow-xl p-8 flex flex-col items-center border border-cyan-900/40 w-full overflow-hidden z-10 transition-all duration-300"
      style={{ minHeight: '340px', maxHeight: '340px', height: '340px', borderBottomWidth: 0 }}
    >
      <div className="flex items-center gap-1 mb-4">
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
      </div>
      <p className="text-lg text-white text-center mb-6 italic">“{t.text}”</p>
      <div className="font-bold text-cyan-300 text-base">{t.name}</div>
      <div className="text-sm text-cyan-400">{t.role}<span className={`font-semibold ${t.companyClass}`}>{t.company}</span></div>
      {/* Neon cyan bottom border on hover */}
      {/* Neon effect only on hover */}
      <div
        className="pointer-events-none w-full mx-auto hidden group-hover:block transition-opacity duration-300"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '-8px',
          height: '14px',
          borderBottomLeftRadius: '1.5rem',
          borderBottomRightRadius: '1.5rem',
          background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.38) 0%, rgba(6,182,212,0.22) 40%, rgba(34,211,238,0.08) 70%, transparent 100%)',
          boxShadow: '0 0 12px 2px #22d3ee, 0 0 24px 6px #06b6d4',
          opacity: 0.85,
          zIndex: 1,
        }}
      />
      <style>{`
        .group:hover { border-bottom-width: 3px !important; border-bottom-color: #22d3ee !important; box-shadow: 0 4px 24px 0 #22d3ee44; }
      `}</style>
    </div>
  </div>
);