import React from 'react';

type TypewriterProps = {
  text: string;
  speed?: number; // ms per character
  className?: string;
};

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 30, className }) => {
  const [displayed, setDisplayed] = React.useState('');
  const index = React.useRef(0);

  React.useEffect(() => {
    setDisplayed('');
    index.current = 0;
    if (!text) return;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index.current]);
      index.current++;
      if (index.current >= text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}</span>;
};
