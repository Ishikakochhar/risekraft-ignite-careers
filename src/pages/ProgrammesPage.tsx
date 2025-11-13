import Navigation from '@/components/Navigation';
import Programmes from '@/components/Programmes';
import Footer from '@/components/Footer';

const ProgrammesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Programmes />
      <Footer />
    </div>
  );
};

export default ProgrammesPage;
