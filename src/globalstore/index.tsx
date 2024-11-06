/**
 * @About Application Global State
 *
 * This folder contains the application's global state, which is shared across the entire app.
 *
 * @Usage
 * All global contexts should be exposed through this store.
 *
 * Note:
 * Only truly global contexts should be exposed here. If a context is needed
 * in a single parent component, it should not be included in this global store.
 * This pattern is modular, with each context value being a standalone module.
 *
 * @Example
 * ```typescript
 * export function GlobalStore({ children }: GlobalStorePropTypes) {
 *   const a = useAPresenter(); // Separate logical module in its own file that you want to be available globally
 *   const b = useBPresenter(); // Separate logical module in its own file that you want to be available globally
 *   const c = useCPresenter(); // Separate logical module in its own file that you want to be available globally
 *
 *   const values = React.useMemo<GlobalStoreContextType>(
 *     () => ({ a, b, c }),
 *     [a, b, c]
 *   );
 *
 *   return (
 *     <GlobalStoreProvider value={values}>
 *       {children}
 *     </GlobalStoreProvider>
 *   );
 * }
 * ```
 *
 * @howToAccessTheGlobalStore
 *
 * ```typescript
 *
 * import { useGlobalStore } from 'globalstore';
 *
 *   const store = useGlobalStore();
 * ```
 */

import React, { useMemo } from 'react';

import { OrganisationModel, useOrganisationPresenter } from 'models';

import { createContext } from '../utils/create-context/index.util';

type GlobalStoreContextType = {
  organisation: OrganisationModel;
};

const [GlobalStoreProvider, useGlobalStore] = createContext<GlobalStoreContextType>('GlobalStoreContext');

type GlobalStorePropTypes = {
  children: React.ReactNode;
};

function GlobalStore(props: GlobalStorePropTypes) {
  const organisation = useOrganisationPresenter();
  const values = useMemo<GlobalStoreContextType>(() => ({ organisation }), [organisation]);

  return <GlobalStoreProvider value={values}>{props.children}</GlobalStoreProvider>;
}

export { GlobalStore, useGlobalStore };
