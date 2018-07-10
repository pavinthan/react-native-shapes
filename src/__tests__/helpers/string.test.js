import { strBetween } from '../../helpers/string';

it('Find word between word two words from string', () => {
  expect(
    strBetween('There is no one who loves pain itself', 'loves', 'itself')
  ).toBe('pain');
});

it('Return must be empty if word not found from string', () => {
  expect(
    strBetween('There is no one who loves pain itself', 'hello', 'world')
  ).toBe('');
});
