import React from 'react';

import { renderHook, render } from 'utils';

import { createContext } from './index.util';

describe('createContext', () => {
  it('should confirm that createContent returns a context', () => {
    const contextValue = { env: 'test', testTool: 'jest', framework: 'react' };
    const [Provider, useContext] = createContext<typeof contextValue>('TestContext');

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider value={contextValue}>{children}</Provider>
    );
    const { result } = renderHook(() => useContext(), { wrapper });

    expect(result.current).toEqual(contextValue);
  });

  it('should confirm that createContent throws an error when a component not wrapped with the context provider tries to use the context', () => {
    const [_, useContext] = createContext<{ name: string | null }>('TestContext');

    function Component() {
      const values = useContext();

      return <p>{values.name}</p>;
    }

    try {
      render(<Component />);
    } catch (error) {
      expect((error as Error).name).toBe('UseContextError 🚨');
      expect((error as Error).message).toBe('You can not use context outside its Provider component');
    }
  });
});
