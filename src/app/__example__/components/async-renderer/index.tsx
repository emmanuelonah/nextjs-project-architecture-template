import * as React from 'react';

import { __DEV__ } from 'utils';

import { If } from '../if';
import { Loader } from '../loader';

type AsyncRendererPropTypes<DataType> = {
  isLoading: boolean;
  error: string | null;
  data: DataType;
  hasData: boolean;
  endpoint: string;
  children(_data: DataType): React.ReactNode;
};

export function AsyncRenderer<DataType>({
  isLoading,
  error,
  data,
  hasData,
  endpoint,
  children,
}: AsyncRendererPropTypes<DataType>) {
  return (
    <If
      condition={isLoading}
      do={<Loader isLoading={isLoading} />}
      else={
        <If
          condition={error != null}
          do={<p>{error || `${__DEV__ && `An uncached error has occurred in ${endpoint} ajax operation`}`}</p>}
          else={<If condition={!hasData} do={<p>No data</p>} else={children(data)} />}
        />
      }
    />
  );
}
