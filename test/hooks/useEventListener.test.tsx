import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useEventListener } from '../../src/hooks/useEventListener';

interface WrapperProps {
  fn: () => void;
}

const Wrapper: React.FC<WrapperProps> = props => {
  const ref = React.useRef<HTMLDivElement>();
  useEventListener('click', props.fn, ref.current);
  return <div id="root" ref={ref} />;
};

it('applies event listener', () => {
  // Arrange
  const mockFn = jest.fn();
  const result = render(<Wrapper fn={mockFn} />);

  // Act
  fireEvent.click(result.container);
  fireEvent.click(result.container);

  // Assert
  expect(mockFn).toHaveBeenCalledTimes(2);
});

it('applies listener to window by default', () => {
  // Arrange
  const mockFn = jest.fn();
  const result = renderHook(() => useEventListener('click', mockFn));

  // Act
  fireEvent.click(window);
  fireEvent.click(window);

  // Assert
  expect(mockFn).toHaveBeenCalledTimes(2);
});
