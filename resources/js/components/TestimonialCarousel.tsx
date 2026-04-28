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
  const [isFading, setIsFading] = React.useState(false);
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
      setIsFading(true);
      setTimeout(() => {
        setStart((prev) => (prev + 1) % testimonials.length);
        setIsFading(false);
      }, 500);
    }, 4000);
    return () => clearTimeout(timer);
  }, [start]);

  // Show only one testimonial at a time (both mobile and desktop)
  return (
    <div className="relative flex flex-col items-center w-full px-2 min-h-95 overflow-hidden">
      <div className={`w-full max-w-xl mx-auto transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        <TestimonialCard t={testimonials[start]} />
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === start ? 'bg-red-400' : 'bg-gray-400/40'} transition`}
            onClick={() => setStart(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

const TestimonialCard: React.FC<{ t: typeof testimonials[0] }> = ({ t }) => (
  <div className="relative flex flex-col items-center min-w-[320px] max-w-xl w-full mx-auto">
    {/* Card content with fixed height and hover group */}
    <div
      className="group rounded-3xl bg-white shadow-xl p-8 flex flex-col items-center border border-red-200 w-full overflow-hidden z-10 transition-all duration-300"
      style={{ minHeight: '340px', maxHeight: '340px', height: '340px', borderBottomWidth: 0 }}
    >
      <div className="flex items-center gap-1 mb-4">
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="text-yellow-400 text-2xl">★</span>
      </div>
      <p className="text-lg text-black text-center mb-6 italic">“{t.text}”</p>
      <div className="font-bold text-red-600 text-base">{t.name}</div>
      <div className="text-sm text-black">{t.role}<span className="font-semibold text-red-600">{t.company}</span></div>

    </div>
  </div>
);