import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:md.rezaur.rahman.rasul@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1715940317',
      href: 'tel:+8801715940317',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'md.rezaur.rahman.rasul@gmail.com',
      href: 'mailto:md.rezaur.rahman.rasul@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'md-rezaur-rahman-rasul',
      href: 'https://linkedin.com/in/md-rezaur-rahman-rasul',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'rezaur-rahman-rasul',
      href: 'https://github.com/rezaur-rahman-rasul',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// GET IN TOUCH</span>
          <h2 className="section-title mt-2">
            Say Hi! <span className="text-gradient">and tell me about your idea</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind? Let's discuss how I can help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, challenging projects, 
              or even just a friendly chat about technology and development.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">{info.label}</span>
                    <span className="font-medium group-hover:text-primary transition-colors text-sm sm:text-base break-all sm:break-normal">{info.value}</span>
                  </div>
                  <ArrowRight size={18} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-border/50">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full justify-center">
                Submit your message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
