import * as React from 'react';

function useVisuallyHidden(style?: React.CSSProperties): { style: React.CSSProperties } {
  return {
    style: {
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
      ...(style ?? {}),
    },
  };
}

type VisuallyHiddenPropTypes = React.ComponentPropsWithoutRef<'span'>;
type VisuallyHiddenElement = React.ElementRef<'span'>;

const VisuallyHidden = React.forwardRef<VisuallyHiddenElement, VisuallyHiddenPropTypes>(function VisuallyHidden(
  { style, ...restProps },
  forwardedRef
) {
  return <span {...restProps} data-testid="visuallyHidden" {...useVisuallyHidden(style)} ref={forwardedRef} />;
});

export type { VisuallyHiddenElement, VisuallyHiddenPropTypes };
export { useVisuallyHidden, VisuallyHidden };
