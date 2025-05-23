import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

const tracks = [
  {
    title: 'Personal Development',
    description: 'Enhance your personal skills and growth.',
    href: '/courses/personal-development',
  },
  {
    title: 'Professional Development',
    description: 'Explore courses and books on professional growth.',
    href: '/courses/professional-development',
  },
  {
    title: 'Digital Skilling',
    description: 'Learn essential digital skills for the modern workplace.',
    href: '/courses/digital-skilling',
  },
  {
    title: 'Freelancing',
    description: 'Resources for starting and succeeding in freelancing.',
    href: '/courses/freelancing',
  },
  {
    title: 'Entrepreneurship',
    description: 'Courses and books to help you start your own business.',
    href: '/courses/entrepreneurship',
  },
  {
    title: 'Investment Education',
    description: 'Learn how to manage and grow your investments.',
    href: '/courses/investment-education',
  },
];

export function DevelopmentTracks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Development Tracks</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
