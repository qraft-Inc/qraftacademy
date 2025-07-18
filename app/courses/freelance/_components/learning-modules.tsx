import { 
  Briefcase, Clock, Megaphone, Network, Palette, 
  PiggyBank, TrendingUp, Users 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const modules = [
  {
    title: 'Business Setup',
    description: 'Identifying marketable skills and setting up a portfolio.',
    icon: Briefcase,
  },
  {
    title: 'Client Acquisition',
    description: 'Finding and retaining clients, crafting winning pitches.',
    icon: Users,
  },
  {
    title: 'Financial Management',
    description: 'Invoicing, taxes, contracts, and cash flow management.',
    icon: PiggyBank,
  },
  {
    title: 'Marketing Strategies',
    description: 'Effective marketing techniques to promote your services.',
    icon: Megaphone,
  },
  {
    title: 'Time Management',
    description: 'Strategies to manage your time effectively as a freelancer.',
    icon: Clock,
  },
  {
    title: 'Networking Skills',
    description: 'Building a network of clients and fellow freelancers.',
    icon: Network,
  },
  {
    title: 'Brand Building',
    description: 'Creating a personal brand that stands out in the market.',
    icon: Palette,
  },
  {
    title: 'Scaling Your Business',
    description: 'Strategies for growing your freelance business sustainably.',
    icon: TrendingUp,
  },
];

export function LearningModules() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-12">What You Will Learn</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {modules.map((module) => (
          <Card 
            className="group bg-gradient-to-br from-blue-500/10 to-blue-600/20 border-0 p-6 hover:scale-105 transition-all duration-300"
            key={module.title}
          >
            <module.icon className="size-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-3 text-white">
              {module.title}
            </h3>
            <p className="text-blue-200 text-sm">{module.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}