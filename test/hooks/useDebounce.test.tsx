import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDebounce } from '../../src/hooks/useDebounce';

jest.useFakeTimers();

const Wrapper: React.FC = props => {
  const [value, setValue] = React.useState<number>(0);
  const debounced = useDebounce(value, 20);
  return (
    <>
      <div id="value">{debounced}</div>
      <button id="increment" onClick={() => setValue(value + 1)}>
        increment
      </button>
    </>
  );
};

it('should have an initial value', () => {
  // Arrange
  const result = render(<Wrapper />);
  const div = result.container.querySelector('#value');

  // Act

  // Assert
  expect(div).not.toBeNull();
  expect(div.innerHTML).toBe('0');
});

it('should update after the given delay', () => {
  // Arrange
  const result = render(<Wrapper />);
  const div = result.container.querySelector('#value');
  const button = result.container.querySelector('#increment');

  // Act
  fireEvent.click(button);

  // Assert
  setTimeout(() => {
    expect(div).not.toBeNull();
    expect(div.innerHTML).toBe('1');
  }, 21);
});

it('should debounce value', () => {
  // Arrange
  const result = render(<Wrapper />);
  const div = result.container.querySelector('#value');
  const button = result.container.querySelector('#increment');

  // Act / Assert
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  expect(div.innerHTML).toBe('0');
  setTimeout(() => {
    expect(div.innerHTML).toBe('3');
  }, 21);
});
