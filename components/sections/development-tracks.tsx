import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center"> Our Thematic Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{track.title}</h3>
              <p className="text-gray-600 mb-4 text-base">{track.description}</p>
              <a 
                href={track.href} 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-base"
              >
                Explore This Theme
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
