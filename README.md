# The Captain's Hooks

[![Build Status](https://travis-ci.org/OfficerHalf/the-captains-hooks.svg?branch=master)](https://travis-ci.org/OfficerHalf/the-captains-hooks)

A collection of React + TypeScript utility hooks, mostly stolen from the wonderful [useHooks][useHooks].

[useHooks]: https://usehooks.com/

## Hooks

- [useDebounce](#useDebounce) tbd
- [useEventListener](#useEventListener) tbd
- [useFocus](#useFocus)
- [useHover](#useHover)
- [useLockBodyScroll](#useLockBodyScroll) tbd
- [useOnClickOutside](#useOnClickOutside) tbd
- [useOnScreen](#useOnScreen) tbd
- [useScrollTo](#useScrollTo)
- [useWindowSize](#useWindowSize) tbd

### useFocus

Returns a boolean value reflecting the focus state and two methods to apply to the component to be watched.

``` tsx
const ExampleComponent: React.FC = props => {
  const [focused, focusMethods] = useFocus();
  return <input {...focusMethods} value={focused.toString()} readOnly />;
}
```

Alternatively:

``` tsx
const ExampleComponent: React.FC = props => {
  const [focused, focusMethods] = useFocus();
  return (
    <input
      value={focused.toString()}
      readOnly
      onFocus={focusMethods.onFocus}
      onBlur={focusMethods.onBlur}
    />
  );
}
```

### useHover

Almost identical to [useFocus](#useFocus), returns a boolean value reflecting the hover state and two methods to apply to the component to be watched.

``` tsx
const ExampleComponent: React.FC = props => {
  const [hovered, hoverMethods] = useHover();
  return (
    <div {...hoverMethods}>
      {hover.toString()}
    </div>
  );
}
```

Alternatively:

``` tsx
const ExampleComponent: React.FC = props => {
  const [hovered, hoverMethods] = useHover();
  return (
    <div
      mouseOver={hoverMethods.mouseOver}
      mouseOut={hoverMethods.mouseOut}
    >
      {hover.toString()}
    </div>
  );
}
```

### useScrollTo

Returns a method that scrolls a component with a given ref into view.

``` tsx
const ExampleComponent: React.FC = props => {
  const ref = React.useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo(ref);

  return (
    <>
      <div id="some-div" ref={ref} />
      <button onClick={scrollTo}>Scroll back to div</button>
    </>
  )
}
```
