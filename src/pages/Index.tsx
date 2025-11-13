import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programmes from '@/components/Programmes';
import Placements from '@/components/Placements';
import ForColleges from '@/components/ForColleges';
import ForStudents from '@/components/ForStudents';
import Recruiters from '@/components/Recruiters';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Programmes />
      <Placements />
      <ForColleges />
      <ForStudents />
      <Recruiters />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
