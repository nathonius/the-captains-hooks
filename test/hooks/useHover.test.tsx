import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useHover } from '../../src/hooks/useHover';

const Wrapper: React.FC = props => {
  const [ref, hovered] = useHover<HTMLDivElement>();
  return (
    <div id="root" ref={ref}>
      {hovered.toString()}
    </div>
  );
};

it('defaults to false', () => {
  // Arrange
  const result = render(<Wrapper />);
  const div = result.container.querySelector('#root');

  // Act

  // Assert
  expect(div.innerHTML).toBe('false');
});

it('is true when hovered', () => {
  // Arrange
  const result = render(<Wrapper />);
  const div = result.container.querySelector('#root');

  // Act
  fireEvent.mouseOver(div);

  // Assert
  expect(div.innerHTML).toBe('true');
});

it('is false on mouseOut', () => {
  // Arrange
  const result = render(<Wrapper />);
  const div = result.container.querySelector('#root');

  // Act
  fireEvent.mouseOver(div);
  fireEvent.mouseOut(div);

  // Assert
  expect(div.innerHTML).toBe('false');
});
