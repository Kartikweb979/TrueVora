import { Search, CreditCard, Infinity, Filter } from 'lucide-react';
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
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search AI tools..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-4 h-14 text-lg glass border-border/50 focus:border-primary/50 rounded-xl transition-all duration-300 ease-smooth focus:shadow-glow"
        />
      </div>

      {/* Filter Toggles */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span>Filters:</span>
        </div>
        
        <button
          onClick={() => onNoCreditCardChange(!noCreditCard)}
          className={cn(
            'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-smooth press-effect',
            noCreditCard
              ? 'bg-verified/20 text-verified border border-verified/50 shadow-md'
              : 'glass text-muted-foreground hover:text-foreground border border-transparent hover:scale-105'
          )}
        >
          <CreditCard className="h-4 w-4" />
          No Credit Card
        </button>

        <button
          onClick={() => onUnlimitedUsageChange(!unlimitedUsage)}
          className={cn(
            'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-smooth press-effect',
            unlimitedUsage
              ? 'bg-primary/20 text-primary border border-primary/50 shadow-md'
              : 'glass text-muted-foreground hover:text-foreground border border-transparent hover:scale-105'
          )}
        >
          <Infinity className="h-4 w-4" />
          Unlimited Usage
        </button>
      </div>
    </div>
  );
};
