import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const ScrollToBottom = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide when near the top (first viewport)
      setIsVisible(scrollTop > 200);
      
      // Check if near bottom
      setIsNearBottom(scrollTop + windowHeight >= documentHeight - 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={isNearBottom ? scrollToTop : scrollToBottom}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full',
        'bg-card/90 backdrop-blur-xl border border-border/50',
        'text-muted-foreground hover:text-primary hover:border-primary/50',
        'shadow-lg hover:shadow-glow',
        'transition-all duration-300 ease-smooth',
        'hover:scale-110 press-effect',
        'animate-fade-in'
      )}
      aria-label={isNearBottom ? 'Scroll to top' : 'Scroll to bottom'}
    >
      <ArrowDown 
        className={cn(
          'h-5 w-5 transition-transform duration-300',
          isNearBottom && 'rotate-180'
        )} 
      />
    </button>
  );
};