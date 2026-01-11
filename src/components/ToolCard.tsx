import { useState } from 'react';
import { ExternalLink, CreditCard, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Tool } from '@/types/tool';
import { Badge } from '@/components/ui/badge';
import { VerificationBadge } from './VerificationBadge';
import { PricingTimeline } from './PricingTimeline';
import { cn } from '@/lib/utils';

type ToolCardProps = {
  tool: Tool;
  index: number;
};

export const ToolCard = ({ tool, index }: ToolCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={cn(
        'group rounded-xl border bg-card p-6 shadow-card transition-all duration-300',
        'hover:shadow-card-hover hover:-translate-y-1',
        'animate-fade-in',
        tool.status === 'flagged' && 'border-flagged/30 bg-flagged/5'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">
              {tool.name}
            </h3>
            <VerificationBadge status={tool.status} size="sm" />
          </div>
          <p className="text-sm text-muted-foreground">{tool.description}</p>
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 rounded-lg bg-secondary p-2 text-secondary-foreground transition-colors hover:bg-secondary/80"
          aria-label={`Visit ${tool.name}`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Meta row */}
      <div className="mb-4 flex flex-wrap gap-3 text-xs">
        <Badge variant="outline" className="gap-1.5">
          {tool.category}
        </Badge>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>Tested: {tool.lastTested}</span>
        </div>
        {tool.requiresCreditCard ? (
          <div className="flex items-center gap-1 text-flagged">
            <CreditCard className="h-3 w-3" />
            <span>Credit Card Required</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 text-verified">
            <CreditCard className="h-3 w-3" />
            <span>No Card Needed</span>
          </div>
        )}
      </div>

      {/* Usage Limits */}
      <div className="mb-4">
        <h4 className="mb-2 text-sm font-semibold text-foreground">Free Tier Limits</h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {tool.usageLimits.map((limit, i) => (
            <div 
              key={i}
              className="rounded-lg bg-muted/50 px-3 py-2"
            >
              <div className="text-xs text-muted-foreground">{limit.metric}</div>
              <div className="font-mono text-sm font-medium text-foreground">
                {limit.limit} <span className="text-xs text-muted-foreground">/ {limit.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      {tool.notes && (
        <div className={cn(
          'mb-4 rounded-lg border px-3 py-2 text-sm',
          tool.status === 'flagged' 
            ? 'border-flagged/30 bg-flagged/5 text-flagged' 
            : 'border-caution/30 bg-caution/5 text-foreground'
        )}>
          {tool.notes}
        </div>
      )}

      {/* Expandable Pricing History */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between border-t pt-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <span>View Pricing History ({tool.pricingHistory.length} changes)</span>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 border-t pt-4">
          <PricingTimeline history={tool.pricingHistory} />
        </div>
      )}
    </article>
  );
};
