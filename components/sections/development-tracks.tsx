import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

const tracks = [
  {
    title: 'WorkMasters',
    description: 'Master the skills needed for the modern workforce.',
    href: '/courses/workmasters',
  },
  {
    title: 'CourseMasters',
    description: 'Become an expert in creating and delivering online courses.',
    href: '/courses/coursemasters',
  },
  {
    title: 'CapitalMasters',
    description: 'Learn about investment and growing your capital.',
    href: '/courses/capitalmasters',
  },
  {
    title: 'TechMasters',
    description: 'Advance your skills in cutting-edge technology.',
    href: '/courses/techmasters',
  },
];

export function DevelopmentTracks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Thematic Types</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Adjusted grid columns */}
          {tracks.map((track) => (
            <div
              key={track.title}
              className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{track.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{track.description}</p>
              <a
                href={track.href}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                Explore track
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
