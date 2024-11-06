import React from 'react';

type PrimitiveMainPropTypes = React.ComponentPropsWithoutRef<'main'>;
type MainElement = React.ElementRef<'main'>;

export const Main = React.forwardRef<MainElement, PrimitiveMainPropTypes>(
  function Main(props, forwardedRef) {
    return <main {...props} ref={forwardedRef} />;
  }
);
