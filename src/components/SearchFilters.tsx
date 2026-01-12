import { Search, CreditCard, Infinity } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type SearchFiltersProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  noCreditCard: boolean;
  onNoCreditCardChange: (value: boolean) => void;
  unlimitedUsage: boolean;
  onUnlimitedUsageChange: (value: boolean) => void;
};

export const SearchFilters = ({
  searchQuery,
  onSearchChange,
  noCreditCard,
  onNoCreditCardChange,
  unlimitedUsage,
  onUnlimitedUsageChange,
}: SearchFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search tools by name or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-secondary/50 border-border/50 focus-visible:ring-primary/20"
        />
      </div>

      {/* Filter Toggles */}
      <div className="flex gap-2">
        <button
          onClick={() => onNoCreditCardChange(!noCreditCard)}
          className={cn(
            'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border',
            noCreditCard
              ? 'bg-verified/10 text-verified border-verified/30'
              : 'bg-secondary text-muted-foreground border-transparent hover:bg-secondary/80'
          )}
        >
          <CreditCard className="h-4 w-4" />
          <span className="hidden sm:inline">No Credit Card</span>
          <span className="sm:hidden">No CC</span>
        </button>

        <button
          onClick={() => onUnlimitedUsageChange(!unlimitedUsage)}
          className={cn(
            'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border',
            unlimitedUsage
              ? 'bg-verified/10 text-verified border-verified/30'
              : 'bg-secondary text-muted-foreground border-transparent hover:bg-secondary/80'
          )}
        >
          <Infinity className="h-4 w-4" />
          <span className="hidden sm:inline">Unlimited Usage</span>
          <span className="sm:hidden">Unlimited</span>
        </button>
      </div>
    </div>
  );
};
