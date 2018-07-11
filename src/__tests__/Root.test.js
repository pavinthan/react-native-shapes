import React from 'react';
import Root from '../Root';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Root />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders app component', () => {
  const tree = renderer.create(<Root />).toJSON();
  expect(tree).toMatchSnapshot();
});
