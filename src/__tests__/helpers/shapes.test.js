import { findShape, findMeasurements, findValues } from '../../helpers/shapes';

describe('find shape from string', () => {
  it('Find shape from string', () => {
    expect(findShape('Draw a circle with a radius of 100 ')).toBe('circle');
  });

  it('Find shape must return empty if not found', () => {
    expect(findShape('circle with a radius of 100')).toBe('');
  });
});

describe('find measurements from string', () => {
  it('Find measurements from string', () => {
    expect(
      Array.isArray(findMeasurements('Draw a circle with a radius of 100'))
    ).toBe(true);
  });

  it('Find measurements must return empty if not found', () => {
    expect(findMeasurements('circle with')).toBe('');
  });
});

describe('find values from string', () => {
  it('Find values from string', () => {
    expect(
      Array.isArray(
        findValues('Draw a circle with a radius of 100', ['radius'])
      )
    ).toBe(true);
  });

  it('Find values must return array', () => {
    expect(Array.isArray(findValues('circle with a radius', ['radius']))).toBe(
      true
    );
  });
});
