import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
    <section>
      <h2 className="text-3xl font-bold text-white mb-12">Development Tracks</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track) => (
          <Card
            className="group bg-white/5 backdrop-blur-sm border-0 p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer"
            key={track.title}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {track.title}
              </h3>
              <ArrowUpRight className="size-5 text-blue-400 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </div>
            <p className="text-gray-400">{track.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
