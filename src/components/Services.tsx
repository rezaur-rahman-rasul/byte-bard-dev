import { Layout, Server, Database, Cloud, Code2, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Building responsive, modern web interfaces using Angular and TypeScript with clean architecture and optimal performance.',
      features: ['Angular Applications', 'Responsive Design', 'UI/UX Implementation', 'Performance Optimization'],
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Spring Boot, implementing RESTful APIs and microservices architecture.',
      features: ['Spring Boot APIs', 'Microservices', 'Authentication', 'Business Logic'],
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing and optimizing database schemas for PostgreSQL and MySQL with focus on performance and scalability.',
      features: ['Schema Design', 'Query Optimization', 'Data Migration', 'Backup Strategies'],
    },
    {
      icon: Cloud,
      title: 'System Architecture',
      description: 'Architecting scalable, maintainable systems using best practices in microservices and distributed computing.',
      features: ['Microservices Design', 'API Gateway', 'Load Balancing', 'Scalability Planning'],
    },
    {
      icon: Code2,
      title: 'API Development',
      description: 'Creating secure, well-documented RESTful APIs with proper authentication and error handling mechanisms.',
      features: ['REST API Design', 'API Documentation', 'Security Implementation', 'Versioning'],
    },
    {
      icon: Settings,
      title: 'DevOps & Integration',
      description: 'Implementing CI/CD pipelines, containerization with Docker, and seamless deployment workflows.',
      features: ['Docker Setup', 'CI/CD Pipelines', 'Cloud Deployment', 'Monitoring'],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// SERVICES</span>
          <h2 className="section-title mt-2">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Comprehensive development services focused on building enterprise-grade applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
