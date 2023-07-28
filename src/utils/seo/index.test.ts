import { HTML_META_KEYWORDS, HTML_META_DESCRIPTION, HTML_TITLE } from '.';

describe('seo', () => {
  it('should join "HTML_META_KEYWORDS" using "," as the separator', () => {
    expect(HTML_META_KEYWORDS).toBe(
      "Your comma separated seo keywords here"    );
  });

  it('should confirm the correction of the "HTML_META_DESCRIPTION"', () => {
    expect(HTML_META_DESCRIPTION).toBe(
      'Your project description here'    );
  });

  it('should confirm the correction of the "HTML_TITLE"', () => {
    expect(HTML_TITLE).toBe('You-Project-Name-Here | Alias-Name-Here');
  });
});
