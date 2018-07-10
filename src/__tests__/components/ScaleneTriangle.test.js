import React from 'react';
import { ScaleneTriangle } from '../../components';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer
    .create(<ScaleneTriangle width={100} height={200} fill="#000" />)
    .toJSON();
  expect(rendered).toBeTruthy();
});

it('renders square component', () => {
  const tree = renderer
    .create(<ScaleneTriangle width={100} height={200} fill="#000" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
