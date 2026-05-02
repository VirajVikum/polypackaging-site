import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";

// TODO: Replace with real news fetching logic
const mockNews = [
  { id: 1, title: "Welcome to our new site!", date: "2026-04-28" },
  { id: 2, title: "New product line launched.", date: "2026-04-20" },
];

export default function GreetingNewsModal({ forceShow = false }: { forceShow?: boolean } = {}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (forceShow) {
      setOpen(true);
      return;
    }
    // Show modal only on first visit (per session)
    if (!sessionStorage.getItem("greeting_shown")) {
      setOpen(true);
      sessionStorage.setItem("greeting_shown", "1");
    }
  }, [forceShow]);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-5 sm:p-8">
        <DialogHeader>
          <DialogTitle>Welcome!</DialogTitle>
          <DialogDescription>
            We’re glad to have you here.
          </DialogDescription>
        </DialogHeader>
        {/* <ul className="mt-4 space-y-2">
          {mockNews.map((news) => (
            <li key={news.id} className="border-b pb-2 last:border-b-0 last:pb-0">
              <div className="font-medium">{news.title}</div>
              <div className="text-xs text-muted-foreground">{news.date}</div>
            </li>
          ))}
        </ul> */}
        {/* Landing Modal Image Slider */}
        {mounted && <ImageSlider />}
        <DialogClose className="mt-6 w-full rounded bg-primary text-white py-2 font-semibold hover:bg-primary/90">Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
}

// Simple image slider for landing-modal images
const landingModalImages = [
  {
    src: "/images/landing-modal/Recycle.png",
    alt: "Eco Friendly Recycling",
  },
  {
    src: "/images/landing-modal/new-year.png",
    alt: "New Year Celebration",
  },
  {
    src: "/images/landing-modal/vesak.png",
    alt: "Vesak Festival",
  },
];

function ImageSlider() {
  const [index, setIndex] = React.useState(0);
  const total = landingModalImages.length;

  // Auto-slide every 3 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 mb-2">
      <div className="relative w-48 h-48 sm:w-80 sm:h-80">
        <img
          src={landingModalImages[index].src}
          alt={landingModalImages[index].alt}
          className="w-full h-full object-contain drop-shadow-lg max-w-full rounded transition-all duration-500"
          loading="lazy"
        />
        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-xl px-2 py-1 rounded-full shadow border border-gray-200"
          aria-label="Previous image"
          style={{ zIndex: 2 }}
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-xl px-2 py-1 rounded-full shadow border border-gray-200"
          aria-label="Next image"
          style={{ zIndex: 2 }}
        >
          ›
        </button>
      </div>
      {/* Dots indicator */}
      <div className="flex gap-2 mt-2">
        {landingModalImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-primary' : 'bg-gray-300'} transition-colors`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
