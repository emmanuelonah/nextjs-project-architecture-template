import styled from 'styled-components';

export const SkipToMainContent = styled.a`
  background-color: ${(props) => props.theme.colors.warning400};
  border: solid 0.0625rem ${(props) => props.theme.colors.dark400};
  color: ${(props) => props.theme.colors.white400};
  border-radius: ${(props) => props.theme.typography.borderRadius.btn};
  font-size: ${(props) => props.theme.typography.bodyText.fontSize};
  padding: 0.5rem;
  position: absolute;
  left: 0;
  top: -45px;
  z-index: 100;
  transition: top 0.5s ease-out;
  outline: none;

  &:focus {
    position: absolute;
    left: 0;
    top: 0;
    transition: top 0.3s ease-out;
  }
`;
