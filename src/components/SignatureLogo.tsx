import { useEffect, useState } from 'react';

const SignatureLogo = () => {
  const text = "Rezaur Rahman Rasul";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < text.length) {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }

    const restart = setTimeout(() => {
      setVisibleCount(0);
    }, 30000);
    return () => clearTimeout(restart);
  }, [visibleCount, text.length]);

  return (
    <a href="#home" className="block relative">
      <span
        className="text-xl md:text-2xl text-gradient font-bold whitespace-nowrap"
        style={{
          fontFamily: "'Dancing Script', 'Georgia', cursive",
          letterSpacing: '0.02em',
        }}
      >
        {text.split('').map((char, i) => (
          <span
            key={i}
            style={{
              opacity: i < visibleCount ? 1 : 0,
              display: 'inline-block',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              transform: i < visibleCount ? 'translateY(0)' : 'translateY(8px)',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      <span
        className="absolute bottom-0 left-0 h-[1.5px]"
        style={{
          width: visibleCount >= text.length ? '100%' : '0%',
          transition: 'width 0.7s ease-out 0.2s',
          backgroundImage: 'var(--gradient-primary)',
        }}
      />
    </a>
  );
};

export default SignatureLogo;
