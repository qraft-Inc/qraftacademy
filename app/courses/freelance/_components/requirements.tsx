import { Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Requirements() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-12">Requirements</h2>
      <Card className="bg-white/5 backdrop-blur-sm border-0 p-8">
        <div className="flex items-start space-x-6">
          <Target className="size-8 text-blue-400 shrink-0" />
          <p className="text-xl text-blue-200">
            Motivation to work on your own terms and deliver great value to clients.
          </p>
        </div>
      </Card>
    </section>
  );
}
