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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome!</DialogTitle>
          <DialogDescription>
            We’re glad to have you here. Here’s what’s new:
          </DialogDescription>
        </DialogHeader>
        <ul className="mt-4 space-y-2">
          {mockNews.map((news) => (
            <li key={news.id} className="border-b pb-2 last:border-b-0 last:pb-0">
              <div className="font-medium">{news.title}</div>
              <div className="text-xs text-muted-foreground">{news.date}</div>
            </li>
          ))}
        </ul>
        <DialogClose className="mt-6 w-full rounded bg-primary text-white py-2 font-semibold hover:bg-primary/90">Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
