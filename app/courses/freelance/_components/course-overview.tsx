import { Card } from '@/components/ui/card';
import { Clock, Layout, Users } from 'lucide-react';

const overviewCards = [
  {
    title: 'Duration Options',
    description: ['12 Weeks: Guided online course with interactive webinars and live support.', '8 Weeks: Self-paced online course for flexible learning.'],
    icon: Clock,
  },
  {
    title: 'Course Format',
    description: ['On-demand video content, Live Zoom Classes, One-on-One Coaching.', 'Private online community for networking.'],
    icon: Layout,
  },
  {
    title: 'Who This Course Is For',
    description: ['Aspiring freelancers, current freelancers looking to level up, and more.'],
    icon: Users,
  },
];

export function CourseOverview() {
  return (
    <section>
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Course Overview</h2>
        <p className="text-xl text-blue-200">
          <strong>Objective:</strong> Support freelancers to build a profitable, successful, and scalable freelance business in the digital and gig economy.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {overviewCards.map((card) => (
          <Card 
            key={card.title}
            className="group bg-white/5 backdrop-blur-sm border-0 p-8 hover:bg-white/10 transition-all duration-500"
          >
            <card.icon className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-white">
              {card.title}
            </h3>
            {card.description.map((desc, index) => (
              <p key={index} className="text-blue-200 mb-2">{desc}</p>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
}