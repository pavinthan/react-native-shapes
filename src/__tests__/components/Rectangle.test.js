import React from 'react';
import { Rectangle } from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer
    .create(<Rectangle width={100} height={100} fill="#000" />)
    .toJSON();
  expect(rendered).toBeTruthy();
});

it('renders rectangle component', () => {
  const tree = renderer
    .create(<Rectangle width={100} height={100} fill="#000" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
