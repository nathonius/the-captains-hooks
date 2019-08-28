import { useLayoutEffect } from 'react';

export function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // No scrolling for you!
    document.body.style.overflow = 'hidden';
    // Cleanup
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}

export default useLockBodyScroll;
