import { useEffect, useRef, useState } from 'react';
import { Briefcase, Building2 } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const roles = [
    {
      title: 'Java Developer',
      company: 'Walton Group',
      current: true,
    },
    {
      title: 'Software Developer',
      company: 'Progeny Technologies',
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-28 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Experience</span>
          <h2 className="section-title mt-3">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Building enterprise software across leading product and service companies
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className={`relative flex gap-4 sm:gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon node */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10 backdrop-blur-sm">
                    <Briefcase className="text-primary" size={20} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all duration-500 border-glow">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display">{role.title}</h3>
                      <div className="flex items-center gap-2 mt-1.5 text-muted-foreground">
                        <Building2 size={14} className="text-primary" />
                        <span className="text-sm font-medium">{role.company}</span>
                      </div>
                    </div>
                    {role.current && (
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;