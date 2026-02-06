import { Shield, Sparkles, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative py-10 md:py-14 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Independent • No Ads • No BS</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">TrustVora</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-slide-up">
            The Free AI Tools Trust Layer
          </p>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up stagger-1">
            Cutting through the noise of "fake-free" AI tools. Every tool manually verified, 
            with transparent usage limits and pricing history. 
            <span className="text-primary font-medium"> No cap.</span>
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 animate-slide-up stagger-2">
            <div className="flex items-center gap-2 rounded-full bg-verified/10 border border-verified/30 px-4 py-2 text-sm">
              <Shield className="h-4 w-4 text-verified" />
              <span className="text-verified font-medium">Manually Verified</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-2 text-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">Real Usage Limits</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-accent font-medium">Price History</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
