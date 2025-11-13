import { Briefcase, TrendingUp, Building2, Target, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import abstractBg from '@/assets/abstract-bg.jpg';

const Placements = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'End-to-End Placement Support',
      description:
        'Complete assistance for summer internships and final placements, from application to offer letter.',
    },
    {
      icon: Building2,
      title: 'Recruiter Network',
      description:
        'Access to 100+ partner companies with 40-50 new recruiters added annually across diverse industries.',
    },
    {
      icon: Target,
      title: 'Job Description Analysis',
      description:
        'Expert evaluation and guidance to help you understand and prepare for specific role requirements.',
    },
    {
      icon: CheckCircle2,
      title: 'Company-Specific Training',
      description:
        'Customized training sessions tailored to requirements of specific companies and job roles.',
    },
  ];

  const stats = [
    { value: '70%+', label: 'Students with 6.5 LPA+ offers' },
    { value: '100+', label: 'Partner Recruiters' },
    { value: '40-50', label: 'New Recruiters Annually' },
    { value: '98%', label: 'Placement Success Rate' },
  ];

  return (
    <section id="placements" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/95 z-10" />
        <img src={abstractBg} alt="" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Placement <span className="bg-gradient-primary bg-clip-text text-transparent">Assistance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive placement support to ensure your successful transition from campus to corporate
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card/80 backdrop-blur-sm border-2 hover:border-primary/50 transition-all animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground flex-shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Placement Process */}
        <div className="bg-card rounded-2xl p-8 sm:p-12 border-2 border-border shadow-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Placement Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Pre-Placement Training</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive skill development and interview preparation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Company Matching</h4>
              <p className="text-sm text-muted-foreground">
                Connect with recruiters aligned to your skills and career goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Ongoing Support</h4>
              <p className="text-sm text-muted-foreground">
                Continuous guidance through interviews until final offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
