'use client';

import React from 'react';
import Image from 'next/image';

import { Heading2 } from 'components';
import { __DEV__, __IS_BROWSER__ } from 'utils';

import iconJson from './icon-json.png';
import iconRefresh from './icon-refresh.png';

import { Wrapper, Refresh } from './index.style';

type ErrorBoundaryPropTypes = {
  children: React.ReactNode;
};

type ErrorBoundaryStateTypes = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryPropTypes, ErrorBoundaryStateTypes> {
  constructor(props: ErrorBoundaryPropTypes) {
    super(props);

    this.state = { hasError: false } as ErrorBoundaryStateTypes;
  }

  public static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (__DEV__) {
      console.group('COMPONENT RENDERING ERROR 🚨');
      console.error({ error, errorInfo });
      console.groupEnd();
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Image src={iconJson} alt="" />
          <Heading2>Oops, compilation error {`</>`}</Heading2>
          <Refresh
            type="button"
            onClick={function () {
              if (__IS_BROWSER__) window.location.reload();
            }}
          >
            <Image src={iconRefresh} alt="refresh button" />
            <span>Try again?</span>
          </Refresh>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}
