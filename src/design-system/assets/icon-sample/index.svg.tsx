import * as React from 'react';

type PrimitiveSvgPropTypes = React.ComponentPropsWithoutRef<'svg'>;
type IconSampleElement = React.ElementRef<'svg'>;

export const IconSample = React.forwardRef<
  IconSampleElement,
  PrimitiveSvgPropTypes
>(function IconSample({ stroke, ...restProps }, forwardedRef) {
  return (
    <svg
      {...restProps}
      ref={forwardedRef}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.7166 11.6416H31.3416M3.71655 18.1416L5.0003 22.3406C5.20354 23.0063 5.61511 23.5891 6.17443 24.0034C6.73376 24.4176 7.41129 24.6413 8.1073 24.6416H10.2166M36.2166 18.1416L34.9328 22.3406C34.7296 23.0063 34.318 23.5891 33.7587 24.0034C33.1993 24.4176 32.5218 24.6413 31.8258 24.6416H29.7166M15.9041 23.8291C15.9041 23.8291 15.9041 35.2041 10.2166 35.2041M24.0291 23.8291C24.0291 23.8291 24.0291 35.2041 29.7166 35.2041M19.9666 23.8291V35.2041M36.2166 6.1166V18.1416H3.71655V6.1166C3.71655 5.85802 3.81928 5.61002 4.00212 5.42717C4.18497 5.24432 4.43297 5.1416 4.69155 5.1416H35.2416C35.5001 5.1416 35.7481 5.24432 35.931 5.42717C36.1138 5.61002 36.2166 5.85802 36.2166 6.1166V6.1166Z"
        stroke={stroke}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

IconSample.defaultProps = {
  stroke: '#CD00D1',
};
