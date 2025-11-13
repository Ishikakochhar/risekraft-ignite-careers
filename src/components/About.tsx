import { Target, Eye, Users, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To bridge the gap between academic excellence and industry readiness, empowering students with the skills and confidence needed to excel in their professional careers.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To become India\'s leading campus recruitment training partner, recognized for transforming students into industry-ready professionals with 100% placement success.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description:
        'Learn from IIM/IIT alumni and experienced corporate mentors who bring real-world insights and proven strategies to accelerate your career journey.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description:
        'Part of SSV group with BFSISSC approval and iQuanta franchise partnership. Over 70% of our students secure offers above 6.5 LPA.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">RiseKraft</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a premium campus recruitment training organization dedicated to transforming students
            into career-ready professionals through comprehensive training and guaranteed placement support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 sm:p-12 border-2 border-border shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Parent Organization</h3>
              <p className="text-muted-foreground mb-4">
                RiseKraft operates under the prestigious SSV group with official BFSISSC approval,
                ensuring the highest standards of training quality and compliance.
              </p>
              <p className="text-muted-foreground mb-4">
                As an authorized iQuanta franchise partner, we leverage cutting-edge training methodologies
                and industry-tested curriculum to deliver exceptional results.
              </p>
            </div>
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="font-semibold mb-4 text-lg">Key Milestones</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">BFSISSC Approved Training Partner</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Official iQuanta Franchise</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">100+ Corporate Partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">1000+ Students Trained Successfully</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
