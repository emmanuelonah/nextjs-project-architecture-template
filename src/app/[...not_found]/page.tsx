'use client';

import { ROUTES } from 'routes';
import { Heading3 } from 'components';

import { Wrapper, StyledLink } from './pages.styles';

export default function NotFound() {
  return (
    <Wrapper>
      <Heading3>Sorry, this page isn&apos;t available.</Heading3>
      <p>
        The link you followed may be broken, or the page may have been removed.{' '}
        <StyledLink href={ROUTES.home}>Go back to ServiceDey</StyledLink>
      </p>
    </Wrapper>
  );
}
