import React from 'react';
import { ColorPicker } from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ColorPicker />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders color picker component', () => {
  const tree = renderer.create(<ColorPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
