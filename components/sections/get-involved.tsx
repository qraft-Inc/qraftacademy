import { Card } from '@/components/ui/card';

const opportunities = [
  {
    title: 'Work With Us',
    description: 'Join our team and make a difference.',
    href: '/work-with-us',
  },
  {
    title: 'Partner With Us',
    description: 'Collaborate with us for mutual growth.',
    href: '/partner-with-us',
  },
  {
    title: 'Donate',
    description: 'Support our mission and help us grow.',
    href: '/donate',
  },
];

export function GetInvolved() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-white mb-8">Get Involved</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {opportunities.map((opportunity) => (
          <Card 
            key={opportunity.title} 
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 border-0 p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{opportunity.title}</h3>
            <p className="text-blue-200">{opportunity.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}