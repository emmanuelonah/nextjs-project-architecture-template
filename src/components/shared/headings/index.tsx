import styled from 'styled-components';

const Heading1 = styled.h1`
  color: ${(props) => props.theme.colors.secondary400};
  font-weight: ${(props) => props.theme.typography.title1.fontWeight};
  font-size: ${(props) => props.theme.typography.title1.fontSize};
  line-height: ${(props) => props.theme.typography.lineHeight.xxs};
`;

const Heading2 = styled.h2`
  color: ${(props) => props.theme.colors?.secondary400};
  font-weight: ${(props) => props.theme.typography?.title2.fontWeight};
  font-size: ${(props) => props.theme.typography?.title2.fontSize};
  line-height: ${(props) => props.theme.typography?.lineHeight.xxs};
`;

const Heading3 = styled.h3`
  color: ${(props) => props.theme.colors.secondary400};
  font-weight: ${(props) => props.theme.typography.title3.fontWeight};
  font-size: ${(props) => props.theme.typography.title3.fontSize};
  line-height: ${(props) => props.theme.typography.lineHeight.xxs};
`;

const Heading4 = styled.h4`
  color: ${(props) => props.theme.colors.secondary400};
  font-weight: ${(props) => props.theme.typography.bodyText.fontWeight};
  font-size: ${(props) => props.theme.typography.bodyText.fontSize};
  line-height: ${(props) => props.theme.typography.lineHeight.xxs};
`;

export { Heading1, Heading2, Heading3, Heading4 };
