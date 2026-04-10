import { ArrowRight, Download, Github, Linkedin, Mail, Code } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hello! I'm{' '}
              <span className="text-gradient">Reza</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 font-mono">
              Full Stack Java Developer
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Specializing in scalable enterprise applications with{' '}
              <span className="text-foreground font-medium">Angular</span>,{' '}
              <span className="text-foreground font-medium">Spring Boot</span>,{' '}
              <span className="text-foreground font-medium">Microservices</span>, and{' '}
              <span className="text-foreground font-medium">PostgreSQL</span>.
              Passionate about writing clean, efficient code and solving complex technical challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <a href="#portfolio" className="btn-primary text-sm sm:text-base">
                View Portfolio
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-outline text-sm sm:text-base">
                Contact Me
                <Mail size={18} />
              </a>
              <a
                href="/Rezaur_Rahman_Resume_Updated.pdf"
                download
                className="btn-outline text-sm sm:text-base"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/md-rezaur-rahman-rasul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/rezaur-rahman-rasul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:md.rezaur.rahman.rasul@gmail.com"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://leetcode.com/u/russellruosuull/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Code size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 glow-effect">
                <img
                  src={profilePhoto}
                  alt="Md. Rezaur Rahman Rasul"
                  className="w-full h-full object-cover object-[center_50%]"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute right-0 sm:-right-4 top-1/4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-card border border-border/50 shadow-lg animate-float">
                <span className="text-xs sm:text-sm font-mono text-primary">4+ Years</span>
              </div>
              <div className="absolute left-0 sm:-left-4 bottom-1/4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-card border border-border/50 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xs sm:text-sm font-mono text-accent">Java Expert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Tech Stack */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 overflow-x-auto scrollbar-hide">
            <span className="text-sm text-muted-foreground whitespace-nowrap">Tech Stack:</span>
            <div className="flex gap-3 sm:gap-6 animate-pulse-slow overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
              {['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Microservices', 'Microfrontend', 'REST APIs', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/50 border border-border/50 text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap"
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
