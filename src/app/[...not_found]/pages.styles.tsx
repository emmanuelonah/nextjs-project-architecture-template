import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  /**
   * @mobileStyle
   */
  padding: 1rem 2rem;
  /**
   * @desktopStyle
   */
  @media (min-width: ${({ theme }) => theme.typography.pageWidth.desktopStartWidth}) {
    padding: 1rem 6rem;
  }

  text-align: center;

  & h3 {
    padding: 1rem 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue400};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export { Wrapper, StyledLink };
