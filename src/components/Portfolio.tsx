import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'ERP System - Furniture Production',
      category: 'Enterprise Application',
      description: 'Comprehensive ERP solution for managing furniture production workflows, inventory, and supply chain operations.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST API'],
      features: ['Production Planning', 'Inventory Management', 'Order Processing', 'Reporting Dashboard'],
    },
    {
      title: 'ERP System - Animal Feed Production',
      category: 'Enterprise Application',
      description: 'End-to-end ERP platform for animal feed manufacturing companies with batch processing and quality control.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Microservices'],
      features: ['Batch Management', 'Quality Control', 'Sales Tracking', 'Production Analytics'],
    },
    {
      title: 'VAT Management System',
      category: 'Financial Software',
      description: 'Automated VAT calculation and reporting system ensuring compliance with local tax regulations.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST API'],
      features: ['Tax Calculation', 'Report Generation', 'Compliance Tracking', 'Invoice Management'],
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'Full-featured e-commerce solution with product management, cart functionality, and payment integration.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Redis'],
      features: ['Product Catalog', 'Shopping Cart', 'Order Management', 'Payment Gateway'],
    },
    {
      title: 'Chemical Management System',
      category: 'Industry Solution',
      description: 'Specialized system for tracking chemical inventory, safety compliance, and usage documentation.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      features: ['Inventory Tracking', 'Safety Compliance', 'Usage Reports', 'Alerts System'],
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// PORTFOLIO</span>
          <h2 className="section-title mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of enterprise applications I've built, demonstrating my expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary transition-colors" 
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="text-xs text-muted-foreground"
                    >
                      {feature}{featureIndex < project.features.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-6 pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10+', label: 'Projects Delivered' },
            { value: '4+', label: 'Years Experience' },
            { value: '5+', label: 'ERP Systems' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
