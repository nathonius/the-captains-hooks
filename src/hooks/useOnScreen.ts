import { useState, useEffect } from 'react';

export function useOnScreen<T extends Element>(
  ref: React.RefObject<T>,
  rootMargin: string = '0px'
): boolean {
  // we're going to return this value
  const [intersecting, setIntersecting] = useState<boolean>(false);

  // callback to for observer
  const observerCallback: IntersectionObserverCallback = ([entry]) => {
    setIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { rootMargin });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.unobserve(ref.current!);
  }, []);

  return intersecting;
}

export default useOnScreen;
