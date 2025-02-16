import { ChevronUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useScrollTop } from './use-scroll-top';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const ScrollToTopButton = () => {
  const { theme } = useTheme();
  const scrolled = useScrollTop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={cn(
        'fixed bottom-10 right-2 lg:bottom-10 lg:right-10 invisible',
        scrolled && 'visible'
      )}
    >
      <Button
        variant={theme == 'dark' ? 'gray' : 'default'}
        className='w-11'
        onClick={scrollToTop}
      >
        <span>
          <ChevronUp className='w-5' />
        </span>
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
