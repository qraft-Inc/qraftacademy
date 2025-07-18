import { BookText, DollarSign, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const packages = [
  {
    title: 'Freelance Course',
    description: 'A comprehensive, step-by-step online program designed to accelerate your freelancing success.',
    icon: GraduationCap,
  },
  {
    title: 'Ultimate Handbook',
    description: 'In-depth guides filled with exercises and practical tools.',
    icon: BookText,
  },
  {
    title: 'Pricing',
    description: 'Cost for live online course: $199 with payment plans available.',
    icon: DollarSign,
  },
];

export function PackageDetails() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-12">Package Details (Paid)</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card 
            className="group bg-white/5 backdrop-blur-sm border-0 p-8 hover:bg-white/10 transition-all duration-500"
            key={pkg.title}
          >
            <pkg.icon className="size-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-white">
              {pkg.title}
            </h3>
            <p className="text-blue-200">{pkg.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}