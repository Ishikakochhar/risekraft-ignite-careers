import {
  Brain,
  MessageSquare,
  BookOpen,
  Users,
  FileText,
  Briefcase,
  BarChart3,
  Code,
  Settings,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Programmes = () => {
  const modules = [
    { icon: Brain, title: 'Aptitude & Reasoning', color: 'text-primary' },
    { icon: MessageSquare, title: 'Verbal Ability', color: 'text-accent' },
    { icon: BookOpen, title: 'Soft Skills Training', color: 'text-primary' },
    { icon: Users, title: 'Group Discussions', color: 'text-accent' },
    { icon: MessageSquare, title: 'Interview Preparation', color: 'text-primary' },
    { icon: FileText, title: 'Resume & LinkedIn Optimization', color: 'text-accent' },
  ];

  const domains = [
    { icon: Users, title: 'Human Resources', description: 'HR Management & Talent Acquisition' },
    { icon: BarChart3, title: 'Finance', description: 'Financial Analysis & Management' },
    { icon: Briefcase, title: 'Marketing', description: 'Digital & Brand Marketing' },
    { icon: BarChart3, title: 'Analytics', description: 'Data Analytics & Business Intelligence' },
    { icon: Code, title: 'Information Technology', description: 'Software Development & Tech' },
    { icon: Settings, title: 'Operations', description: 'Supply Chain & Operations Management' },
  ];

  const specializations = [
    'Business Etiquette & Professional Communication',
    'Image Grooming & Corporate Dressing',
    'Advanced Excel & Data Analysis',
    'Tableau & Power BI Visualization',
    'Mock Group Discussions',
    'Full-length Mock Interviews',
  ];

  return (
    <section id="programmes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Training Programmes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive 98-100 hours of intensive training designed to make you industry-ready
          </p>
        </div>

        {/* Core Modules */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Core Training Modules</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-3 ${module.color}`}>
                  <module.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">{module.title}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Domain-Specific Masterclasses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Domain-Specific Masterclasses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    <domain.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{domain.title}</h4>
                    <p className="text-sm text-muted-foreground">{domain.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="bg-gradient-subtle rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Specializations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-medium">{spec}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Badge className="bg-primary/10 text-primary border-primary mb-4 px-6 py-2 text-lg">
              98-100 Hours of Comprehensive Training
            </Badge>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our structured curriculum combines theoretical knowledge with practical application,
              ensuring you're fully prepared for the corporate world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programmes;
