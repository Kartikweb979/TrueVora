import { Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DeveloperContact = () => {
  const handleContact = () => {
    window.location.href = 'mailto:kartikgupta.rke@gmail.com?subject=List My AI Tool on Trust Layer&body=Hi,%0D%0A%0D%0AI would like to submit my AI tool for verification on the Free AI Tools Trust Layer.%0D%0A%0D%0ATool Name:%0D%0ATool URL:%0D%0ACategory:%0D%0AFree Tier Details:%0D%0A%0D%0AThank you!';
  };

  return (
    <section className="py-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
      
      <div className="container relative">
        <div className="glass rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            For AI Tool Developers
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Tool <span className="gradient-text">Verified</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Have a genuinely free AI tool? We manually verify and list tools that meet our strict transparency standards. No paid placements, no ads—just honest verification.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleContact}
              className="bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 transition-opacity text-lg px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact to List Your Tool
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            We'll respond within 48 hours with our verification process
          </p>
        </div>
      </div>
    </section>
  );
};
