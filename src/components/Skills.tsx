import { useEffect, useRef, useState } from 'react';
import { Database, Server, Layout } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Microservices', 'REST APIs', 'Hibernate', 'JPA'],
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Microfrontend'],
    },
    {
      icon: Database,
      title: 'Database & DevOps',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis Caching', 'Docker', 'Grafana', 'Prometheus', 'Git'],
    },
  ];

  const technologies = [
    { category: 'Languages', items: ['Java', 'TypeScript', 'JavaScript'] },
    { category: 'Frameworks', items: ['Spring Boot', 'Spring Framework', 'Spring Security', 'Angular', 'Hibernate', 'JPA'] },
    { category: 'Security', items: ['Spring Security', 'JWT', 'OAuth2'] },
    { category: 'Architecture', items: ['Microservices', 'Microfrontend', 'REST APIs', 'System Design'] },
    { category: 'Databases & Caching', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis Caching'] },
    { category: 'DevOps & Monitoring', items: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Git', 'Grafana', 'Prometheus'] },
    { category: 'Frontend Tools', items: ['Tailwind CSS', 'HTML5', 'CSS3', 'Maven', 'Gradle'] },
    { category: 'Methodology', items: ['Agile', 'Scrum', 'JIRA'] },
  ];

  return (
    <section id="skills" className="py-28 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Skills & Expertise</span>
          <h2 className="section-title mt-3">
            Battle-Tested <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Skills honed through building production-grade enterprise systems — not just tutorials
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all duration-500 border-glow ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg font-display">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-lg bg-secondary/60 border border-border/30 text-sm font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Arsenal - Grouped */}
        <div>
          <h3 className="text-xl font-bold mb-10 font-display text-center">
            Complete <span className="text-gradient">Tech Stack</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {technologies.map((group, index) => (
              <div key={index} className="space-y-3">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">{group.category}</span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-xl bg-secondary/40 border border-border/30 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
