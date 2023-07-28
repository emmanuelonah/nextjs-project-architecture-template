import React from 'react';

import { OrganisationModel } from './index.model';

function useOrganisationPresenter() {
  const { current: organisation } = React.useRef<OrganisationModel>(new OrganisationModel());

  return organisation;
}

export { useOrganisationPresenter, OrganisationModel };
