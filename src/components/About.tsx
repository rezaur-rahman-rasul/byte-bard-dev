import { Briefcase, GraduationCap, Code2, Target } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: 'Current Role',
      position: 'Full Stack Java Developer',
      period: 'Present',
      description: 'Building scalable Angular-Spring Boot enterprise applications',
    },
    {
      company: 'Walton',
      position: 'Software Developer',
      period: 'Previous',
      description: 'Angular + Spring Boot + Groovy on Grails development',
    },
    {
      company: 'Progeny Technologies',
      position: 'Java Developer',
      period: 'Previous',
      description: 'JSP & Servlet backend development',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// ABOUT ME</span>
          <h2 className="section-title mt-2">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Experienced Java Developer with over <span className="text-foreground font-medium">4 years of expertise</span> in 
              designing, developing, and maintaining robust, scalable enterprise applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Proficient in the Java ecosystem including Spring/Spring Boot, REST APIs, microservices architecture, 
              and database design. Passionate about writing clean, efficient code, solving complex technical challenges, 
              and following best practices in Agile environments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Continuously evolving with emerging technologies to deliver high-impact solutions that drive business success.
            </p>

            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Professional Diploma in Java Enterprise Development</h4>
                  <p className="text-sm text-muted-foreground">1.5 Years Intensive Program</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bachelor of Business Administration (BBA)</h4>
                  <p className="text-sm text-muted-foreground">Foundational Business Degree</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="text-primary" size={20} />
              Career Journey
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-border/50 last:border-l-transparent last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{exp.position}</h4>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Completed' },
                { value: '5+', label: 'Technologies Mastered' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
