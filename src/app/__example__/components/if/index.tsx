import * as React from 'react';

type IfPropTypes = {
  condition: boolean;
  do?: React.ReactNode;
  else?: React.ReactNode;
};

export function If(props: IfPropTypes) {
  if (props.condition) {
    return <>{props.do ?? null}</>;
  }

  return <>{props.else ?? null}</>;
}
