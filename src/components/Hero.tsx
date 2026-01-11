import { Shield, CheckCircle2, AlertTriangle } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Shield Icon */}
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 p-4">
            <Shield className="h-10 w-10 text-primary-foreground" strokeWidth={1.5} />
          </div>
          
          {/* Main headline */}
          <h1 className="mb-6 text-primary-foreground">
            The Free AI Tools
            <br />
            <span className="text-accent">Trust Layer</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mb-10 text-lg text-primary-foreground/80 md:text-xl">
            An independent verification engine that filters out "fake-free" AI tools.
            <br className="hidden md:block" />
            Manual testing. Documented limits. Zero ads. Zero paid placements.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>10 Tools Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-caution" />
              <span>Credit Card Traps Flagged</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>100% Independent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
