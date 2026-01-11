import { Shield, Eye, Clock, Ban, FileText, TrendingUp } from 'lucide-react';

const principles = [
  {
    icon: Eye,
    title: 'Manual Verification',
    description: 'Every tool is tested by hand. We create accounts, use free tiers, and document exact limits—no API scraping or automated assumptions.',
  },
  {
    icon: Clock,
    title: 'Visible Timestamps',
    description: 'Each listing shows when it was last tested. Stale data is marked. We retest the full catalog monthly.',
  },
  {
    icon: Ban,
    title: 'Credit Card Trap Detection',
    description: 'Tools requiring payment info upfront are flagged or removed. True free tiers never demand your card.',
  },
  {
    icon: FileText,
    title: 'Pricing History',
    description: 'We track every pricing change over time, exposing "bait-and-switch" tactics and silent paywall additions.',
  },
  {
    icon: Shield,
    title: 'Zero Paid Placements',
    description: 'No ads. No sponsored listings. No affiliate links. Our only incentive is accuracy.',
  },
  {
    icon: TrendingUp,
    title: 'Quality Over Quantity',
    description: 'We cap at 10 tools initially. Depth of verification matters more than breadth of coverage.',
  },
];

export const Methodology = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-foreground">Our Verification Principles</h2>
          <p className="text-muted-foreground">
            We built this layer because SEO-driven directories optimize for clicks, not truth.
            Here's how we're different.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card p-6 shadow-card transition-card hover:shadow-card-hover"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards',
                opacity: 0,
              }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <principle.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
