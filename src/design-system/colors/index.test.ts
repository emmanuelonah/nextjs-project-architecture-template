import { colors } from './index';

describe('colors', () => {
  it('should confirm colors are valid', () => {
    expect({
      white400: '#fff',
      white300: '#FDFEFF',
      white200: '#F7F7F7',
      white100: '#F7F7F7',

      warning400: '#FF7A00',
      warning300: '#FF9534',
      warning200: '#FFB067',
      warning100: '#FFD0A5',

      secondary400: '#181818',
      secondary300: '#737373',
      secondary200: '#B0B0B0',
      secondary100: '#DFDFDF',

      error400: '#FF0000',
      error300: '#FF5656',
      error200: '#FDA1A1',
      error100: '#FCDEDE',

      success400: '#02A543',
      success300: '#5CC486',
      success200: '#A2DDB9',
      success100: '#D4EEDE',

      blue400: '#0038FF',
      blue300: '#5B7FFE',
      blue200: '#A1B5FD',
      blue100: '#D4DDFC',

      magenta400: '#CD00D1',
      magenta300: '#DE5BE0',
      magenta200: '#EBA1ED',
      magenta100: '#F4D4F5',

      primary400: '#0038FF',
      primary300: '#5B7FFE',
      primary200: '#A1B5FD',
      primary100: '#D4DDFC',

      dark400: '#212121',
      dark300: '#4D4D4D',
      dark200: '#999999',
      dark100: '#C9C9C9',

      accent400: '#E7E7E7',
      accent300: '#EEEEEE',
      accent200: '#F3F3F3',
      accent100: '#F7F7F7',
    }).toMatchObject(colors);
  });
});
