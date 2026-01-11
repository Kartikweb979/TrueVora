import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { PricingChange } from '@/types/tool';
import { cn } from '@/lib/utils';

type PricingTimelineProps = {
  history: PricingChange[];
};

export const PricingTimeline = ({ history }: PricingTimelineProps) => {
  if (history.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-foreground">Pricing History</h4>
      <div className="space-y-2">
        {history.map((change, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 text-sm"
          >
            <div className={cn(
              'mt-0.5 rounded-full p-1',
              change.type === 'positive' && 'bg-verified/10 text-verified',
              change.type === 'negative' && 'bg-flagged/10 text-flagged',
              change.type === 'neutral' && 'bg-muted text-muted-foreground'
            )}>
              {change.type === 'positive' && <TrendingUp className="h-3 w-3" />}
              {change.type === 'negative' && <TrendingDown className="h-3 w-3" />}
              {change.type === 'neutral' && <Minus className="h-3 w-3" />}
            </div>
            <div className="flex-1">
              <span className="font-mono text-xs text-muted-foreground">
                {change.date}
              </span>
              <p className="text-foreground/80">{change.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
