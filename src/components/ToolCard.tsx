import { ExternalLink, Calendar, CreditCard, Info } from 'lucide-react';
import { Tool } from '@/types/tool';
import { VerificationBadge } from './VerificationBadge';
import { PricingTimeline } from './PricingTimeline';
import { cn } from '@/lib/utils';

type ToolCardProps = {
  tool: Tool;
  index: number;
};

export const ToolCard = ({ tool, index }: ToolCardProps) => {
  const statusStyles = {
    verified: 'border-verified/30 hover:border-verified/50 hover:shadow-[0_0_30px_-5px_hsla(150,80%,45%,0.3)]',
    caution: 'border-caution/30 hover:border-caution/50',
    flagged: 'border-flagged/30 hover:border-flagged/50',
  };

  return (
    <article
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] animate-fade-in border',
        statusStyles[tool.status]
      )}
      style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="font-bold text-lg text-foreground truncate">
              {tool.name}
            </h3>
            <VerificationBadge status={tool.status} />
          </div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {tool.category}
          </span>
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          aria-label={`Visit ${tool.name}`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {tool.description}
      </p>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span>Tested: {new Date(tool.lastTested).toLocaleDateString()}</span>
        </div>
        <div
          className={cn(
            'flex items-center gap-1.5 rounded-full px-2 py-1',
            tool.requiresCreditCard
              ? 'bg-flagged/10 text-flagged'
              : 'bg-verified/10 text-verified'
          )}
        >
          <CreditCard className="h-3.5 w-3.5" />
          <span className="font-medium">
            {tool.requiresCreditCard ? 'Card Required' : 'No Card'}
          </span>
        </div>
      </div>

      {/* Usage Limits */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Usage Limits
        </h4>
        <div className="space-y-1.5">
          {tool.usageLimits.slice(0, 3).map((limit, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-sm bg-secondary/30 rounded-lg px-3 py-2"
            >
              <span className="text-muted-foreground">{limit.metric}</span>
              <span className="font-medium text-foreground">
                {limit.limit}
                <span className="text-muted-foreground text-xs ml-1">
                  {limit.period}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing History */}
      {tool.pricingHistory.length > 0 && (
        <PricingTimeline history={tool.pricingHistory} />
      )}

      {/* Notes */}
      {tool.notes && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-xs">
          <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-muted-foreground">{tool.notes}</p>
        </div>
      )}
    </article>
  );
};
