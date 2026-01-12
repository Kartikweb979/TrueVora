import { useState, useMemo } from 'react';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { CategoryFilter } from '@/components/CategoryFilter';
import { SearchFilters } from '@/components/SearchFilters';
import { ToolGrid } from '@/components/ToolGrid';
import { Methodology } from '@/components/Methodology';
import { Footer } from '@/components/Footer';
import { verifiedTools } from '@/data/tools';
import { Tool } from '@/types/tool';

const hasUnlimitedUsage = (tool: Tool): boolean => {
  return tool.usageLimits.some(
    (limit) => limit.limit.toLowerCase().includes('unlimited')
  );
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [noCreditCard, setNoCreditCard] = useState(false);
  const [unlimitedUsage, setUnlimitedUsage] = useState(false);

  const filteredTools = useMemo(() => {
    let tools = verifiedTools;

    // Category filter
    if (selectedCategory !== 'All') {
      tools = tools.filter((tool) => tool.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      tools = tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query)
      );
    }

    // No credit card filter
    if (noCreditCard) {
      tools = tools.filter((tool) => !tool.requiresCreditCard);
    }

    // Unlimited usage filter
    if (unlimitedUsage) {
      tools = tools.filter(hasUnlimitedUsage);
    }

    return tools;
  }, [selectedCategory, searchQuery, noCreditCard, unlimitedUsage]);

  const activeFiltersCount = [noCreditCard, unlimitedUsage].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />

      {/* Main tool listing */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-foreground">Verified Tools</h2>
              <p className="mt-1 text-muted-foreground">
                Manually tested. Honestly documented.
              </p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6">
            <SearchFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              noCreditCard={noCreditCard}
              onNoCreditCardChange={setNoCreditCard}
              unlimitedUsage={unlimitedUsage}
              onUnlimitedUsageChange={setUnlimitedUsage}
            />
          </div>

          <div className="mb-8">
            <CategoryFilter
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

          {/* Results count */}
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {filteredTools.length} of {verifiedTools.length} tools
            {activeFiltersCount > 0 && (
              <span className="ml-1">
                ({activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} active)
              </span>
            )}
          </div>

          <ToolGrid tools={filteredTools} />
        </div>
      </section>

      <Methodology />
      <Footer />
    </div>
  );
};

export default Index;
