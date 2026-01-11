import { cn } from '@/lib/utils';
import { categories } from '@/data/tools';

type CategoryFilterProps = {
  selected: string;
  onSelect: (category: string) => void;
};

export const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
            selected === category
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
