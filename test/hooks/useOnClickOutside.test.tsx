import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useOnClickOutside } from '../../src/hooks/useOnClickOutside';

// mock addEventListener
const map: any = {};
document.addEventListener = jest.fn().mockImplementation((event, callback) => {
  map[event] = callback;
});

it('fires on click outside', () => {
  // Arrange
  const callback = jest.fn();
  const Wrapper: React.FC = props => {
    const ref = React.useRef<HTMLDivElement>();
    useOnClickOutside(ref, callback);
    return (
      <div id="wrapper">
        <div id="outside">outside</div>
        <div id="inside" ref={ref}>
          inside
        </div>
      </div>
    );
  };
  const result = render(<Wrapper />);

  // Act
  map.mousedown({ target: result.container });

  //Assert
  expect(callback).toHaveBeenCalledTimes(1);
});

it('does not fire on click inside', () => {
  // Arrange
  const callback = jest.fn();
  const Wrapper: React.FC = props => {
    const ref = React.useRef<HTMLDivElement>();
    useOnClickOutside(ref, callback);
    return (
      <div id="wrapper">
        <div id="outside">outside</div>
        <div id="inside" ref={ref}>
          inside
        </div>
      </div>
    );
  };
  const result = render(<Wrapper />);

  // Act
  const inside = result.getByText('inside');
  map.mousedown({ target: inside });

  //Assert
  expect(callback).toHaveBeenCalledTimes(0);
});
