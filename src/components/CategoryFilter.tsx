import { cn } from '@/lib/utils';
import { categories } from '@/data/tools';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type CategoryFilterProps = {
  selected: string;
  onSelect: (category: string) => void;
};

export const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  const [showAll, setShowAll] = useState(false);
  
  // Show first 8 categories by default, or all if showAll is true
  const visibleCategories = showAll ? categories : categories.slice(0, 10);
  const hiddenCount = categories.length - 10;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {visibleCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
              selected === category
                ? 'bg-gradient-to-r from-primary to-pink-500 text-white shadow-lg shadow-primary/25'
                : 'glass hover:bg-secondary/80 text-muted-foreground hover:text-foreground'
            )}
          >
            {category}
          </button>
        ))}
        
        {!showAll && hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full px-4 py-2 text-sm font-medium glass hover:bg-secondary/80 text-primary flex items-center gap-1"
          >
            +{hiddenCount} more
            <ChevronDown className="h-4 w-4" />
          </button>
        )}
        
        {showAll && (
          <button
            onClick={() => setShowAll(false)}
            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};
