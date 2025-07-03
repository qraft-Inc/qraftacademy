import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Benefits } from './_components/benefits';
import { CourseOverview } from './_components/course-overview';
import { LearningModules } from './_components/learning-modules';
import { PackageDetails } from './_components/package-details';
import { Requirements } from './_components/requirements';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] to-[#1a2942]">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10" />
          <Image
            alt="Freelancers working"
            className="size-full object-cover"
            fill
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              size="lg"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      <LearningModules />

      <main className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
          <CourseOverview />
          <Benefits />
          <PackageDetails />
          <Requirements />
        </div>
      </main>
    </div>
  );
}
