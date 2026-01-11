import { useState, useMemo } from 'react';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ToolGrid } from '@/components/ToolGrid';
import { Methodology } from '@/components/Methodology';
import { Footer } from '@/components/Footer';
import { verifiedTools } from '@/data/tools';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = useMemo(() => {
    if (selectedCategory === 'All') return verifiedTools;
    return verifiedTools.filter(tool => tool.category === selectedCategory);
  }, [selectedCategory]);

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

          <div className="mb-8">
            <CategoryFilter 
              selected={selectedCategory} 
              onSelect={setSelectedCategory} 
            />
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
