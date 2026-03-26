import { Linkedin, Github, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-gradient">RRR</span>
            <p className="text-sm text-muted-foreground">
              Full Stack Java Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
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

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Md. Rezaur Rahman Rasul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
