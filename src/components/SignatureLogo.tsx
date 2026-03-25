import { useEffect, useState } from 'react';

const SignatureLogo = () => {
  const text = "Rezaur Rahman Rasul";
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          setHasAnimated(true);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  return (
    <a href="#home" className="block relative overflow-hidden">
      <span
        className="text-xl md:text-2xl text-gradient whitespace-nowrap"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontWeight: 700,
          letterSpacing: '0.02em',
        }}
      >
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="inline-block transition-all duration-300"
            style={{
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? 'translateY(0)' : 'translateY(8px)',
              transitionDelay: `${i * 20}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      {/* Signature underline */}
      <span
        className="absolute bottom-0 left-0 h-[1.5px] bg-primary transition-all duration-700 ease-out"
        style={{
          width: visibleCount >= text.length ? '100%' : '0%',
          transitionDelay: '200ms',
        }}
      />
    </a>
  );
};

export default SignatureLogo;
