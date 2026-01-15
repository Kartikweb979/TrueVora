import { Shield, Clock, History, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export const Methodology = () => {
  const criteria = [
    {
      icon: CheckCircle,
      title: 'Verified ✓',
      description: 'Genuinely free tier with clear limits. No tricks, no hidden paywalls.',
      color: 'text-verified',
      bg: 'bg-verified/10',
    },
    {
      icon: AlertTriangle,
      title: 'Caution ⚠️',
      description: 'Has free tier but with significant limitations or one-time credits only.',
      color: 'text-caution',
      bg: 'bg-caution/10',
    },
    {
      icon: XCircle,
      title: 'Flagged 🚩',
      description: 'Misleadingly marketed as free. Often requires credit card or has no real free tier.',
      color: 'text-flagged',
      bg: 'bg-flagged/10',
    },
  ];

  const process = [
    {
      icon: Shield,
      title: 'Manual Testing',
      description: 'Every tool is personally tested by our team. No automated scraping.',
    },
    {
      icon: Clock,
      title: 'Regular Updates',
      description: 'Tools are re-tested periodically to catch silent paywall changes.',
    },
    {
      icon: History,
      title: 'Price Tracking',
      description: 'We document pricing changes to expose bait-and-switch tactics.',
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Methodology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in radical transparency. Here's exactly how we verify and categorize each tool.
          </p>
        </div>

        {/* Status meanings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {criteria.map((item) => (
            <div
              key={item.title}
              className="glass rounded-xl p-6 text-center transition-all hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bg} mb-4`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h3 className={`font-bold text-lg mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 shrink-0">
                  <span className="font-bold text-primary">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
