import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: '2 Months Hybrid Internship',
    description: 'Gain practical experience and skills in a dynamic environment.',
    href: '/internship',
  },
  {
    title: '1 Year Residential Apprenticeship',
    description: 'Deep dive into your field with comprehensive training and mentorship.',
    href: '/apprenticeship',
  },
];

export function Programs() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-12">Programs Offered</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((program) => (
          <Card 
            key={program.title} 
            className="group bg-white/5 backdrop-blur-sm border-0 p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
              {program.title}
            </h3>
            <p className="text-lg text-gray-400 mb-6">{program.description}</p>
            <div className="flex items-center text-blue-400 group-hover:text-blue-300">
              <span className="mr-2">Learn more</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}