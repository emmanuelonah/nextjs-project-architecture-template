import { renderWithOptions, screen } from '../../../utils/test/index.util';

import { Heading1, Heading2, Heading3, Heading4 } from '.';

describe('<Headings/>', () => {
  it('should render Heading1', () => {
    renderWithOptions(<Heading1>Heading 1</Heading1>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading 1');
  });

  it('should render Heading2', () => {
    renderWithOptions(<Heading2>Heading 2</Heading2>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Heading 2');
  });

  it('should render Heading3', () => {
    renderWithOptions(<Heading3>Heading 3</Heading3>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Heading 3');
  });

  it('should render Heading4', () => {
    renderWithOptions(<Heading4>Heading 4</Heading4>);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Heading 4');
  });
});
