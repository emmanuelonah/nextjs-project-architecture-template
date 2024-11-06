import styled from 'styled-components';

import { renderWithOptions, screen } from './index.util';

const DarkHeader = styled.h1`
  color: ${(props) => props.theme.colors.dark400};
`;

describe('renderWithOptions', () => {
  it('should render children', () => {
    renderWithOptions(<DarkHeader>Dark Header</DarkHeader>);

    const darkH1Node = screen.getByText('Dark Header');

    expect(darkH1Node).toBeInTheDocument();
  });
});
