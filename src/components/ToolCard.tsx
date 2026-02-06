import { ExternalLink, Calendar, Check, X, Zap } from 'lucide-react';
import { Tool } from '@/types/tool';
import { VerificationBadge } from './VerificationBadge';
import { cn } from '@/lib/utils';

type ToolCardProps = {
  tool: Tool;
  index: number;
};

export const ToolCard = ({ tool, index }: ToolCardProps) => {
  const statusStyles = {
    verified: 'border-verified/30 hover:border-verified/50 hover:shadow-[0_0_30px_-5px_hsla(160,75%,42%,0.3)]',
    caution: 'border-caution/30 hover:border-caution/50',
    flagged: 'border-flagged/30 hover:border-flagged/50',
    pending: 'border-muted/30 hover:border-muted/50',
  };

  // Check if any limit has "Unlimited"
  const hasUnlimited = tool.usageLimits.some(l => 
    l.limit.toLowerCase().includes('unlimited')
  );

  return (
    <article
      className={cn(
        'glass rounded-2xl p-5 transition-all duration-500 ease-smooth hover:scale-[1.02] hover:-translate-y-1 animate-fade-in border relative overflow-hidden',
        statusStyles[tool.status]
      )}
      style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
    >
      {/* Free Status Banner - Top Right Corner */}
      <div className={cn(
        'absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-bl-lg',
        tool.requiresCreditCard 
          ? 'bg-flagged text-flagged-foreground' 
          : 'bg-verified text-verified-foreground'
      )}>
        {tool.requiresCreditCard ? '💳 Card Required' : '✓ FREE'}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3 pr-20">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-foreground truncate mb-1">
            {tool.name}
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <VerificationBadge status={tool.status} />
            <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
              {tool.category}
            </span>
          </div>
        </div>
      </div>

      {/* Description - shorter */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {tool.description}
      </p>

      {/* Quick Stats Row */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className={cn(
          'flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium',
          tool.requiresCreditCard ? 'bg-flagged/10 text-flagged' : 'bg-verified/10 text-verified'
        )}>
          {tool.requiresCreditCard ? <X className="h-3 w-3" /> : <Check className="h-3 w-3" />}
          {tool.requiresCreditCard ? 'Card' : 'No Card'}
        </div>
        
        {hasUnlimited && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
            <Zap className="h-3 w-3" />
            Unlimited
          </div>
        )}
        
        <div className="flex items-center gap-1 px-2 py-1 rounded-md text-xs text-muted-foreground bg-secondary/30">
          <Calendar className="h-3 w-3" />
          {new Date(tool.lastTested).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </div>
      </div>

      {/* Usage Limits - Compact */}
      <div className="space-y-1 mb-4">
        {tool.usageLimits.slice(0, 2).map((limit, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-xs bg-secondary/20 rounded-md px-2 py-1.5"
          >
            <span className="text-muted-foreground">{limit.metric}</span>
            <span className="font-semibold text-foreground">
              {limit.limit}
              <span className="text-muted-foreground font-normal ml-1">/{limit.period.replace('per ', '')}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Notes - Compact single line */}
      {tool.notes && (
        <p className="text-xs text-muted-foreground italic line-clamp-1 mb-3">
          💡 {tool.notes}
        </p>
      )}

      {/* Visit Button */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-smooth press-effect text-sm font-medium"
      >
        Visit Tool
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </article>
  );
};