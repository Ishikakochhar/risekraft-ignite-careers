import { Building2, Users, Target, BarChart3, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Recruiters = () => {
  const domains = [
    { name: 'Marketing', icon: Target, color: 'text-primary' },
    { name: 'Finance', icon: BarChart3, color: 'text-accent' },
    { name: 'Human Resources', icon: Users, color: 'text-primary' },
    { name: 'Analytics', icon: BarChart3, color: 'text-accent' },
    { name: 'Operations', icon: Building2, color: 'text-primary' },
    { name: 'Information Technology', icon: Building2, color: 'text-accent' },
  ];

  const advantages = [
    {
      title: 'Pre-Screened Talent Pool',
      description:
        'Access to thoroughly trained and vetted candidates who are industry-ready from day one.',
    },
    {
      title: 'Domain-Specific Training',
      description:
        'Students trained in specific domains matching your hiring needs - from IT to Finance.',
    },
    {
      title: 'Soft Skills Excellence',
      description:
        'All candidates undergo rigorous communication, teamwork, and professional etiquette training.',
    },
    {
      title: 'Reduced Onboarding Time',
      description:
        'Hire professionals who require minimal training and can contribute immediately.',
    },
  ];

  const metrics = [
    { value: '1000+', label: 'Trained Students Annually' },
    { value: '98%', label: 'Placement Success Rate' },
    { value: '6+', label: 'Specialized Domains' },
    { value: '100hrs', label: 'Training Per Student' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="recruiters" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Recruiters'</span> Corner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hire job-ready professionals trained by industry experts across multiple domains
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card border-2 hover:border-primary/50 transition-all animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </Card>
          ))}
        </div>

        {/* Domains Available */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Available Talent Domains</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {domains.map((domain, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-3 ${domain.color}`}>
                  <domain.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">{domain.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Hire From Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Why Hire RiseKraft-Trained Students</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-semibold mb-3">{advantage.title}</h4>
                <p className="text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Highlights */}
        <div className="bg-card rounded-2xl p-8 sm:p-12 border-2 border-border shadow-lg mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Training Standards</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary mb-3">
                Technical Skills
              </Badge>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Domain-specific knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Advanced Excel, Tableau, Power BI</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Industry-relevant tools & technologies</span>
                </li>
              </ul>
            </div>
            <div>
              <Badge className="bg-accent/10 text-accent border-accent mb-3">
                Soft Skills
              </Badge>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Professional communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Team collaboration & leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Business etiquette & professionalism</span>
                </li>
              </ul>
            </div>
            <div>
              <Badge className="bg-primary/10 text-primary border-primary mb-3">
                Interview Ready
              </Badge>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Multiple mock interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Group discussion practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Company-specific preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Start Hiring Quality Talent</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with us to access our pool of trained professionals ready to make an immediate impact
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 text-lg px-8 shadow-lg hover:shadow-glow transition-all"
          >
            Schedule a Hiring Discussion
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
