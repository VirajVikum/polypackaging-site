import React from 'react';

export type Highlight = {
  start: number;
  end: number;
  className: string;
};

type RichTypewriterProps = {
  text: string;
  highlights: Highlight[];
  speed?: number;
  className?: string;
};

export const RichTypewriter: React.FC<RichTypewriterProps> = ({ text, highlights, speed = 18, className }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(0);
    if (!text) return;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  // Build segments with highlights
  const segments: React.ReactNode[] = [];
  let i = 0;
  while (i < count) {
    // Find highlight that starts at i
    const hl = highlights.find(h => h.start === i);
    if (hl && hl.end <= count) {
      segments.push(
        <span key={i} className={hl.className}>{text.slice(hl.start, hl.end)}</span>
      );
      i = hl.end;
    } else {
      // Find next highlight or end
      const nextHl = highlights.find(h => h.start > i);
      const end = nextHl ? Math.min(nextHl.start, count) : count;
      if (end > i) {
        segments.push(
          <span key={i}>{text.slice(i, end)}</span>
        );
      }
      i = end;
    }
  }

  return <span className={className}>{segments}</span>;
};
