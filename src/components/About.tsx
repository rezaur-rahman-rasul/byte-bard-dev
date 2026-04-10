import { Briefcase, GraduationCap, Target, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      company: 'Walton',
      position: 'Software Developer',
      period: 'Present',
      description: 'Leading development of large-scale ERP systems using Angular + Spring Boot + Groovy on Grails, serving enterprise clients with production-critical software.',
      impact: 'Built 5+ enterprise modules handling real-time production data',
    },
    {
      company: 'Progeny Technologies',
      position: 'Java Developer',
      period: 'Previous',
      description: 'Developed robust backend systems using JSP & Servlet architecture, focusing on reliable data processing and business logic implementation.',
      impact: 'Delivered systems serving multiple business units',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: "I don't just write code — I analyze business problems and architect solutions that deliver real ROI.",
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Every system I build is optimized for speed, scalability, and maintainability from day one.',
    },
    {
      icon: TrendingUp,
      title: 'Impact Driven',
      description: 'My work has streamlined production workflows, reduced manual processes, and saved hundreds of hours.',
    },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
          <h2 className="section-title mt-3">
            Not Just a Developer —<br />
            <span className="text-gradient">A Solution Architect</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            I transform complex business requirements into elegant, scalable enterprise systems
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all duration-500 group border-glow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <value.icon className="text-primary" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-display">My Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              With <span className="text-foreground font-semibold">4+ years of hands-on experience</span> in 
              enterprise Java development, I've built systems that real businesses depend on every day — from 
              <span className="text-primary font-medium"> ERP platforms managing production lines</span> to 
              <span className="text-primary font-medium"> financial systems ensuring tax compliance</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              My expertise spans the full stack: designing microservices architectures with Spring Boot, 
              building responsive frontends with Angular, optimizing PostgreSQL databases for high-throughput 
              workloads, and deploying containerized applications with Docker.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              What sets me apart? I don't just code features — I understand business context, anticipate 
              scaling challenges, and build systems that grow with the organization.
            </p>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Education</h4>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Professional Diploma in Java Enterprise Development</h4>
                  <p className="text-sm text-muted-foreground">1.5 Years Intensive Program</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/30">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bachelor of Business Administration (BBA)</h4>
                  <p className="text-sm text-muted-foreground">Business Foundation + Technical Expertise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-display flex items-center gap-3">
              <Briefcase className="text-primary" size={24} />
              Career Journey
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-border/30 last:border-l-transparent last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="p-5 rounded-2xl bg-card border border-border/30 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg">{exp.position}</h4>
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-lg">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <div className="flex items-center gap-2 text-xs text-primary/80 font-mono bg-primary/5 px-3 py-2 rounded-lg">
                      <TrendingUp size={14} />
                      {exp.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-10">
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Shipped' },
                { value: '5+', label: 'ERP Systems Built' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-5 rounded-2xl bg-card border border-border/30">
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
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