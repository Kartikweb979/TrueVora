import { Shield, Github, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary p-2">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold text-foreground">
                Free AI Tools Trust Layer
              </div>
              <div className="text-sm text-muted-foreground">
                Independent verification since 2026
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="#"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-foreground"
              aria-label="Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            This platform accepts no advertising, affiliate payments, or paid placements.
            <br />
            Built for developers and students who need honest answers.
          </p>
        </div>
      </div>
    </footer>
  );
};
