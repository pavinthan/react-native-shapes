import React from 'react';
import { Polygon } from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer
    .create(<Polygon sideLength={100} sides={5} fill="#000" />)
    .toJSON();
  expect(rendered).toBeTruthy();
});

it('renders square component', () => {
  const tree = renderer
    .create(<Polygon sideLength={100} sides={5} fill="#000" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
