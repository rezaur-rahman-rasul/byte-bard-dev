import { ArrowRight, Download, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Open to new opportunities</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              I build{' '}
              <span className="text-gradient">enterprise</span>
              <br />
              systems that{' '}
              <span className="text-gradient-accent">scale.</span>
            </h1>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              <span className="text-foreground font-semibold">Md. Rezaur Rahman Rasul</span> — Full Stack Java Developer with 4+ years 
              of crafting production-grade ERP systems, microservices architectures, and enterprise solutions 
              that power real businesses.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              From furniture production to animal feed manufacturing — I've built systems that manage 
              <span className="text-primary font-medium"> millions in transactions</span>, streamline complex workflows, 
              and deliver measurable business impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <a href="#portfolio" className="btn-primary text-sm sm:text-base">
                See My Work
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-outline text-sm sm:text-base">
                Let's Talk
                <Mail size={18} />
              </a>
              <a
                href="/Rezaur_Rahman_Resume.pdf"
                download="Rezaur_Rahman_Resume.pdf"
                className="btn-outline text-sm sm:text-base"
              >
                Resume
                <Download size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-sm text-muted-foreground">Connect →</span>
              <div className="flex gap-3">
                {[
                  { href: 'https://linkedin.com/in/md-rezaur-rahman-rasul', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://github.com/rezaur-rahman-rasul', icon: Github, label: 'GitHub' },
                  { href: 'mailto:md.rezaur.rahman.rasul@gmail.com', icon: Mail, label: 'Email' },
                  { href: 'https://leetcode.com/u/russellruosuull/', icon: Code, label: 'LeetCode' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl scale-125" />
              
              {/* Image container */}
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/20 glow-effect">
                <img
                  src={profilePhoto}
                  alt="Md. Rezaur Rahman Rasul - Full Stack Java Developer"
                  className="w-full h-full object-cover object-[center_50%]"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute right-0 sm:-right-6 top-1/4 px-4 py-2.5 rounded-xl glass-card shadow-lg animate-float">
                <span className="text-xs sm:text-sm font-mono text-primary font-semibold">10+ Projects</span>
              </div>
              <div className="absolute left-0 sm:-left-6 bottom-1/4 px-4 py-2.5 rounded-xl glass-card shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xs sm:text-sm font-mono text-accent font-semibold">ERP Expert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 sm:mt-20 pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <span className="text-xs text-muted-foreground uppercase tracking-widest whitespace-nowrap font-mono">Core Stack</span>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
              {['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Microservices', 'Microfrontend', 'REST APIs', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-secondary/40 border border-border/30 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;