import { useRef, useCallback, Ref, RefObject } from 'react';

export function useScrollTo<T extends Element>(ref: RefObject<T>): () => void {
  const scrollTo = useCallback(() => {
    if (ref.current) {
      window.scrollTo(0, ref.current.getBoundingClientRect().top);
    }
  }, [ref, ref.current]);
  return scrollTo;
}

export default useScrollTo;
