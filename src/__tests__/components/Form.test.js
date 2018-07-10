import React from 'react';
import { Form } from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Form />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders form component', () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
