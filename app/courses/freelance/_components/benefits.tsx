import { BookOpen, Users, Video } from 'lucide-react';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    title: 'Free eBook',
    description: 'Receive both the eBook and hard copy of Freelance Business Acceleration Tips.',
    icon: BookOpen,
  },
  {
    title: 'Webinars Access',
    description: 'Complimentary access to webinars and in-person events every July.',
    icon: Video,
  },
  {
    title: 'Freelancers Summit',
    description: 'Free participation in the Annual Freelancers Summit every September.',
    icon: Users,
  },
];

export function Benefits() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-12">Benefits for Course Participants (Free)</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <Card 
            key={benefit.title}
            className="group bg-gradient-to-br from-blue-500/10 to-blue-600/20 border-0 p-8 hover:scale-105 transition-all duration-300"
          >
            <benefit.icon className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-white">
              {benefit.title}
            </h3>
            <p className="text-blue-200">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}