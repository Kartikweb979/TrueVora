import { Shield, Github, Mail, Heart, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-primary to-pink-500 p-2.5">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-foreground font-display">
                Free AI Tools Trust Layer
              </div>
              <div className="text-sm text-muted-foreground">
                Independent verification since 2026
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:kartikgupta.rke@gmail.com"
              className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            This platform accepts <span className="text-primary font-medium">no advertising</span>, affiliate payments, or paid placements.
            <br />
            Built with <Heart className="inline h-3 w-3 text-pink-500 mx-1" /> for developers and students who need honest answers.
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>🔒 No tracking</span>
            <span>💜 No ads</span>
            <span>✨ No BS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
