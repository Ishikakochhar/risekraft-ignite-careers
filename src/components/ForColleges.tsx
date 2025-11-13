import { GraduationCap, Calendar, Handshake, Trophy, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ForColleges = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Placement Readiness Guarantee',
      description:
        '100% placement-ready students through our proven training methodology and comprehensive curriculum.',
    },
    {
      icon: Calendar,
      title: 'Customized Training Calendar',
      description:
        'Flexible scheduling tailored to your academic calendar ensuring minimal disruption to regular classes.',
    },
    {
      icon: Handshake,
      title: 'Industry Tie-ups',
      description:
        'Access to our extensive network of 100+ recruiters and dedicated placement drives for your students.',
    },
    {
      icon: Trophy,
      title: 'Enhanced College Reputation',
      description:
        'Improve placement statistics and college rankings with our track record of successful placements.',
    },
  ];

  const testimonials = [
    {
      college: 'AKGEC, Greater Noida',
      quote:
        'RiseKraft transformed our placement outcomes. The training quality and recruiter network are exceptional.',
      person: 'Dr. Rajesh Kumar, Placement Director',
    },
    {
      college: 'IMS Ghaziabad',
      quote:
        'Professional approach and results-oriented training. Our students are now competing with the best.',
      person: 'Prof. Anjali Sharma, Training Coordinator',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="colleges" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Partner <span className="bg-gradient-primary bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elevate your institution's placement record with our comprehensive training programs
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground flex-shrink-0">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Partnership Features */}
        <div className="bg-card rounded-2xl p-8 sm:p-12 border-2 border-border shadow-lg mb-16">
          <h3 className="text-2xl font-bold mb-8">What We Offer</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>98-100 hours</strong> of comprehensive training modules
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Domain-specific</strong> masterclasses across 6 major fields
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Expert faculty</strong> from IIMs, IITs, and corporate backgrounds
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Regular placement drives</strong> with top recruiters
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Progress tracking</strong> and detailed performance reports
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Post-training support</strong> and continuous mentorship
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">What Our Partner Colleges Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-primary/30"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L12 22h6v-6l-2.343 2.343C14.828 17.515 14 15.828 14 14c0-2.21 1.79-4 4-4V8c-3.314 0-6 2.686-6 6 0 1.657.672 3.157 1.757 4.243L12 22H6v-6l2.343-2.343C7.515 12.828 6 11.141 6 9.5 6 7.015 8.015 5 10.5 5V8z" />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.person}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.college}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 text-lg px-8 shadow-lg hover:shadow-glow transition-all"
          >
            Schedule a Partnership Discussion
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForColleges;
