import { Award, FileText, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Thanks Letter & Financial Reward — VAT Software Deployment',
      issuer: 'Walton Digitech Industries Ltd.',
      date: 'March 2025',
      description:
        'Formal recognition and financial reward for successful full-stack deployment of the Pai Pai VAT software system — backend, frontend, reports and data migration.',
      pdfUrl: '/achievements/walton-vat-thanks-letter.png',
    },
    {
      title: 'Diploma in Enterprise Systems Analysis & Design with J2EE',
      issuer: 'IsDB-BISEW (IT Scholarship Programme)',
      date: 'December 2022',
      description:
        '1060-hour professional diploma course (Round-46) covering Java, J2EE, Spring, Hibernate, Oracle, UML, Servlets/JSP, Angular and Android — completed under the IsDB-BISEW IT Scholarship Programme.',
      pdfUrl: '/achievements/isdb-bisew-diploma-j2ee.jpeg',
    },
  ];

  const handleOpenPdf = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">// ACHIEVEMENTS</span>
          <h2 className="section-title mt-2">
            Certifications & <span className="text-gradient">Awards</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Professional certifications and recognitions earned throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              onClick={() => handleOpenPdf(achievement.pdfUrl)}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-primary" size={28} />
                </div>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
              </div>

              <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-primary font-medium">{achievement.issuer}</span>
                <span className="text-muted-foreground text-xs">•</span>
                <span className="text-sm text-muted-foreground">{achievement.date}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {achievement.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                <FileText size={16} />
                <span>View Certificate</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Click on any achievement to view the certificate PDF
        </p>
      </div>
    </section>
  );
};

export default Achievements;
