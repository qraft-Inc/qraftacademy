import { Button } from '@/components/ui/button';
import { Navigation } from './_components/navigation';
import { CourseOverview } from './_components/course-overview';
import { Benefits } from './_components/benefits';
import { PackageDetails } from './_components/package-details';
import { LearningModules } from './_components/learning-modules';
import { Requirements } from './_components/requirements';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] to-[#1a2942]">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center  ">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Freelancers working"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Accelerate Your Freelance Success
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-200">
              A Comprehensive Business Course
            </p>
            <div className="space-y-2 text-blue-300 mb-8">
              <p>Created by: Qraft Academy & Freelancers Lounge</p>
              <p>Supported by: Innovation Village</p>
              <p>Last Updated: October 2024</p>
            </div>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg "
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      <main className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
          <CourseOverview />
          <Benefits />
          <PackageDetails />
          <LearningModules />
          <Requirements />
        </div>
      </main>

    </div>
  );
}