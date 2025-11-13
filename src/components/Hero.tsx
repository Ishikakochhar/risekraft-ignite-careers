import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-students.jpg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [counts, setCounts] = useState({ recruiters: 0, training: 0, placement: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { recruiters: 100, training: 100, placement: 70 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        recruiters: Math.floor(targets.recruiters * progress),
        training: Math.floor(targets.training * progress),
        placement: Math.floor(targets.placement * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 z-10" />
        <img
          src={heroImage}
          alt="Professional students"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Transforming Students into{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Professionals
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
            Comprehensive Campus Recruitment Training with 98-100 hours of intensive coaching,
            domain-specific masterclasses, and guaranteed placement support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button
              size="lg"
              onClick={() => scrollToSection('colleges')}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 text-lg px-8 shadow-lg hover:shadow-glow transition-all"
            >
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('students')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
            >
              Student Registration
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl animate-fade-in-up">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">{counts.recruiters}+</div>
              </div>
              <p className="text-sm text-muted-foreground">Partner Recruiters</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent">{counts.training}hrs</div>
              </div>
              <p className="text-sm text-muted-foreground">Training Duration</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">{counts.placement}%+</div>
              </div>
              <p className="text-sm text-muted-foreground">6.5 LPA+ Offers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
