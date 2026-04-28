import React from "react";

const fullText = `At Polypackaging, we combine decades of expertise, state-of-the-art technology, and a passion for quality to deliver packaging solutions that help your brand stand out. Our ISO-certified processes, eco-friendly materials, and dedicated support team ensure your products are protected, sustainable, and ready for market success. Choose us for reliability, innovation, and a partnership that puts your needs first—every time.`;

export const WhyChooseUsParagraph: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto rounded-3xl p-8 flex flex-col items-center transition-all duration-300 group border-2 border-transparent hover:border-red-400 hover:shadow-[0_0_16px_2px_#f54f43]">
      <p className="text-lg md:text-xl text-center text-(--foreground) font-medium leading-relaxed mb-8">
        {fullText}
      </p>
      <button
        className="px-7 py-2.5 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white font-bold shadow-lg hover:from-red-500 hover:to-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 text-base tracking-wide"
        // TODO: Add routing/navigation here in the future
        type="button"
      >
        Learn More
      </button>
    </div>
  );
};