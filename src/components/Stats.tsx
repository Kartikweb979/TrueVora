import { verifiedTools } from '@/data/tools';

export const Stats = () => {
  const verifiedCount = verifiedTools.filter(t => t.status === 'verified').length;
  const cautionCount = verifiedTools.filter(t => t.status === 'caution').length;
  const flaggedCount = verifiedTools.filter(t => t.status === 'flagged').length;
  const noCreditCardCount = verifiedTools.filter(t => !t.requiresCreditCard).length;

  const stats = [
    { value: verifiedTools.length, label: 'Tools Reviewed' },
    { value: verifiedCount, label: 'Verified Free' },
    { value: flaggedCount, label: 'Flagged as Misleading' },
    { value: noCreditCardCount, label: 'No Card Required' },
  ];

  return (
    <section className="border-y bg-card py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
