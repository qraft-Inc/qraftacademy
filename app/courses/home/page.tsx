import { Button } from '@/components/ui/button';
 import { Programs } from './_components/programs';
import { DevelopmentTracks } from './_components/development-tracks';
import { GetInvolved } from './_components/get-involved';
import { AvailableCourses } from './_components/available-courses';
import { UpcomingPrograms } from './_components/upcoming-programs';
import { Testimonials } from './_components/testimonials';
 
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] to-[#1a2942]">

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="People collaborating"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Future of Work<br />and Ed-Tech
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-200 font-light">
              Learn, Work, Achieve
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
              >
                LEARN
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              >
                PARTICIPATE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
          <AvailableCourses />
          <Programs />
          <UpcomingPrograms />
          <DevelopmentTracks />
          <Testimonials />
          <GetInvolved />
        </div>
      </main>

    </div>
  );
}