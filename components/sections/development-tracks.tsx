import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const tracks = [
  {
    title: 'Personal Development, Quality Of Life And Wellbeing',
    description: 'Cultivating Skills for an Integrated and Purposeful Life',
    href: '/courses/personal-development',
  },
  {
    title: 'Productivity And Professional Development',
    description: 'Unlocking Potential for Skills, Performance, and Career Excellence Through Continuous Learning.',
    href: '/courses/professional-development',
  },
  {
    title: 'Leadership Development, Governance, Policies And Advocacy',
    description: 'Empowering Executives Through Strategic Leadership, Governance Excellence, and Advocacy for Impactful Change',
    href: '/courses/leadership-development',
  },
  {
    title: 'Strategic Organizational And Business Expansion',
    description: 'Driving Sustainable Development and Scalable Growth Through Strategic Organizational Expansion..',
    href: '/courses/strategic-organizational-expansion',
  }
];

export function DevelopmentTracks() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {tracks.map((track) => (
            <div
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-300 hover:shadow-xl transition-all"
              key={track.title}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{track.title}</h3>
              <p className="text-gray-700 mb-4 text-base">{track.description}</p>
              <a 
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold text-base transition-colors" 
                href={track.href}
              >
                Explore This Theme
                <ArrowUpRight className="size-5 text-blue-700" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
