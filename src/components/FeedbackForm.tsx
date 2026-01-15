import { useState } from 'react';
import { MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const FeedbackForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    type: 'suggestion'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with feedback
    const subject = `Trust Layer Feedback: ${formData.type}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AType: ${formData.type}%0D%0A%0D%0AFeedback:%0D%0A${encodeURIComponent(formData.feedback)}`;
    
    window.location.href = `mailto:kartikgupta.rke@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    setIsSubmitted(true);
    toast.success('Opening your email client to send feedback!');
    
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', email: '', feedback: '', type: 'suggestion' });
    }, 2000);
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
          {!isOpen ? (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Share Your <span className="gradient-text-accent">Feedback</span>
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Found a tool we missed? Have suggestions? We'd love to hear from you!
              </p>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setIsOpen(true)}
                className="border-accent/50 hover:bg-accent/10 hover:border-accent"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Give Feedback
              </Button>
            </div>
          ) : isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-verified/20 mb-6">
                <CheckCircle className="h-8 w-8 text-verified" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">Your feedback helps us improve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Send Feedback</h3>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Feedback Type</label>
                <div className="flex flex-wrap gap-2">
                  {['suggestion', 'missing-tool', 'bug-report', 'other'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, type })}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        formData.type === type
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Your Feedback</label>
                <Textarea
                  placeholder="Tell us what's on your mind..."
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  required
                  rows={4}
                  className="bg-background/50 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-accent to-blue-500 hover:opacity-90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Feedback
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
