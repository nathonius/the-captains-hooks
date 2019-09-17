import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useScrollTo } from '../../src/hooks/useScrollTo';

const scrollToSpy = jest.fn();
Object.defineProperty(window, 'scrollTo', { value: scrollToSpy });

interface WrapperProps {
  width?: number;
  height?: number;
  label: string;
}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>((props, ref) => {
  const { width = 500, height = 500, label } = props;
  return (
    <div ref={ref} style={{ width, height }}>
      {label}
    </div>
  );
});

// const resizeWindow = (width: number, height: number) => {
//   (window as any).innerWidth = width;
//   (window as any).innerHeight = height;
//   window.dispatchEvent(new Event('resize'));
// };

it('scrolls to top', () => {
  // Arrange
  const WrapperContainer: React.FC = props => {
    const ref = React.useRef<HTMLDivElement>(null);
    const scrollTo = useScrollTo(ref);
    return (
      <>
        <Wrapper label="Mock 1" ref={ref} />
        <button onClick={scrollTo}>Click Me</button>
      </>
    );
  };
  const container = render(<WrapperContainer />);

  // Act
  const button = container.getByText('Click Me');
  fireEvent.click(button);

  // Assert
  expect(scrollToSpy).toHaveBeenLastCalledWith({ top: 0, behavior: 'smooth' });
});

// TODO: This needs a real ui testing lib like cypress or something I think.

// it('scrolls to component', () => {
//   // Arrange
//   const WrapperContainer: React.FC = props => {
//     const ref = React.useRef<HTMLDivElement>(null);
//     const scrollTo = useScrollTo(ref);
//     return (
//       <>
//         <div style={{ height: 500, width: 500 }} id="spacer" />
//         <Wrapper label="Mock 1" ref={ref} />
//         <button onClick={scrollTo}>Click Me</button>
//       </>
//     );
//   };
//   resizeWindow(500, 1500);
//   const container = render(<WrapperContainer />);

//   // Act
//   const button = container.getByText('Click Me');
//   fireEvent.click(button);

//   // Assert
//   expect(scrollToSpy).toHaveBeenLastCalledWith({
//     top: 500,
//     behavior: 'smooth'
//   });
// });
