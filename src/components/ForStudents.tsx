import { Rocket, Award, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ForStudents = () => {
  const reasons = [
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description:
        'Fast-track your career with industry-relevant skills and direct access to top recruiters.',
    },
    {
      icon: Award,
      title: 'Professional Certification',
      description:
        'Earn recognized certifications that add significant value to your resume and LinkedIn profile.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description:
        'Learn from IIM/IIT faculty and corporate mentors with decades of industry experience.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Success Rate',
      description:
        '70%+ of our students secure offers above 6.5 LPA, with continuous career support.',
    },
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      college: 'AKGEC',
      package: '7.5 LPA',
      company: 'TCS Digital',
      quote: 'The training gave me the confidence to crack interviews at top companies.',
    },
    {
      name: 'Rahul Verma',
      college: 'IMS Ghaziabad',
      package: '8 LPA',
      company: 'Cognizant',
      quote: 'Domain-specific training helped me stand out from other candidates.',
    },
    {
      name: 'Ananya Gupta',
      college: 'KIET',
      package: '9 LPA',
      company: 'Wipro',
      quote: 'The mock interviews and GD sessions were invaluable in my preparation.',
    },
  ];

  const benefits = [
    'Comprehensive 98-100 hours training',
    'Resume & LinkedIn profile optimization',
    'Domain-specific masterclasses',
    'Mock GDs and interviews',
    'Summer internship support',
    'Final placement assistance',
    'Industry certification',
    'Lifetime alumni network access',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="students" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            For <span className="bg-gradient-primary bg-clip-text text-transparent">Students</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform yourself into an industry-ready professional and land your dream job
          </p>
        </div>

        {/* Why Join Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto w-14 h-14 flex items-center justify-center bg-gradient-primary rounded-lg mb-4 text-primary-foreground">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-2 animate-fade-in hover:shadow-lg transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg">{story.name}</h4>
                    <Badge className="bg-primary/10 text-primary border-primary">
                      {story.package}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{story.college}</p>
                  <p className="text-sm font-medium text-accent">{story.company}</p>
                </div>
                <p className="text-sm text-muted-foreground italic">"{story.quote}"</p>
              </Card>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-gradient-subtle rounded-2xl p-8 sm:p-12 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">What You Get</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration CTA */}
        <div className="bg-card rounded-2xl p-8 sm:p-12 border-2 border-border shadow-lg text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of students who have successfully launched their careers with RiseKraft.
              Register now and take the first step towards your dream job.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 text-lg px-8 shadow-lg hover:shadow-glow transition-all"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Limited seats available • Early bird discount applicable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStudents;
