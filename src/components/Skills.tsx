import { useEffect, useRef, useState } from 'react';
import { Database, Server, Layout, Cloud, Code2, Settings } from 'lucide-react';

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
      color: 'primary',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 92 },
        { name: 'Microservices', level: 88 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      icon: Layout,
      title: 'Frontend Development',
      color: 'accent',
      skills: [
        { name: 'Angular', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 82 },
      ],
    },
    {
      icon: Database,
      title: 'Database & DevOps',
      color: 'primary',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Git', level: 88 },
        { name: 'Docker', level: 75 },
      ],
    },
  ];

  const technologies = [
    'Java', 'Spring Boot', 'Spring Framework', 'Hibernate', 'JPA',
    'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
    'REST APIs', 'Microservices', 'Microfrontend', 'Docker', 'Kubernetes',
    'Git', 'Maven', 'Gradle', 'Jenkins', 'AWS',
    'Agile', 'Scrum', 'JIRA', 'System Design'
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

        {/* Skill Categories with Progress Bars */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all duration-500 border-glow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center`}>
                  <category.icon className={`text-${category.color}`} size={24} />
                </div>
                <h3 className="font-bold text-lg font-display">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-8 font-display">Full Technology Arsenal</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/30 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;