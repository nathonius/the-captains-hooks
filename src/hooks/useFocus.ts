import * as React from 'react';
import { useState } from 'react';

interface FocusMethods {
  onFocus: React.EventHandler<React.FocusEvent>;
  onBlur: React.EventHandler<React.FocusEvent>;
}

export function useFocus(): [boolean, FocusMethods] {
  const [focused, setFocused] = useState<boolean>(false);
  const focusMethods: FocusMethods = {
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  };
  return [focused, focusMethods];
}

export default useFocus;
