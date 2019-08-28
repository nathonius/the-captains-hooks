import { useRef, useCallback } from 'react';

export function useScrollTo<T extends Element>(): [
  React.RefObject<T>,
  () => void
] {
  const ref = useRef<T>(null);
  const scrollTo = useCallback(() => {
    if (ref.current) {
      window.scrollTo(0, ref.current.getBoundingClientRect().top);
    }
  }, [ref.current]);
  return [ref, scrollTo];
}

export default useScrollTo;
