import { useState, useRef, useEffect } from 'react';

export function useEventListener(
  eventType: string,
  handler: (e: Event) => void,
  element: EventTarget = window
) {
  // We store the handler so we don't have to pass in a dep array
  const savedHandler = useRef<(e: Event) => void>(handler);

  // set the handler here, watching for changes in the handler arg
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Create the listener
    const listener = (e: Event) => savedHandler.current(e);
    // Add listener
    element.addEventListener(eventType, listener);
    // Cleanup
    return () => element.removeEventListener(eventType, listener);
  }, [eventType, element]);
}

export default useEventListener;
