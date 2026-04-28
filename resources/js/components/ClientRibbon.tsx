import React from "react";

const clientImages = [
  "a.png",
  "a - Copy.png",
  "d.png",
  "d - Copy.png",
  "g.png",
  "g - Copy.png",
  "jkj.png",
  "ng.png",
  "ng - Copy.png",
  "sd.png",
  "sd - Copy.png",
  "4.png",
];

export const ClientRibbon: React.FC = () => {
  // Duplicate images for seamless loop
  const images = [...clientImages, ...clientImages];
  return (
    <div className="relative w-full overflow-hidden py-6 bg-transparent flex flex-col gap-4">
      {/* Row 1: scrolls left */}
      <div
        className="flex items-center gap-10 animate-client-ribbon"
        style={{
          animation: "client-ribbon-scroll 24s linear infinite",
        }}
      >
        {images.map((img, i) => (
          <img
            key={"left-" + i}
            src={`/images/clients/${img}`}
            alt="Client logo"
            className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition duration-200 drop-shadow-lg"
            draggable={false}
          />
        ))}
      </div>
      {/* Row 2: scrolls right */}
      <div
        className="flex items-center gap-10 animate-client-ribbon-reverse"
        style={{
          animation: "client-ribbon-scroll-reverse 28s linear infinite",
        }}
      >
        {images.map((img, i) => (
          <img
            key={"right-" + i}
            src={`/images/clients/${img}`}
            alt="Client logo"
            className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition duration-200 drop-shadow-lg"
            draggable={false}
          />
        ))}
      </div>
      <style>{`
        @keyframes client-ribbon-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes client-ribbon-scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-client-ribbon, .animate-client-ribbon-reverse {
          min-width: 200%;
        }
      `}</style>
    </div>
  );
};
