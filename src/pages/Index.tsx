import { useState, useMemo } from 'react';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { SearchFilters } from '@/components/SearchFilters';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ToolGrid } from '@/components/ToolGrid';
import { Methodology } from '@/components/Methodology';
import { DeveloperContact } from '@/components/DeveloperContact';
import { FeedbackForm } from '@/components/FeedbackForm';
import { Footer } from '@/components/Footer';
import { ScrollToBottom } from '@/components/ScrollToBottom';
import { verifiedTools } from '@/data/tools';
import { Tool } from '@/types/tool';
import { Sparkles } from 'lucide-react';

const hasUnlimitedUsage = (tool: Tool): boolean => {
  return tool.usageLimits.some(
    (limit) =>
      limit.limit.toLowerCase().includes('unlimited') ||
      limit.period.toLowerCase() === 'always'
  );
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [noCreditCard, setNoCreditCard] = useState(false);
  const [unlimitedUsage, setUnlimitedUsage] = useState(false);

  const filteredTools = useMemo(() => {
    return verifiedTools.filter((tool) => {
      // Category filter
      if (selectedCategory !== 'All' && tool.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // No credit card filter
      if (noCreditCard && tool.requiresCreditCard) {
        return false;
      }

      // Unlimited usage filter
      if (unlimitedUsage && !hasUnlimitedUsage(tool)) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, noCreditCard, unlimitedUsage]);

  const activeFilters = [
    noCreditCard && 'No Credit Card',
    unlimitedUsage && 'Unlimited Usage',
    selectedCategory !== 'All' && selectedCategory,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />

      <section className="py-8">
        <div className="container space-y-8">
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            noCreditCard={noCreditCard}
            onNoCreditCardChange={setNoCreditCard}
            unlimitedUsage={unlimitedUsage}
            onUnlimitedUsageChange={setUnlimitedUsage}
          />

          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Results header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">
                <span className="gradient-text">{filteredTools.length}</span>
                <span className="text-muted-foreground ml-2">
                  {filteredTools.length === 1 ? 'tool' : 'tools'} found
                </span>
              </span>
            </div>
            
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Active:</span>
                {activeFilters.map((filter) => (
                  <span
                    key={filter as string}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <ToolGrid tools={filteredTools} />
      
      <DeveloperContact />
      <FeedbackForm />
      <Methodology />
      <Footer />
      <ScrollToBottom />
    </div>
  );
};

export default Index;
