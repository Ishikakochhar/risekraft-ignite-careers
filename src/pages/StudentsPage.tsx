import Navigation from '@/components/Navigation';
import ForStudents from '@/components/ForStudents';
import Footer from '@/components/Footer';

const StudentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ForStudents />
      <Footer />
    </div>
  );
};

export default StudentsPage;
