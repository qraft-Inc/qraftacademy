import { Card } from '@/components/ui/card';

export function UpcomingPrograms() {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Upcoming Programs / Fellowships</h2>
        
        <div className="space-y-6">
          <div className="text-white">
            <h3 className="text-lg font-medium text-blue-300 mb-2">
              Digital Entrepreneurs Fellowship.
            </h3>
            <p className="text-sm text-blue-100">
              Join the Qraft academy digital entrepreneurs fellowship and get access to long term mentorship and weekly activities.
            </p>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-medium text-blue-300 mb-2">
              Simulated Work Environment Apprenticeship.
            </h3>
            <p className="text-sm text-blue-100">
              Level Up Your Career In A Simulated Work Environment To Join Or Lead Tech Teams This bootcamp program is designed to prepare tech talent (enthusiasts and innovators included) through.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[400px]">
        <img
          alt="Students collaborating"
          className="size-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        />
      </div>
    </section>
  );
}