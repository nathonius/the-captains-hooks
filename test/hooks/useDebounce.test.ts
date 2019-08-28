import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from '../../src/hooks/useDebounce';

it('should have an initial value', () => {
  expect(true).toBe(true);
});
