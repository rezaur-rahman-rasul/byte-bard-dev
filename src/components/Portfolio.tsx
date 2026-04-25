import { ArrowUpRight, TrendingUp, Layers } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'VAT Management System',
      category: 'Financial Software',
      problem: 'Businesses faced compliance risks due to manual VAT calculations and fragmented reporting across departments.',
      solution: 'Created an automated VAT calculation and reporting engine ensuring full compliance with local tax regulations.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST API'],
      impact: ['Eliminated manual tax calculation errors', 'Automated compliant report generation', 'Centralized invoice & tax management'],
    },
    {
      title: 'Human Resource Management System',
      category: 'Enterprise HR',
      problem: 'HR teams managed employee data, payroll, and attendance across disconnected spreadsheets and legacy tools.',
      solution: 'Built a unified HR platform covering the full employee lifecycle — from onboarding to performance reviews.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST API'],
      impact: ['Unified employee data management', 'Automated payroll & attendance tracking', 'Data-driven performance evaluation'],
    },
    {
      title: 'Point of Sale',
      category: 'Retail Systems',
      problem: 'Retail teams needed fast billing, accurate inventory, and reliable reporting without manual reconciliation.',
      solution: 'Built a POS solution with real-time stock updates, role-based access, and sales insights for daily operations.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST API'],
      impact: ['Faster checkout and fewer billing errors', 'Real-time inventory synchronization', 'Daily sales reporting & audit trail'],
    },
    {
      title: 'Provident Fund Management System',
      category: 'Financial Software',
      problem: 'Organizations struggled to track contributions, interest, and employee balances across multiple policies and periods.',
      solution: 'Developed a provident fund platform for contribution management, interest calculation, and statement generation.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST API'],
      impact: ['Accurate contribution & interest calculations', 'Automated statements for employees', 'Transparent ledger and approvals workflow'],
    },
    {
      title: 'ERP System — Furniture Production',
      category: 'Enterprise ERP',
      problem: 'A furniture manufacturer struggled with disconnected production workflows, manual inventory tracking, and delayed order fulfillment.',
      solution: 'Built a comprehensive ERP platform that digitized the entire production lifecycle — from raw material procurement to finished goods delivery.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST API'],
      impact: ['Streamlined production planning across multiple units', 'Reduced manual inventory errors', 'Real-time order tracking & reporting dashboard'],
      featured: true,
    },
    {
      title: 'ERP System — Animal Feed',
      category: 'Enterprise ERP',
      problem: 'An animal feed manufacturer needed end-to-end visibility into batch production, quality control, and sales operations.',
      solution: 'Developed a microservices-based ERP handling batch management, automated quality checks, and integrated sales analytics.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Microservices'],
      impact: ['Automated batch tracking & quality control workflows', 'Integrated sales & production analytics', 'Scalable architecture supporting business growth'],
      featured: true,
    },
    {
      title: 'ERP System — Walton Group',
      category: 'Enterprise ERP',
      problem: 'Walton Group required a modular, enterprise-scale ERP capable of supporting multiple business units and evolving independently across departments — without monolithic bottlenecks or downtime during releases.',
      solution: 'Architected and built a distributed ERP platform for Walton Group using Spring Boot microservices, an API Gateway, service discovery, centralized authentication, and event-driven communication — paired with a microfrontend Angular shell for independent UI deployments.',
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Angular', 'Microfrontend', 'PostgreSQL', 'Docker', 'REST API'],
      impact: ['Independent service deployments with zero downtime', 'Horizontally scalable modules per business domain', 'Centralized auth & API gateway across all services', 'Microfrontend shell enabling parallel team delivery'],
      featured: true,
    },
  ];

  return (
    <section id="portfolio" className="py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="section-title mt-3">
            Real Problems.<br />
            <span className="text-gradient">Real Solutions.</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Enterprise systems I've built that power real businesses — each solving specific challenges with measurable impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group ${project.featured ? 'border-glow' : ''}`}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  {/* Left: Problem & Solution */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-lg">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">The Problem</span>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">My Solution</span>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary/50 text-muted-foreground border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Impact */}
                  <div className="lg:w-72 flex-shrink-0">
                    <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-primary" size={18} />
                        <span className="text-sm font-semibold text-primary">Impact & Results</span>
                      </div>
                      <ul className="space-y-3">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: '10+', label: 'Projects Delivered' },
            { value: '4+', label: 'Years in Production' },
            { value: '5+', label: 'ERP Systems Built' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/30"
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