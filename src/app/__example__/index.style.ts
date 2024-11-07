import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
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
`;

const Joke = styled.p`
  padding: 1rem 0;
`;

const Icon = styled.img`
  display: inline-block;
  margin-top: 1rem;
`;

const GenerateJoke = styled.button`
  background-color: ${({ theme }) => theme.colors.blue400};
  border: none;
  color: ${({ theme }) => theme.colors.white400};
  padding: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const CreatorLink = styled.a`
  display: inline-block;
`;

export { Wrapper, GenerateJoke, CreatorLink, Joke, Icon };
