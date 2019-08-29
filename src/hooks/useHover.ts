import * as React from 'react';
import { useState } from 'react';

interface HoverMethods {
  onMouseEnter: React.EventHandler<React.MouseEvent>;
  onMouseLeave: React.EventHandler<React.MouseEvent>;
}

export function useHover(): [boolean, HoverMethods] {
  const [hovered, setHovered] = useState<boolean>(false);
  const hoverMethods: HoverMethods = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  };
  return [hovered, hoverMethods];
}

export default useHover;
