import { verifiedTools } from '@/data/tools';
import { CheckCircle, AlertTriangle, XCircle, Zap } from 'lucide-react';

export const Stats = () => {
  const verified = verifiedTools.filter(t => t.status === 'verified').length;
  const caution = verifiedTools.filter(t => t.status === 'caution').length;
  const flagged = verifiedTools.filter(t => t.status === 'flagged').length;
  const noCreditCard = verifiedTools.filter(t => !t.requiresCreditCard).length;

  const stats = [
    {
      label: 'Verified Free',
      value: verified,
      icon: CheckCircle,
      color: 'text-verified',
      bg: 'bg-verified/10',
      border: 'border-verified/30',
    },
    {
      label: 'Use Caution',
      value: caution,
      icon: AlertTriangle,
      color: 'text-caution',
      bg: 'bg-caution/10',
      border: 'border-caution/30',
    },
    {
      label: 'Flagged',
      value: flagged,
      icon: XCircle,
      color: 'text-flagged',
      bg: 'bg-flagged/10',
      border: 'border-flagged/30',
    },
    {
      label: 'No Card Required',
      value: noCreditCard,
      icon: Zap,
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/30',
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass rounded-xl p-6 text-center transition-all hover:scale-105 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bg} ${stat.border} border mb-3`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
