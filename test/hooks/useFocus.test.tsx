import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useFocus } from '../../src/hooks/useFocus';

const Wrapper: React.FC = props => {
  const [focused, bind] = useFocus();
  return <input id="root" {...bind} value={focused.toString()} readOnly />;
};

it('defaults to false', () => {
  // Arrange
  const result = render(<Wrapper />);
  const input = result.container.querySelector('#root') as HTMLInputElement;

  // Act

  // Assert
  expect(input.value).toBe('false');
});

it('is true when focused', () => {
  // Arrange
  const result = render(<Wrapper />);
  const input = result.container.querySelector('#root') as HTMLInputElement;

  // Act
  fireEvent.focus(input);

  // Assert
  expect(input.value).toBe('true');
});

it('is false on blur', () => {
  // Arrange
  const result = render(<Wrapper />);
  const input = result.container.querySelector('#root') as HTMLInputElement;

  // Act
  fireEvent.focus(input);
  fireEvent.blur(input);

  // Assert
  expect(input.value).toBe('false');
});
